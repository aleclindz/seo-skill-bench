import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Features — InboxZap',
  description:
    'Everything InboxZap does to your inbox: bulk delete old email, mass-unsubscribe from newsletters, free up Gmail and Outlook storage, and automate sorting with smart rules.',
  alternates: { canonical: 'https://lumina.example/features' },
  openGraph: {
    title: 'Features — InboxZap',
    description:
      'Bulk delete, mass-unsubscribe, storage rescue, and smart sorting rules for Gmail and Outlook.',
    url: 'https://lumina.example/features',
    images: ['/img/og-inboxzap.png'],
  },
};

export default function FeaturesPage() {
  return (
    <main>
      <h1>Features</h1>
      <p>InboxZap handles the entire inbox cleanup lifecycle, from first scan to ongoing upkeep.</p>

      <section id="bulk-delete">
        <h2>Bulk delete emails</h2>
        <p>
          Scan your whole mailbox and delete by age, sender, category, or size &mdash; in
          batches of thousands instead of one at a time. Keepers like invoices, contracts,
          and threads from key contacts are flagged and protected automatically before any
          delete runs. Read the full{' '}
          <Link href="/blog/post-3">guide to bulk deleting emails</Link>.
        </p>
      </section>

      <section id="unsubscribe">
        <h2>Mass-unsubscribe from newsletters</h2>
        <p>
          InboxZap finds every sender you&apos;ve ever subscribed to, ranks them by volume,
          and lets you unsubscribe from dozens of lists in one pass using the same one-click
          unsubscribe header your mail client already honors. See{' '}
          <Link href="/blog/post-4">how to unsubscribe the fast way</Link>.
        </p>
      </section>

      <section id="storage">
        <h2>Storage rescue</h2>
        <p>
          Ranks senders and attachments by size so you can clear a Gmail or Outlook
          &ldquo;storage full&rdquo; warning in minutes instead of guessing at search
          operators. Details in our{' '}
          <Link href="/blog/post-5">Gmail storage guide</Link>.
        </p>
      </section>

      <section id="filters">
        <h2>Smart sorting rules</h2>
        <p>
          Ready-made rule presets route newsletters, receipts, and notifications out of your
          inbox automatically, across both Gmail filters and Outlook rules. See{' '}
          <Link href="/blog/post-2">10 Gmail filters worth setting up</Link> or{' '}
          <Link href="/blog/post-11">the four-bucket sorting system</Link>.
        </p>
      </section>

      <section id="outlook">
        <h2>Works with Outlook, not just Gmail</h2>
        <p>
          Everything above works the same way on Outlook as it does on Gmail &mdash; bulk
          delete, mass-unsubscribe, storage rescue, and sorting rules. Read{' '}
          <Link href="/blog/post-10">cleaning up your Outlook inbox</Link>.
        </p>
      </section>

      <p>
        <Link className="cta" href="/pricing">
          See pricing
        </Link>
      </p>
    </main>
  );
}
