const faqs = [
  {
    question: 'Does Lumina join Zoom, Google Meet, and Microsoft Teams calls automatically?',
    answer:
      'Yes. Connect your calendar once and Lumina joins every meeting on it as a silent participant — no manual invite or plugin per call.',
  },
  {
    question: 'How accurate is the meeting transcription?',
    answer:
      'Lumina transcribes speech to text in real time and attributes each line to the right speaker, including crosstalk and multiple accents.',
  },
  {
    question: 'What do I actually get after a meeting ends?',
    answer:
      'A summary with the key decisions, a list of action items with owners, and the full searchable transcript — usually ready within a minute of the call ending.',
  },
  {
    question: 'Is Lumina free?',
    answer:
      'Yes, for teams up to 5 people. Larger teams and advanced features like CRM sync are available on paid plans — see Pricing for details.',
  },
  {
    question: 'Can I search across past meetings?',
    answer:
      'Yes. Every transcript and summary is indexed, so you can search by keyword, decision, or action item across your whole meeting history.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
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
        {faqs.map((f) => (
          <div key={f.question} className="faq-item">
            <h3>{f.question}</h3>
            <p>{f.answer}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
