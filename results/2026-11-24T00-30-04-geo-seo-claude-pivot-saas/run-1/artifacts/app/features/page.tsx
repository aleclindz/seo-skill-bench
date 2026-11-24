import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features — InboxZap Email Cleanup App',
  description:
    'Bulk delete old email, mass unsubscribe from newsletters, and automatic sorting rules for Gmail and Outlook. Everything InboxZap does to clean your inbox.',
  alternates: { canonical: 'https://lumina.example/features' },
  openGraph: {
    title: 'Features — InboxZap Email Cleanup App',
    description:
      'Bulk delete, mass unsubscribe, and automatic sorting for Gmail and Outlook.',
    url: 'https://lumina.example/features',
    images: ['/img/og-inboxzap.png'],
  },
};

export default function FeaturesPage() {
  return (
    <main>
      <h1>Features</h1>
      <p>InboxZap handles the entire inbox cleanup lifecycle, from first sweep to staying sorted.</p>

      <section>
        <h2>Bulk delete</h2>
        <p>
          Clear thousands of old emails in one pass. InboxZap protects anything starred,
          labeled, or flagged before it deletes by age, category, or sender — and
          everything removed stays recoverable in Trash for 30 days.
        </p>
      </section>

      <section>
        <h2>Mass unsubscribe</h2>
        <p>
          Find every newsletter and marketing list you&apos;re subscribed to and
          unsubscribe from the noisy ones in a single click, using each sender&apos;s
          one-click unsubscribe header.
        </p>
      </section>

      <section>
        <h2>Automatic sorting</h2>
        <p>
          InboxZap builds filter rules for Gmail and Outlook that route newsletters,
          receipts, and notifications out of your inbox automatically, so new mail stays
          sorted without manual upkeep.
        </p>
      </section>

      <section>
        <h2>Works with Gmail and Outlook</h2>
        <p>
          Connect either account directly. No forwarding, no plugins to install locally —
          InboxZap runs entirely through your provider&apos;s official API.
        </p>
      </section>
    </main>
  );
}
