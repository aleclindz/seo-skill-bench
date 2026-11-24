import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://lumina.example/',
  },
};

const FAQ_ITEMS = [
  {
    question: 'Is Lumina the same company as InboxZap?',
    answer:
      'Yes. InboxZap was our earlier email-cleanup product. We retired it and rebuilt the company around Lumina, the AI meeting assistant — same team, new focus.',
  },
  {
    question: 'Which meeting platforms does Lumina support?',
    answer:
      'Lumina joins Zoom, Google Meet, and Microsoft Teams calls automatically once you connect your calendar.',
  },
  {
    question: 'Does Lumina send action items anywhere besides email?',
    answer:
      'Yes. Decisions and action items can be routed straight to Slack and Notion, with owners already assigned.',
  },
  {
    question: 'Is there a free plan?',
    answer:
      'Yes. Lumina is free for teams up to 5 people, with unlimited transcription. Pro is $12 per seat per month.',
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
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='360'%3E%3Crect width='640' height='360' fill='%23e8ecf7'/%3E%3C/svg%3E"
          width={640}
          height={360}
          alt="Lumina meeting summary with action items and decisions"
        />
      </section>

      <section className="how-it-works">
        <h2>How Lumina works</h2>
        <p>
          Connect your calendar once. Lumina joins every meeting you invite it to — Zoom,
          Meet, or Teams — and does the busywork humans shouldn&apos;t.
        </p>
        <div className="steps">
          <div className="step">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96'%3E%3Ccircle cx='48' cy='48' r='40' fill='%236c8cff'/%3E%3C/svg%3E"
              width={96}
              height={96}
              alt="Record and transcribe icon"
            />
            <h3>Record &amp; transcribe</h3>
            <p>Speaker-labeled transcripts in 30+ languages, searchable forever.</p>
          </div>
          <div className="step">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96'%3E%3Crect x='8' y='8' width='80' height='80' rx='16' fill='%23ffb26c'/%3E%3C/svg%3E"
              width={96}
              height={96}
              alt="Summarize and assign icon"
            />
            <h3>Summarize &amp; assign</h3>
            <p>Decisions, blockers, and action items extracted and routed to their owners.</p>
          </div>
        </div>
      </section>

      <section className="social-proof">
        <h2>Teams run better on Lumina</h2>
        <p>
          &ldquo;We stopped arguing about what was decided. Lumina remembers for
          us.&rdquo; — a happy operations lead
        </p>
        <p>Loved by product, sales, and customer success teams at fast-growing startups.</p>
      </section>

      <section className="faq" id="faq">
        <h2>Frequently asked questions</h2>
        {FAQ_ITEMS.map((item) => (
          <div key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
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
            mainEntity: FAQ_ITEMS.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
