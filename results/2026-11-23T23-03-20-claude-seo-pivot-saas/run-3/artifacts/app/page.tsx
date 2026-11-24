import { SITE_URL } from '../lib/site';

const faqs = [
  {
    question: 'What happened to InboxZap?',
    answer:
      "InboxZap relaunched as Lumina in 2026. We moved from inbox cleanup to meetings, where teams were losing far more time. If you were an InboxZap customer, nothing about your account or billing changed — it's the same company with a new focus.",
  },
  {
    question: 'Which meeting tools does Lumina support?',
    answer: 'Lumina joins and transcribes calls on Zoom, Google Meet, and Microsoft Teams.',
  },
  {
    question: 'Is there a free plan?',
    answer:
      'Yes. Free covers teams up to 5 people with unlimited meetings and 30-day transcript history. Pro adds unlimited history and integrations for $12 per seat per month.',
  },
  {
    question: 'How accurate are the transcripts?',
    answer:
      'Transcripts are speaker-labeled and searchable across more than 30 languages, ready within minutes of the call ending.',
  },
  {
    question: 'Where do action items end up?',
    answer:
      'Lumina routes action items to Slack and syncs recaps to Notion and Confluence, so follow-up happens where your team already works.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Lumina',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'AI meeting assistant that records, transcribes, and summarizes team meetings.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: SITE_URL,
};

export default function HomePage() {
  return (
    <main>
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
        <div className="steps">
          <div className="step">
            <h3>Record &amp; transcribe</h3>
            <p>Speaker-labeled transcripts in 30+ languages, searchable forever.</p>
          </div>
          <div className="step">
            <h3>Summarize &amp; assign</h3>
            <p>Decisions, blockers, and action items extracted and routed to their owners.</p>
          </div>
        </div>
        <p>
          Read more on the <a href="/features">features page</a>, or see{' '}
          <a href="/pricing">plans and pricing</a>.
        </p>
      </section>

      <section className="social-proof">
        <h2>Teams run better on Lumina</h2>
        <p>
          &ldquo;We stopped arguing about what was decided. Lumina remembers for
          us.&rdquo; — a happy operations lead
        </p>
        <p>Loved by product, sales, and customer success teams at fast-growing startups.</p>
      </section>

      <section className="faq" id="faq">
        <h2>Frequently asked questions</h2>
        <dl>
          {faqs.map((f) => (
            <div key={f.question}>
              <dt>{f.question}</dt>
              <dd>{f.answer}</dd>
            </div>
          ))}
        </dl>
        <p>
          More questions? Read the <a href="/blog">blog</a> or check{' '}
          <a href="/pricing">pricing</a>.
        </p>
      </section>
    </main>
  );
}
