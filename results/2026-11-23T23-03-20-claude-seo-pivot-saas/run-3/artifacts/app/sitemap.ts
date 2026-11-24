import type { MetadataRoute } from 'next';
import { SITE_URL } from '../lib/site';
import { getAllPosts } from './blog/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/features`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/pricing`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/blog`, changeFrequency: 'weekly', priority: 0.6 },
  ];

  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [...staticEntries, ...postEntries];
}
