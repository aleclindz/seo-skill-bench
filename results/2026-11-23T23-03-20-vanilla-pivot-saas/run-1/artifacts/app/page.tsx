import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const faqs = [
  {
    question: 'What does Lumina actually do in a meeting?',
    answer:
      'Lumina joins your call, records and transcribes it with speaker labels, then generates a summary with decisions, open questions, and action items assigned to the right people.',
  },
  {
    question: 'Which video platforms does Lumina support?',
    answer:
      'Lumina joins Zoom, Google Meet, and Microsoft Teams calls automatically from your calendar invite.',
  },
  {
    question: 'Is Lumina free?',
    answer:
      'Yes. The Free plan covers teams up to 5 people with unlimited meetings and 30-day transcript history. See the Pricing page for Pro and Enterprise plans.',
  },
  {
    question: 'Where do meeting summaries end up?',
    answer:
      'Summaries and action items can be pushed to Slack and Notion automatically, in addition to living in Lumina.',
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

export default function HomePage() {
  return (
    <main>
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
          Meet, or Teams — and does the busywork humans shouldn&apos;t. See the full{' '}
          <a href="/features">feature list</a> for what happens before, during, and after
          every call.
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
          <div key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
