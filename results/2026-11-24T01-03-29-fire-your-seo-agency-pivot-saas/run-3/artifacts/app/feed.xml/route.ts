import { posts } from '../../lib/posts';
import { SITE_URL } from '../../lib/seo';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export async function GET() {
  const items = posts
    .map(
      (p) => `
    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${SITE_URL}/blog/${p.slug}</link>
      <guid>${SITE_URL}/blog/${p.slug}</guid>
      <description>${escapeXml(p.description)}</description>
      <pubDate>${new Date(p.datePublished).toUTCString()}</pubDate>
    </item>`
    )
    .join('');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>InboxZap Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Direct answers to inbox-cleanup questions.</description>${items}
  </channel>
</rss>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
