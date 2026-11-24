const faqs = [
  {
    question: 'What does Lumina do in a meeting?',
    answer:
      'Lumina joins your Zoom, Google Meet, or Microsoft Teams call, records and transcribes it with speaker labels, then produces a structured recap with decisions, open questions, and action items.',
  },
  {
    question: 'Is Lumina free?',
    answer:
      'Yes — the Free plan covers teams up to 5 people with unlimited meetings, 30-day transcript history, and basic summaries. No credit card required.',
  },
  {
    question: 'What does Lumina integrate with?',
    answer:
      'Lumina pushes action items to Slack, syncs recaps to Notion and Confluence, and can attach transcripts to your CRM.',
  },
  {
    question: 'How much does Lumina cost?',
    answer:
      'Pro is $12 per seat per month with unlimited history and priority support. Enterprise plans are custom and add SSO/SAML and data residency.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Lumina',
      url: 'https://lumina.example/',
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Lumina',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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

      <section className="faq" id="faq">
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
