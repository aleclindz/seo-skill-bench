import Link from 'next/link';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is InboxZap free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Free plan covers one personal Gmail or Outlook inbox with bulk delete and one-click unsubscribe, no credit card required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will InboxZap delete something I need?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Every cleanup runs through a review step before anything is removed, and deleted mail sits in Trash for 30 days, so you can always undo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does InboxZap work with Gmail and Outlook?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, InboxZap connects to both Gmail and Outlook accounts and uses the same bulk delete, unsubscribe, and storage cleanup tools on each.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you read or sell the contents of my inbox?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. InboxZap only reads the sender and subject metadata needed to find old mail and newsletters to clean up. Your email content is never sold or used for anything else.',
      },
    },
  ],
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'InboxZap',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'InboxZap bulk-deletes old emails, unsubscribes you from newsletters, and frees up Gmail or Outlook storage to help you reach inbox zero.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="hero">
        <h1>Get to inbox zero without reading every email</h1>
        <p>
          InboxZap bulk-deletes old email, unsubscribes you from newsletters in one click,
          and frees up Gmail or Outlook storage — so your inbox stops being a second job.
        </p>
        <Link className="cta" href="/pricing">
          Start free
        </Link>
      </section>

      <section className="how-it-works">
        <h2>How InboxZap works</h2>
        <p>
          Connect your Gmail or Outlook account once. InboxZap scans your mail, groups it by
          sender, age, and size, and shows you exactly what it would clean up before anything
          is deleted. Approve a batch, and it&apos;s gone — moved to Trash with a 30-day undo
          window, never destroyed outright.
        </p>
      </section>

      <section className="use-cases">
        <h2>Built for the inbox problems people actually search for</h2>
        <ul>
          <li>
            <Link href="/blog/post-3">Bulk delete thousands of old emails</Link> in a few
            clicks, without losing the ones that matter.
          </li>
          <li>
            <Link href="/blog/post-4">Mass unsubscribe from newsletters</Link> instead of
            clicking &ldquo;unsubscribe&rdquo; one sender at a time.
          </li>
          <li>
            <Link href="/blog/post-5">Free up Gmail storage</Link> by clearing out the large
            attachments and old promotions that fill your quota.
          </li>
        </ul>
      </section>

      <section className="social-proof">
        <h2>Inboxes run calmer on InboxZap</h2>
        <p>
          &ldquo;I deleted twelve years of email in an afternoon and didn&apos;t lose a single
          invoice.&rdquo; — an early user
        </p>
      </section>

      <section className="faq" id="faq">
        <h2>Frequently asked questions</h2>
        <div>
          <h3>Is InboxZap free?</h3>
          <p>
            Yes. The Free plan covers one personal Gmail or Outlook inbox with bulk delete and
            one-click unsubscribe, no credit card required. See <Link href="/pricing">pricing</Link>.
          </p>
        </div>
        <div>
          <h3>Will InboxZap delete something I need?</h3>
          <p>
            No. Every cleanup runs through a review step before anything is removed, and
            deleted mail sits in Trash for 30 days, so you can always undo.
          </p>
        </div>
        <div>
          <h3>Does InboxZap work with Gmail and Outlook?</h3>
          <p>
            Yes — see the full breakdown on the <Link href="/features">features page</Link>.
          </p>
        </div>
        <div>
          <h3>Do you read or sell the contents of my inbox?</h3>
          <p>
            No. InboxZap only reads sender and subject metadata to find what to clean up. Your
            email content is never sold or used for anything else.
          </p>
        </div>
      </section>
    </main>
  );
}
