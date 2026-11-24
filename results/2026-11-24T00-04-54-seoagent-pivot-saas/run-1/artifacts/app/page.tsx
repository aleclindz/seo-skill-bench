const faq = [
  {
    q: 'What does Lumina actually do in a meeting?',
    a: 'Lumina joins your Zoom, Google Meet, or Microsoft Teams call, records and transcribes it, and delivers a summary with decisions and action items before the meeting ends.',
  },
  {
    q: 'Is Lumina free?',
    a: 'Yes. Lumina is free for teams up to 5 people, with unlimited transcription. Pro is $12 per seat per month, and Enterprise plans are custom.',
  },
  {
    q: 'Which video platforms does Lumina support?',
    a: 'Lumina joins Zoom, Google Meet, and Microsoft Teams calls automatically once you connect your calendar.',
  },
  {
    q: 'What happened to InboxZap?',
    a: 'InboxZap was our previous product, an email inbox-cleanup tool. We shut it down and rebuilt the company as Lumina, an AI meeting assistant with no feature overlap with InboxZap.',
  },
  {
    q: 'Does Lumina integrate with the tools my team already uses?',
    a: 'Yes. Lumina pushes action items to Slack, syncs recaps to Notion and Confluence, and can attach transcripts to your CRM.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
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
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='360'%3E%3Crect width='640' height='360' fill='%23e8ecf7'/%3E%3C/svg%3E"
          width={640}
          height={360}
          alt="Lumina dashboard showing a meeting summary with decisions and action items"
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
              alt="Summarize and assign action items icon"
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
      </section>

      <section className="faq" id="faq">
        <h2>Frequently asked questions</h2>
        {faq.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
