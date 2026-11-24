const faqs = [
  {
    question: 'What is Lumina?',
    answer:
      'Lumina is an AI meeting assistant that joins your Zoom, Google Meet, or Microsoft Teams calls, records and transcribes them, and turns every meeting into a summary with decisions and action items.',
  },
  {
    question: 'Is Lumina free?',
    answer:
      'Yes. Lumina is free for teams of up to 5 people, with unlimited meetings and 30-day transcript history. Pro adds unlimited history and integrations for $12 per seat per month.',
  },
  {
    question: 'Which video call tools does Lumina work with?',
    answer:
      'Lumina joins Zoom, Google Meet, and Microsoft Teams calls automatically once you connect your calendar — no bots to invite manually.',
  },
  {
    question: 'What happened to InboxZap?',
    answer:
      'InboxZap relaunched as Lumina. We built our first product to help people clean up their inbox, but teams kept asking us to solve a bigger problem: nobody wants to take meeting notes. Lumina is that product — same team, new focus.',
  },
  {
    question: 'Is my meeting data secure?',
    answer:
      'Recordings and transcripts are encrypted in transit and at rest, and only visible to people you invite to your Lumina workspace. Enterprise plans add SSO/SAML and custom data retention.',
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

const softwareApplicationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Lumina',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'AI meeting assistant that records, transcribes, and summarizes team meetings.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
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
        {faqs.map((faq) => (
          <div className="faq-item" key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
