import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features — Bulk Delete, Unsubscribe & Inbox Cleanup | InboxZap',
  description:
    'See how InboxZap bulk-deletes old emails, mass-unsubscribes from newsletters, and frees up Gmail or Outlook storage automatically.',
  alternates: { canonical: 'https://lumina.example/features' },
};

export default function FeaturesPage() {
  return (
    <main>
      <h1>Features</h1>
      <section>
        <h2>Bulk delete old emails</h2>
        <p>
          Group thousands of messages by sender, age, or size and delete them in a single
          pass, with important mail protected automatically.
        </p>
      </section>
      <section>
        <h2>Mass unsubscribe from newsletters</h2>
        <p>
          See every newsletter and subscription in your inbox at once and unsubscribe from
          dozens in a click, using each sender&apos;s official unsubscribe header.
        </p>
      </section>
      <section>
        <h2>Free up Gmail and Outlook storage</h2>
        <p>
          Find your largest attachments and oldest promotional mail so you can clear a
          storage-full warning in minutes instead of hunting manually.
        </p>
      </section>
    </main>
  );
}
