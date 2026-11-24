import Link from 'next/link';

const faqs = [
  {
    question: 'What happened to InboxZap?',
    answer:
      "InboxZap is now Lumina. We started by helping people clean up their inbox, but the biggest time sink customers kept describing wasn't email — it was meetings. Lumina is the product we built to fix that.",
  },
  {
    question: 'What calling tools does Lumina support?',
    answer:
      'Lumina joins Zoom, Google Meet, and Microsoft Teams calls automatically once you connect your calendar. No plugin or dial-in required.',
  },
  {
    question: 'How are summaries structured?',
    answer:
      'Every summary separates decisions, action items with owners and dates, and open questions, so your team can skim it instead of replaying the call.',
  },
  {
    question: 'Is there a free plan?',
    answer:
      'Yes. Lumina is free for teams of up to 5 people, with unlimited meetings and a 30-day transcript history. Paid plans add longer history and integrations.',
  },
  {
    question: 'Does Lumina work with Slack and Notion?',
    answer:
      'Yes — Pro and Enterprise plans can route action items straight into a Slack channel or a Notion database automatically after each meeting.',
  },
];

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

      <section className="rebrand-note">
        <h2>Formerly InboxZap</h2>
        <p>
          If you knew us as InboxZap, you&apos;re in the right place — we&apos;re the same
          company, rebuilt around a different problem. Read{' '}
          <Link href="/blog/inboxzap-is-now-lumina">why we made the switch</Link>.
        </p>
      </section>

      <section className="faq" id="faq">
        <h2>Frequently asked questions</h2>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
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
