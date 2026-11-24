import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'See every feature InboxZap uses to clean your inbox: bulk delete, mass unsubscribe, storage cleanup, and filters that keep it clean.',
  alternates: { canonical: '/features' },
};

const features = [
  {
    title: 'Bulk delete',
    body: 'Clear years of old email in one pass — select by sender, age, or size instead of deleting message by message.',
  },
  {
    title: 'Mass unsubscribe',
    body: 'Find every newsletter and promotional sender in your inbox and unsubscribe from all of them in one sitting.',
  },
  {
    title: 'Storage cleanup',
    body: 'Find the largest attachments and oldest promotional mail that are actually filling up your storage quota.',
  },
  {
    title: 'Keep-it-clean filters',
    body: 'Set up a few rules once so new newsletters and clutter never pile back up after you clean your inbox.',
  },
];

export default function FeaturesPage() {
  return (
    <main>
      <h1>Everything InboxZap does to clean your inbox</h1>
      <p>
        InboxZap connects to your Gmail or Outlook account and handles the bulk work of cleaning
        an inbox — deleting old mail, unsubscribing from newsletters, and keeping it clean after
        the first pass.
      </p>
      <div className="feature-list">
        {features.map((f) => (
          <section key={f.title}>
            <h2>{f.title}</h2>
            <p>{f.body}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
