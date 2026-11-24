const faqs = [
  {
    question: 'Is Lumina free?',
    answer:
      'Yes — free for teams up to 5 people, with unlimited meetings and 30-day transcript history. Pro is $12 per seat per month and adds unlimited history, action-item routing, and Slack and Notion integrations.',
  },
  {
    question: 'Which video platforms does Lumina support?',
    answer: 'Lumina joins and transcribes calls on Zoom, Google Meet, and Microsoft Teams.',
  },
  {
    question: 'What happened to InboxZap?',
    answer:
      "InboxZap, our earlier inbox-cleanup product, is no longer actively developed. We're the same team, now focused on Lumina.",
  },
  {
    question: 'Does Lumina support multiple languages?',
    answer: 'Yes — speaker-labeled transcripts are available in 30+ languages.',
  },
  {
    question: 'Where do action items go after a meeting?',
    answer:
      'Lumina extracts action items and their owners automatically and can route them to Slack or Notion on the Pro plan.',
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

      <section className="from-the-blog">
        <h2>From the blog</h2>
        <p>
          <a href="/blog/inboxzap-is-now-lumina">InboxZap is now Lumina</a> — what changed
          and why.
        </p>
        <p>
          <a href="/blog/meeting-minutes-that-people-actually-read">
            How to write meeting minutes that people actually read
          </a>
        </p>
      </section>

      <section id="faq" className="faq">
        <h2>Frequently asked questions</h2>
        {faqs.map((faq) => (
          <div className="faq-item" key={faq.question}>
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
