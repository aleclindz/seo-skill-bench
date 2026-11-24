import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ — Lumina AI Meeting Assistant',
  description:
    "Answers to common questions about Lumina, the AI meeting assistant: pricing, integrations, transcription accuracy, and what happened to InboxZap.",
  alternates: { canonical: 'https://lumina.example/faq' },
  openGraph: {
    title: 'FAQ — Lumina AI Meeting Assistant',
    description: 'Common questions about Lumina, pricing, integrations, and transcription.',
    url: 'https://lumina.example/faq',
    images: ['/img/og-lumina.png'],
    type: 'website',
  },
};

const FAQS = [
  {
    q: 'What happened to InboxZap?',
    a: 'InboxZap was our earlier product, an email cleanup tool. We shut it down and rebuilt the company around Lumina, an AI meeting assistant, because that is where teams told us they needed the most help. InboxZap accounts are no longer active.',
  },
  {
    q: 'Which video platforms does Lumina support?',
    a: 'Lumina joins meetings on Zoom, Google Meet, and Microsoft Teams. Connect your calendar once and Lumina joins every meeting you invite it to.',
  },
  {
    q: 'How accurate is the transcription?',
    a: 'Lumina produces speaker-labeled transcripts in more than 30 languages. Accuracy is highest with clear audio and typically matches or exceeds native platform captions.',
  },
  {
    q: 'Does Lumina work with Slack and Notion?',
    a: 'Yes. Pro and Enterprise plans can push action items to Slack and sync meeting recaps to Notion and Confluence automatically.',
  },
  {
    q: 'Is there a free plan?',
    a: 'Yes, Lumina is free for teams up to 5 people, with unlimited meetings and 30-day transcript history. See the full breakdown on the pricing page.',
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <h1>Frequently asked questions</h1>
      {FAQS.map((f) => (
        <section key={f.q}>
          <h2>{f.q}</h2>
          <p>{f.a}</p>
        </section>
      ))}
      <p>
        Still have questions? Check out <a href="/features">features</a> or{' '}
        <a href="/pricing">pricing</a>.
      </p>
    </main>
  );
}
