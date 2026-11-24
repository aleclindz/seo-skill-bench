import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Features — InboxZap',
  description:
    'Bulk delete old email, mass unsubscribe from newsletters, free up Gmail or Outlook storage, and automate inbox sorting — all from InboxZap.',
  alternates: { canonical: '/features' },
  openGraph: {
    title: 'Features — InboxZap',
    description:
      'Bulk delete, mass unsubscribe, storage cleanup, and smart filters for Gmail and Outlook.',
    url: '/features',
    type: 'website',
  },
};

export default function FeaturesPage() {
  return (
    <main>
      <h1>Everything you need to clean up your inbox</h1>
      <p>
        InboxZap handles the parts of email cleanup that are tedious to do by hand, so you can
        get to inbox zero and stay there.
      </p>

      <section>
        <h2>Bulk delete, built on search, not guesswork</h2>
        <p>
          InboxZap combines age, sender, and size into one pass — the same logic behind
          search operators like &ldquo;older_than:2y&rdquo; or &ldquo;larger:10M&rdquo; — and
          shows you exactly what would be deleted before you confirm. See the{' '}
          <Link href="/blog/post-3">bulk delete guide</Link>.
        </p>
      </section>

      <section>
        <h2>One-click mass unsubscribe</h2>
        <p>
          InboxZap finds every newsletter and mailing list in your inbox, ranks them by
          volume, and lets you unsubscribe from dozens at once instead of hunting for links
          one sender at a time. Read more on{' '}
          <Link href="/blog/post-4">unsubscribing the fast way</Link>.
        </p>
      </section>

      <section>
        <h2>Free up Gmail storage automatically</h2>
        <p>
          Large attachments and years of Promotions mail are usually what fills a Gmail
          quota. InboxZap surfaces the biggest offenders first so you recover gigabytes in
          minutes, not hours. See{' '}
          <Link href="/blog/post-5">how to free up Gmail storage</Link>.
        </p>
      </section>

      <section>
        <h2>Smart filters and rules, without the regex</h2>
        <p>
          Set up recurring rules — newsletters to a Reading label, receipts archived on
          arrival, notifications batched daily — once, and InboxZap keeps applying them.
        </p>
      </section>

      <section>
        <h2>Works with Gmail and Outlook</h2>
        <p>
          The same bulk delete, unsubscribe, and storage tools work identically whether your
          inbox lives in Gmail or Outlook.
        </p>
      </section>

      <section>
        <h2>Privacy first</h2>
        <p>
          InboxZap only reads the sender and subject metadata needed to find what to clean
          up. Your email content is never sold or used for anything else — see our{' '}
          <Link href="/pricing">pricing</Link> to get started.
        </p>
      </section>
    </main>
  );
}
