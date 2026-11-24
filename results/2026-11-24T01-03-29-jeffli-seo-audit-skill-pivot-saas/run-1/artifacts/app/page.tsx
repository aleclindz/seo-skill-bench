const faqs = [
  {
    question: 'What is Lumina?',
    answer:
      'Lumina is an AI meeting assistant. It joins your Zoom, Meet, or Teams calls, records and transcribes them, and delivers a summary with decisions and action items automatically.',
  },
  {
    question: 'Is Lumina the same thing as InboxZap?',
    answer:
      'InboxZap was our earlier inbox-cleanup product. We retired it and rebuilt the company around Lumina, the AI meeting assistant. If you used InboxZap, that product is no longer active — Lumina solves a different problem: meeting notes, not email cleanup.',
  },
  {
    question: 'Which video platforms does Lumina support?',
    answer:
      'Lumina joins meetings on Zoom, Google Meet, and Microsoft Teams. Connect your calendar once and Lumina will join every meeting you invite it to.',
  },
  {
    question: 'How much does Lumina cost?',
    answer:
      'Lumina is free for teams of up to 5 people. Pro is $12 per seat per month and adds unlimited history, action-item routing, and integrations. See the pricing page for details.',
  },
  {
    question: 'Where do my action items go?',
    answer:
      'Lumina can push action items straight to Slack and sync recaps to Notion and Confluence, so follow-ups land where your team already works.',
  },
];

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
        {faqs.map((item) => (
          <div key={item.question} className="faq-item">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
