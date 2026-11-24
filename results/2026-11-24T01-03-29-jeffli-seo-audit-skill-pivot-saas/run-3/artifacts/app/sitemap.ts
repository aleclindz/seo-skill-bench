import type { MetadataRoute } from 'next';
import { posts } from '../lib/blog-posts';

const BASE = 'https://lumina.example';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/features`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/pricing`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/blog`, changeFrequency: 'weekly', priority: 0.6 },
  ];

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.dateModified ?? post.publishedAt,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [...staticEntries, ...postEntries];
}
