import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const FAQ = [
  {
    q: 'What happened to InboxZap?',
    a: 'InboxZap is now Lumina. We outgrew email cleanup and rebuilt the product as a full AI meeting assistant — recording, transcribing, and summarizing your team’s calls. If you had an InboxZap account, sign in at lumina.example with the same email.',
  },
  {
    q: 'Which video platforms does Lumina support?',
    a: 'Lumina joins and records calls on Zoom, Google Meet, and Microsoft Teams. Connect your calendar once and it joins every meeting you invite it to.',
  },
  {
    q: 'Is there a free plan?',
    a: 'Yes. The Free plan covers up to 5 teammates with unlimited meetings, 30-day transcript history, and basic summaries. See the full breakdown on the pricing page.',
  },
  {
    q: 'How accurate is the transcription?',
    a: 'Lumina produces speaker-labeled transcripts in 30+ languages, searchable across your whole workspace minutes after each call ends.',
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

      <section id="faq" className="faq">
        <h2>Frequently asked questions</h2>
        {FAQ.map((item) => (
          <div key={item.q} className="faq-item">
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </section>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ.map((item) => ({
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
