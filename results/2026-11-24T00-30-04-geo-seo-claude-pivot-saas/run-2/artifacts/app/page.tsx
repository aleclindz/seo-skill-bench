import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: 'https://lumina.example/' },
};

const faqs = [
  {
    q: 'What happened to InboxZap?',
    a: "InboxZap is now Lumina. We rebuilt the product around meetings instead of email, since that's where teams told us they were losing the most time. Read the full story on our blog.",
  },
  {
    q: 'Does Lumina work with Zoom, Google Meet, and Microsoft Teams?',
    a: 'Yes. Connect your calendar once and Lumina joins every meeting you invite it to across all three.',
  },
  {
    q: 'How much does Lumina cost?',
    a: 'Lumina is free for teams up to 5 people. Paid plans start at $12 per seat per month and include unlimited transcript history and integrations.',
  },
  {
    q: 'Is my meeting data secure?',
    a: 'Transcripts and recordings are encrypted in transit and at rest. Enterprise plans add SSO/SAML and configurable data residency.',
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

const softwareApplicationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Lumina',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'AI meeting assistant that records, transcribes, and summarizes team meetings.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <h1>Never take meeting notes again</h1>
        <p>
          Lumina is the AI meeting assistant for teams. It joins your calls, records and
          transcribes them, and delivers a summary with decisions and action items before
          you&apos;re back at your desk.
        </p>
        <a className="cta" href="/pricing">
          Start free
        </a>
      </section>

      <section className="how-it-works">
        <h2>How Lumina works</h2>
        <p>
          Connect your calendar once. Lumina joins every meeting you invite it to — Zoom,
          Meet, or Teams — and does the busywork humans shouldn&apos;t.
        </p>
      </section>

      <section className="social-proof">
        <h2>Teams run better on Lumina</h2>
        <p>
          &ldquo;We stopped arguing about what was decided. Lumina remembers for
          us.&rdquo; — a happy operations lead
        </p>
      </section>

      <section className="faq" id="faq">
        <h2>Frequently asked questions</h2>
        {faqs.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>
              {f.q === 'What happened to InboxZap?' ? (
                <>
                  InboxZap is now Lumina. We rebuilt the product around meetings instead
                  of email, since that&apos;s where teams told us they were losing the
                  most time. Read the{' '}
                  <a href="/blog/inboxzap-is-now-lumina">full story on our blog</a>.
                </>
              ) : (
                f.a
              )}
            </p>
          </div>
        ))}
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }}
      />
    </main>
  );
}
