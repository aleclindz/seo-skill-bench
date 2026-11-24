import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ — InboxZap',
  description:
    'Answers to common questions about InboxZap: pricing, whether deletes can be undone, Outlook support, privacy, and how mass-unsubscribe works.',
  alternates: { canonical: 'https://lumina.example/faq' },
  openGraph: {
    title: 'FAQ — InboxZap',
    description: 'Common questions about InboxZap, answered.',
    url: 'https://lumina.example/faq',
    images: ['/img/og-inboxzap.png'],
  },
};

const faqs = [
  {
    q: 'Is InboxZap free?',
    a: 'Yes. The free plan covers one personal inbox with a full bulk-delete and mass-unsubscribe scan every month. Pro removes the monthly limit and adds Outlook support.',
  },
  {
    q: 'Does InboxZap permanently delete emails, or just archive them?',
    a: 'By default InboxZap moves messages to Trash, where they follow your mail provider’s normal retention window (30 days in Gmail and Outlook) before permanent deletion — the same safety net as deleting by hand. You can also choose to archive instead of delete for any category.',
  },
  {
    q: 'Will InboxZap unsubscribe me automatically from every newsletter?',
    a: 'InboxZap finds every sender you’ve subscribed to and ranks them by volume, but you choose which ones to leave. Nothing is unsubscribed without your approval.',
  },
  {
    q: 'Does InboxZap work with Outlook, or just Gmail?',
    a: 'Both. Bulk delete, mass-unsubscribe, storage rescue, and sorting rules all work the same way on Outlook as they do on Gmail.',
  },
  {
    q: 'Is it safe to connect my inbox to InboxZap?',
    a: 'InboxZap only reads what it needs to show you a cleanup plan, never sells or shares inbox data, and every bulk action requires your approval before anything is deleted.',
  },
  {
    q: 'Can I undo a bulk delete?',
    a: 'Deleted mail goes to Trash and stays there for your provider’s normal grace period, so you can restore anything before it’s permanently removed.',
  },
  {
    q: 'How is InboxZap different from Gmail’s built-in filters?',
    a: 'Filters only apply to new mail going forward. InboxZap also cleans up everything already sitting in your inbox and archive, then hands off to the same kind of sorting rules for new mail.',
  },
];

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <main>
      <h1>Frequently asked questions</h1>
      <div className="faq-list">
        {faqs.map((f) => (
          <section key={f.q}>
            <h2>{f.q}</h2>
            <p>{f.a}</p>
          </section>
        ))}
      </div>
      <p>
        Still have questions? See the full <Link href="/features">feature list</Link> or{' '}
        <Link href="/pricing">pricing</Link>.
      </p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </main>
  );
}
