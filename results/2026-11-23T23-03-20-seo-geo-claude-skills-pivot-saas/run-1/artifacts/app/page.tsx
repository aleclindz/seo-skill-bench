const faqs = [
  {
    question: 'Is Lumina the same as InboxZap?',
    answer:
      'Yes. InboxZap relaunched as Lumina. The product changed from an inbox-cleanup tool to an AI meeting assistant, but it is the same team and the same account system — there is nothing to migrate.',
  },
  {
    question: 'Which video platforms does Lumina support?',
    answer: 'Lumina joins calls on Zoom, Google Meet, and Microsoft Teams.',
  },
  {
    question: 'How does Lumina join my meetings?',
    answer:
      'Connect your calendar once and Lumina automatically joins every meeting you invite it to, with no manual setup per call.',
  },
  {
    question: 'Is there a free plan?',
    answer: 'Yes, Lumina is free for teams up to 5 people.',
  },
  {
    question: 'How accurate are the summaries?',
    answer:
      'Summaries are designed to be skimmed and corrected in under a minute. For details on how transcription, speaker attribution, and summarization each work, see the blog.',
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
        {faqs.map((faq) => (
          <div key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
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
