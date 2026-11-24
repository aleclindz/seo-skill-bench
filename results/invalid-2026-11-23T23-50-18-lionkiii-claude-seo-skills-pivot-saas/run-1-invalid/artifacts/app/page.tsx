const faqs = [
  {
    question: 'Is Lumina the same as InboxZap?',
    answer:
      "Yes. InboxZap is now Lumina. We rebuilt the product around meetings instead of email, and moved everyone over automatically — no new signup needed if you already had an InboxZap account.",
  },
  {
    question: 'What does Lumina actually do?',
    answer:
      'Lumina joins your Zoom, Google Meet, or Microsoft Teams calls, records and transcribes them with speaker labels, and turns each meeting into a summary with decisions, blockers, and action items.',
  },
  {
    question: 'How much does Lumina cost?',
    answer:
      'Free for teams up to 5, with unlimited meetings and 30-day transcript history. Pro is $12 per seat per month with unlimited history and integrations. Enterprise plans are custom.',
  },
  {
    question: 'Which tools does Lumina integrate with?',
    answer:
      'Action items push to Slack, recaps sync to Notion and Confluence, and transcripts can attach to your CRM.',
  },
];

export default function HomePage() {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lumina',
    url: 'https://lumina.example/',
    logo: 'https://lumina.example/img/og-lumina.png',
    sameAs: ['https://twitter.com/luminahq'],
  };

  const softwareJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Lumina',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'AI meeting assistant that records, transcribes, and summarizes team meetings.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
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
