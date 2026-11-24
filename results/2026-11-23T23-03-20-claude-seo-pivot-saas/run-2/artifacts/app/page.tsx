import Link from 'next/link';

const softwareApplicationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Lumina',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'AI meeting assistant that records, transcribes, and summarizes team meetings.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqs = [
  {
    question: 'What does Lumina do?',
    answer:
      'Lumina joins your Zoom, Google Meet, or Microsoft Teams calls, records and transcribes them, and delivers an automatic summary with decisions and action items.',
  },
  {
    question: 'Is Lumina free?',
    answer:
      'Yes. The Free plan supports teams up to 5 people with unlimited meetings, 30-day transcript history, and basic summaries. Pro adds unlimited history and integrations for $12 per seat per month.',
  },
  {
    question: 'Is Lumina the same company as InboxZap?',
    answer:
      'Yes. Lumina Labs previously built InboxZap, an email cleanup tool. We retired that product to focus entirely on Lumina, our AI meeting assistant. If you were an InboxZap customer, that product is no longer being developed.',
  },
  {
    question: 'Which meeting platforms does Lumina support?',
    answer: 'Zoom, Google Meet, and Microsoft Teams, with recaps that can route to Slack and Notion.',
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
      </section>

      <section className="social-proof">
        <h2>Teams run better on Lumina</h2>
        <p>
          &ldquo;We stopped arguing about what was decided. Lumina remembers for
          us.&rdquo; — a happy operations lead
        </p>
        <p>Loved by product, sales, and customer success teams at fast-growing startups.</p>
      </section>

      <section id="faq">
        <h2>Frequently asked questions</h2>
        <dl>
          {faqs.map((f) => (
            <div key={f.question}>
              <dt>{f.question}</dt>
              <dd>{f.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="from-the-blog">
        <h2>From the blog</h2>
        <p>
          <Link href="/blog">Read more on running better meetings →</Link>
        </p>
      </section>

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
