const faqs = [
  {
    question: 'What meeting platforms does Lumina support?',
    answer: 'Lumina joins and records meetings on Zoom, Google Meet, and Microsoft Teams.',
  },
  {
    question: 'How accurate are Lumina transcripts?',
    answer:
      'Lumina produces speaker-labeled transcripts in 30+ languages that stay searchable forever, so you can jump straight to the moment a decision was made.',
  },
  {
    question: 'Does Lumina assign action items automatically?',
    answer:
      'Yes. After each call, Lumina extracts decisions, blockers, and action items and routes them to the right owner, no manual note-taking required.',
  },
  {
    question: 'Is Lumina free?',
    answer: 'Lumina is free for teams up to 5 people. See the pricing page for paid plans.',
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
          Meet, or Teams — and does the busywork humans shouldn&apos;t. See the full{' '}
          <a href="/features">feature list</a>.
        </p>
      </section>

      <section className="social-proof">
        <h2>Teams run better on Lumina</h2>
        <p>
          &ldquo;We stopped arguing about what was decided. Lumina remembers for
          us.&rdquo; — a happy operations lead
        </p>
      </section>

      <section className="from-the-blog">
        <h2>From the blog</h2>
        <p>
          New to AI meeting notes? Start with{' '}
          <a href="/blog/what-is-an-ai-meeting-assistant">
            What Is an AI Meeting Assistant (and Do You Need One)?
          </a>{' '}
          or browse the full <a href="/blog">blog</a>.
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
    </main>
  );
}
