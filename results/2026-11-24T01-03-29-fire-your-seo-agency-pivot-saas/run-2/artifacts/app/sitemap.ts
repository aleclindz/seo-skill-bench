import type { MetadataRoute } from 'next';
import { SITE } from '../lib/site';
import { getAllPosts } from '../lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE.url}/features`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/pricing`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/faq`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE.url}/blog`, changeFrequency: 'weekly', priority: 0.6 },
  ];

  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: post.dateModified,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [...staticEntries, ...postEntries];
}
