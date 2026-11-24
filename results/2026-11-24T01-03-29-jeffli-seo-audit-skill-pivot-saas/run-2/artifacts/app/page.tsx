const faqs = [
  {
    question: 'What does Lumina do?',
    answer:
      "Lumina joins your Zoom, Google Meet, or Teams calls, records and transcribes them, and delivers a summary with decisions and action items before you're back at your desk.",
  },
  {
    question: 'Is Lumina the same company as InboxZap?',
    answer:
      "Yes. InboxZap was our original email-cleanup product. We retired it to build Lumina, an AI meeting assistant, after hearing that meeting overload — not inbox overload — was the bigger time sink for our customers' teams.",
  },
  {
    question: 'Is there a free plan?',
    answer:
      'Yes — Lumina is free for teams of up to 5, with unlimited meetings, 30-day transcript history, and basic summaries. See Pricing for Pro and Enterprise plans.',
  },
  {
    question: 'Which video platforms does Lumina support?',
    answer: 'Zoom, Google Meet, and Microsoft Teams, with speaker-labeled transcripts in 30+ languages.',
  },
  {
    question: 'Where do action items go?',
    answer:
      'Lumina routes decisions and action items to Slack and Notion automatically, and attaches transcripts to your CRM.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
        {faqs.map((faq) => (
          <div key={faq.question} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
