const faqs = [
  {
    question: 'Does Lumina work with Zoom, Google Meet, and Microsoft Teams?',
    answer:
      'Yes. Connect your calendar once and Lumina automatically joins every meeting you invite it to on Zoom, Google Meet, or Microsoft Teams — no extra setup per call.',
  },
  {
    question: 'Is there a free plan?',
    answer:
      'Yes. Lumina is free for teams of up to 5 people, with unlimited meetings and 30-day transcript history. Paid plans add unlimited history and integrations.',
  },
  {
    question: 'Does Lumina replace a human note-taker?',
    answer:
      "For most teams, yes. Lumina produces speaker-labeled transcripts plus a structured summary — decisions, blockers, and action items — so nobody has to take notes during the call.",
  },
  {
    question: 'What languages does Lumina support?',
    answer: 'Lumina transcribes meetings in more than 30 languages, with speaker labels in each.',
  },
  {
    question: 'Where do action items and recaps go?',
    answer:
      'Lumina can push action items to Slack and sync recaps to Notion, Confluence, or your CRM, so follow-up lives where your team already works.',
  },
];

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Lumina',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'AI meeting assistant that records, transcribes, and summarizes team meetings.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

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
          Meet, or Teams — and does the busywork humans shouldn&apos;t. See the full{' '}
          <a href="/features">feature list</a> or jump straight to{' '}
          <a href="/pricing">pricing</a>.
        </p>
        <div className="steps">
          <div className="step">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96'%3E%3Ccircle cx='48' cy='48' r='40' fill='%236c8cff'/%3E%3C/svg%3E"
              width={96}
              height={96}
              alt="Recording and transcription icon"
            />
            <h3>Record &amp; transcribe</h3>
            <p>Speaker-labeled transcripts in 30+ languages, searchable forever.</p>
          </div>
          <div className="step">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96'%3E%3Crect x='8' y='8' width='80' height='80' rx='16' fill='%23ffb26c'/%3E%3C/svg%3E"
              width={96}
              height={96}
              alt="Summarization and task assignment icon"
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
        {faqs.map((faq) => (
          <div className="faq-item" key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
