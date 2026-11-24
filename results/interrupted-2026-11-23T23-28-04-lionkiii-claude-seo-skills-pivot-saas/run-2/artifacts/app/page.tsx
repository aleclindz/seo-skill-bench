const faqs = [
  {
    question: 'How does Lumina join my meetings?',
    answer:
      'Connect your calendar once and Lumina joins every meeting you invite it to on Zoom, Google Meet, or Microsoft Teams — no plugin or dial-in required.',
  },
  {
    question: 'Is Lumina free?',
    answer:
      'Yes. Lumina is free for teams up to 5 people, with unlimited meetings and 30-day transcript history. Paid plans add unlimited history and integrations.',
  },
  {
    question: 'What languages does Lumina transcribe?',
    answer:
      'Lumina produces speaker-labeled transcripts in more than 30 languages, searchable across your whole workspace.',
  },
  {
    question: 'Where do action items end up?',
    answer:
      'Lumina extracts decisions, blockers, and action items from every meeting and can route them straight to Slack or Notion.',
  },
];

const faqJsonLd = {
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
        <dl>
          {faqs.map((faq) => (
            <div key={faq.question}>
              <dt>{faq.question}</dt>
              <dd>{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
