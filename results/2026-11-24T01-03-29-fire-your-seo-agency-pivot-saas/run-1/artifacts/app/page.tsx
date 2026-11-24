import { SITE_URL } from '../lib/site';

const faqs = [
  {
    question: 'What does Lumina do?',
    answer:
      "Lumina joins your Zoom, Google Meet, or Microsoft Teams calls, records and transcribes them, and delivers a summary with decisions and action items before you're back at your desk.",
  },
  {
    question: 'How much does Lumina cost?',
    answer:
      'Lumina is free for teams up to 5 people, with unlimited meetings and 30-day transcript history. The Pro plan is $12 per seat per month and adds unlimited history and integrations. Enterprise pricing is custom.',
  },
  {
    question: 'Which languages does Lumina support?',
    answer: 'Lumina produces speaker-labeled transcripts in more than 30 languages.',
  },
  {
    question: 'Does Lumina integrate with Slack and Notion?',
    answer:
      'Yes. Lumina pushes action items to Slack and syncs meeting recaps to Notion and Confluence automatically.',
  },
  {
    question: 'Is Lumina the same company as InboxZap?',
    answer:
      'Yes. Lumina is built by the same team that built InboxZap, which is no longer under active development.',
  },
];

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Lumina',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/img/og-lumina.png`,
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
          <div className="faq-item" key={f.question}>
            <h3>{f.question}</h3>
            <p>
              {f.answer}
              {f.question === 'Is Lumina the same company as InboxZap?' && (
                <>
                  {' '}
                  Read more in{' '}
                  <a href="/blog/inboxzap-is-now-lumina">InboxZap is Now Lumina</a>.
                </>
              )}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
