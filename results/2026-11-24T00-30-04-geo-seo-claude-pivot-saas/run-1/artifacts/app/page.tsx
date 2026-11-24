import Link from 'next/link';
import { posts } from './blog/posts';

const faqs = [
  {
    question: 'Is InboxZap free?',
    answer:
      'Yes. Personal inboxes are free, including bulk delete, mass unsubscribe, and automatic sorting. Paid plans add team-wide cleanup and priority support.',
  },
  {
    question: 'Does InboxZap work with Gmail and Outlook?',
    answer:
      'InboxZap connects to Gmail and Outlook (Microsoft 365) directly. You can bulk delete, unsubscribe, and set up automatic sorting rules in either without leaving the app.',
  },
  {
    question: 'Will InboxZap delete anything I need?',
    answer:
      'No. InboxZap always protects starred, labeled, and flagged messages before any bulk action, and everything deleted stays recoverable in Trash for 30 days.',
  },
  {
    question: 'Is my email data safe with InboxZap?',
    answer:
      'Your mail is never sold, shared, or used to train anything. InboxZap only reads what it needs to run the cleanup action you request.',
  },
];

const featuredPosts = posts.slice(0, 3);

const softwareApplicationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'InboxZap',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'InboxZap bulk-deletes old emails, unsubscribes you from newsletters, and gets you to inbox zero in minutes.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <h1>Clean your inbox in minutes, not weekends</h1>
        <p>
          InboxZap bulk-deletes old email, unsubscribes you from newsletters you never
          read, and keeps your inbox sorted automatically — so you reach inbox zero once
          and actually stay there.
        </p>
        <a className="cta" href="/pricing">
          Start free
        </a>
      </section>

      <section className="how-it-works">
        <h2>How InboxZap works</h2>
        <p>
          Connect Gmail or Outlook once. InboxZap scans your mailbox, protects anything
          starred or labeled important, then clears the backlog: old email gone, noisy
          newsletters unsubscribed, and simple rules set up so new mail sorts itself from
          here on.
        </p>
      </section>

      <section className="social-proof">
        <h2>Thousands of inboxes, zero regrets</h2>
        <p>
          &ldquo;I had 40,000 unread emails. InboxZap got me to zero in an afternoon and I
          haven&apos;t looked back.&rdquo; — a relieved customer
        </p>
      </section>

      <section className="from-the-blog">
        <h2>From the blog</h2>
        <ul>
          {featuredPosts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
        <p>
          <Link href="/blog">Read more inbox-cleanup guides &rarr;</Link>
        </p>
      </section>

      <section id="faq" className="faq">
        <h2>Frequently asked questions</h2>
        {faqs.map((f) => (
          <div className="faq-item" key={f.question}>
            <h3>{f.question}</h3>
            <p>{f.answer}</p>
          </div>
        ))}
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
