const faqs = [
  {
    question: 'What is Lumina?',
    answer:
      "Lumina is an AI meeting assistant for teams. It joins your calls, records and transcribes them, and delivers a summary with decisions and action items before you're back at your desk.",
  },
  {
    question: 'Which video platforms does Lumina support?',
    answer: 'Lumina joins every meeting you invite it to on Zoom, Google Meet, or Microsoft Teams.',
  },
  {
    question: 'Is Lumina free?',
    answer: 'Yes — Lumina is free for teams up to 5 people.',
  },
  {
    question: 'What languages does Lumina transcribe?',
    answer: 'Lumina produces speaker-labeled transcripts in 30+ languages, and every transcript stays searchable forever.',
  },
  {
    question: 'What happens to decisions and action items after a meeting?',
    answer: 'Lumina extracts decisions, blockers, and action items from the conversation and routes them to their owners automatically.',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </section>

      <section className="learn-more">
        <h2>Learn more</h2>
        <p>
          Read the <a href="/blog">blog</a> for tips on running better meetings, or see
          Lumina&apos;s full <a href="/features">features</a> and <a href="/pricing">pricing</a>.
        </p>
      </section>
    </main>
  );
}
