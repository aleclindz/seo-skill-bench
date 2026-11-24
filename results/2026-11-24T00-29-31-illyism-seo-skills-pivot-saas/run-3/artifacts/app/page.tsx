import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const FAQS = [
  {
    q: 'Is Lumina the same product as InboxZap?',
    a: "Lumina is built by the same team that made InboxZap. We retired InboxZap's inbox-cleanup tools to focus entirely on meetings: recording, transcription, and AI summaries for teams.",
  },
  {
    q: 'Which calling apps does Lumina support?',
    a: 'Zoom, Google Meet, and Microsoft Teams. Invite Lumina to a meeting the same way you would invite a person.',
  },
  {
    q: 'Is there a free plan?',
    a: 'Yes. Teams up to 5 people get unlimited meetings with 30-day transcript history at no cost.',
  },
  {
    q: 'Where do action items and summaries go?',
    a: 'Straight to Slack and Notion, plus your Lumina workspace, so nothing lives only in a transcript nobody reopens.',
  },
];

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
        <p className="rebrand-note">
          Formerly InboxZap — we shut down the inbox-cleanup tools to build Lumina for
          meetings instead.
        </p>
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
        {FAQS.map((item) => (
          <div className="faq-item" key={item.q}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Lumina',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            description:
              'AI meeting assistant that records, transcribes, and summarizes team meetings.',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
          }),
        }}
      />
    </main>
  );
}
