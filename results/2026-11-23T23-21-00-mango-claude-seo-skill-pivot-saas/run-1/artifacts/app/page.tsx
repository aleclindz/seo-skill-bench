import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const faqs = [
  {
    question: 'What is Lumina?',
    answer:
      'Lumina is an AI meeting assistant that joins your Zoom, Google Meet, or Microsoft Teams calls, records and transcribes them, and turns the conversation into a summary with decisions and action items.',
  },
  {
    question: 'Which video calling tools does Lumina support?',
    answer:
      'Lumina connects to your calendar once and automatically joins meetings on Zoom, Google Meet, and Microsoft Teams — no manual setup per call.',
  },
  {
    question: 'Do I need to take notes during the meeting?',
    answer:
      'No. Lumina records, transcribes, and summarizes the meeting for you, so you can stay present in the conversation instead of typing notes.',
  },
  {
    question: 'What do I get after a meeting ends?',
    answer:
      'A summary with the decisions made, open questions, and action items — ready before you are back at your desk.',
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
          <div key={f.question}>
            <h3>{f.question}</h3>
            <p>{f.answer}</p>
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
