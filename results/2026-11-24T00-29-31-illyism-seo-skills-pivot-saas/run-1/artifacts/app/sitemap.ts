import type { MetadataRoute } from 'next';
import { posts } from './blog/posts';

const BASE = 'https://lumina.example';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/features`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/pricing`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/blog`, changeFrequency: 'weekly', priority: 0.6 },
    ...posts.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: post.publishedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ];
}
