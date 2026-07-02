import type { MetadataRoute } from 'next';

const BASE = 'https://lumina.example';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/features`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/pricing`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/blog`, changeFrequency: 'weekly', priority: 0.6 },
  ];

  try {
    // TODO: include blog posts once the content API exposes a stable listing.
    // const posts = await fetchPosts();
    // return [...staticEntries, ...posts.map(...)];
    return staticEntries;
  } catch {
    // If anything goes wrong, fall back to the static pages so the build never fails.
    return staticEntries;
  }
}
