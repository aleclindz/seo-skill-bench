const faqs = [
  {
    question: 'What happened to InboxZap?',
    answer:
      "InboxZap is now Lumina. We rebuilt the product from the ground up as an AI meeting assistant — recording, transcribing, and summarizing your team's calls instead of cleaning up email. Your InboxZap login no longer applies; sign up for Lumina for free to get started.",
  },
  {
    question: 'Which meeting apps does Lumina work with?',
    answer: 'Lumina joins and transcribes calls on Zoom, Google Meet, and Microsoft Teams.',
  },
  {
    question: 'Is Lumina free?',
    answer:
      'Yes — Lumina is free for teams up to 5 people, with unlimited meetings and 30-day transcript history. Paid plans add longer history and integrations.',
  },
  {
    question: 'Where do meeting summaries and action items go?',
    answer:
      'Every meeting gets a structured recap with decisions, blockers, and action items. On Pro and Enterprise plans, you can also push them straight to Slack or Notion so they land where your team already works.',
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
          <div key={faq.question} className="faq-item">
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
