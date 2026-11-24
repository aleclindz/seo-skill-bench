import type { Metadata } from 'next';

export const SITE_URL = 'https://lumina.example';
const OG_IMAGE = '/img/og-lumina.png';

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      images: [OG_IMAGE],
      type: path.startsWith('/blog/') && path !== '/blog' ? 'article' : 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
