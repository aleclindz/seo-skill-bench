import { SITE } from '../../lib/site';
import { getAllPosts } from '../../lib/content';

function escapeXml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export async function GET() {
  const posts = getAllPosts();
  const items = posts
    .map(
      (p) => `
  <item>
    <title>${escapeXml(p.title)}</title>
    <link>${SITE.url}/blog/${p.slug}</link>
    <guid>${SITE.url}/blog/${p.slug}</guid>
    <pubDate>${new Date(p.datePublished).toUTCString()}</pubDate>
    <description>${escapeXml(p.description)}</description>
  </item>`
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>${SITE.name} Blog</title>
  <link>${SITE.url}/blog</link>
  <description>${escapeXml(SITE.description)}</description>${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
