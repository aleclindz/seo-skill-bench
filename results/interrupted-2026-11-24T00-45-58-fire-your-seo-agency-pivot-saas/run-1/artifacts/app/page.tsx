const faqs = [
  {
    question: 'What is Lumina?',
    answer:
      'Lumina is an AI meeting assistant for teams. It joins your calls, records and transcribes them, and delivers a summary with decisions and action items.',
  },
  {
    question: 'Which video platforms does Lumina support?',
    answer: 'Lumina joins Zoom, Google Meet, and Microsoft Teams calls automatically.',
  },
  {
    question: 'How much does Lumina cost?',
    answer:
      "Lumina is free for teams up to 5 people. The Pro plan is $12 per seat per month, and Enterprise plans are custom. Every plan includes unlimited recording and transcription.",
  },
  {
    question: 'What languages does Lumina transcribe?',
    answer: 'Lumina produces speaker-labeled transcripts in more than 30 languages.',
  },
  {
    question: 'Where do meeting summaries and action items go?',
    answer:
      'Lumina pushes action items to Slack, syncs recaps to Notion and Confluence, and can attach transcripts to your CRM.',
  },
];

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Lumina',
  url: 'https://lumina.example/',
  logo: 'https://lumina.example/img/og-lumina.png',
  sameAs: ['https://twitter.com/luminahq'],
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
          <div key={faq.question} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
