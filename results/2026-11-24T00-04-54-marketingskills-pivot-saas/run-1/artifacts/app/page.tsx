const faqs = [
  {
    question: 'Does Lumina work with Zoom, Google Meet, and Microsoft Teams?',
    answer:
      'Yes. Connect your calendar once and Lumina joins every meeting you invite it to on Zoom, Meet, or Teams, no separate setup per platform.',
  },
  {
    question: 'Is my meeting data secure?',
    answer:
      'Recordings and transcripts are encrypted in transit and at rest, and only people invited to the meeting can access its recap.',
  },
  {
    question: 'What happens right after a call ends?',
    answer:
      "Lumina finishes transcribing within a few minutes and sends a recap with decisions and action items, so you don't have to write up notes yourself.",
  },
  {
    question: 'Is Lumina free?',
    answer:
      'Lumina is free for teams of up to 5 people. Pro plans add unlimited history and integrations with Slack and Notion.',
  },
  {
    question: 'Is Lumina the same company as InboxZap?',
    answer:
      "Yes — InboxZap became Lumina. We moved from cleaning up inboxes to cleaning up meetings. See our InboxZap page for details.",
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

      <section className="faq" id="faq">
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
