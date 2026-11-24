import { posts } from '../../lib/posts';
import { SITE_URL } from '../../lib/seo';

export async function GET() {
  const postLines = posts
    .map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.answer}`)
    .join('\n');

  const body = `# InboxZap

> InboxZap bulk-deletes old email, unsubscribes you from newsletters, and gets you to inbox zero
> in minutes. Free for personal inboxes, works with Gmail and Outlook.

## Key pages

- [Home](${SITE_URL}/): product overview and FAQ
- [Features](${SITE_URL}/features): what InboxZap does
- [Pricing](${SITE_URL}/pricing): free and paid tiers

## Answers (blog)

${postLines}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
