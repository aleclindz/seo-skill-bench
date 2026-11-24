import type { Metadata } from 'next';
import Link from 'next/link';
import { organizationJsonLd, softwareApplicationJsonLd } from '../lib/seo';

export const metadata: Metadata = {
  title: 'InboxZap — Clean Your Inbox in Minutes',
  description:
    'InboxZap bulk-deletes old emails, unsubscribes you from newsletters, and gets you to inbox zero in minutes. Free for personal inboxes.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'InboxZap — Clean Your Inbox in Minutes',
    description:
      'Bulk delete old emails, unsubscribe from newsletters, and reach inbox zero in minutes.',
    url: '/',
  },
};

const faqs = [
  {
    q: 'What does InboxZap actually do?',
    a: 'InboxZap bulk-deletes old email, unsubscribes you from newsletters in one pass, and helps you reach inbox zero in minutes instead of hours of manual triage.',
  },
  {
    q: 'Is InboxZap free?',
    a: 'Yes — InboxZap is free for personal inboxes. See /pricing for what is included at each tier.',
  },
  {
    q: 'Does InboxZap work with Gmail and Outlook?',
    a: 'Yes, InboxZap connects to both Gmail and Outlook accounts and uses the same bulk-delete and unsubscribe actions on either provider.',
  },
  {
    q: 'Is it safe to give InboxZap access to my inbox?',
    a: 'InboxZap only requests the mail access it needs to delete and unsubscribe on your behalf, and you can revoke that access at any time from your provider\'s account security settings.',
  },
  {
    q: 'How is InboxZap different from just using Gmail or Outlook\'s own tools?',
    a: 'Gmail and Outlook both have free built-in bulk tools (see /blog/best-email-cleanup-tools) — InboxZap is for doing this repeatedly across a large inbox without repeating the manual steps every time.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="hero">
        <h1>Clean your inbox in minutes, not hours</h1>
        <p>
          InboxZap bulk-deletes old emails, unsubscribes you from newsletters, and gets you to
          inbox zero fast. Free for personal inboxes.
        </p>
        <Link className="cta" href="/pricing">
          Start free
        </Link>
      </section>

      <section className="how-it-works">
        <h2>How InboxZap works</h2>
        <p>
          Connect your Gmail or Outlook account once. InboxZap finds the old mail, newsletters,
          and clutter that is actually filling your inbox, and clears it in bulk — no opening
          thousands of messages one at a time.
        </p>
        <div className="steps">
          <div className="step">
            <h3>Bulk delete</h3>
            <p>Clear years of old mail in one pass instead of deleting message by message.</p>
          </div>
          <div className="step">
            <h3>Mass unsubscribe</h3>
            <p>Stop every newsletter and promotional sender you never open, in one sitting.</p>
          </div>
        </div>
      </section>

      <section className="social-proof">
        <h2>Reach inbox zero without the busywork</h2>
        <p>
          &ldquo;I cleared ten years of email in one sitting instead of doing it a little at a
          time forever.&rdquo; &mdash; a happy InboxZap user
        </p>
      </section>

      <section className="faq" id="faq">
        <h2>Frequently asked questions</h2>
        {faqs.map((f) => (
          <div className="faq-item" key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
