import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ — Lumina AI Meeting Assistant',
  description:
    "Answers to common questions about Lumina: pricing, security, supported platforms, transcript accuracy, and what happened to InboxZap.",
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ — Lumina AI Meeting Assistant',
    description: 'Common questions about Lumina, answered.',
    url: '/faq',
  },
};

const faqs = [
  {
    question: 'What happened to InboxZap?',
    answer:
      "InboxZap was our original product — a tool for bulk-deleting old emails and unsubscribing from newsletters. We retired it to build Lumina, an AI meeting assistant, because that's the problem our customers kept asking us to solve. Lumina runs on the same company and the same team, just a different product.",
  },
  {
    question: 'What platforms does Lumina support?',
    answer: 'Lumina joins meetings on Zoom, Google Meet, and Microsoft Teams automatically once you connect your calendar.',
  },
  {
    question: 'How accurate are Lumina transcripts?',
    answer:
      'Transcripts are speaker-labeled and support 30+ languages. Accuracy depends on audio quality, but most customers find transcripts clean enough to search and share without editing.',
  },
  {
    question: 'Is my meeting data secure?',
    answer:
      'Recordings and transcripts are encrypted in transit and at rest. Enterprise plans add SSO/SAML, custom data residency, and configurable retention.',
  },
  {
    question: 'Is there a free plan?',
    answer: 'Yes. Free covers teams up to 5 people with unlimited meetings, 30-day transcript history, and basic summaries.',
  },
  {
    question: 'Can Lumina send action items to Slack or Notion?',
    answer: 'Yes, on the Pro and Enterprise plans. Action items route to Slack and recaps sync to Notion and Confluence automatically.',
  },
];

const faqPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

export default function FaqPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
      />
      <h1>Frequently asked questions</h1>
      <div className="faq-list">
        {faqs.map((f) => (
          <section key={f.question}>
            <h2>{f.question}</h2>
            <p>{f.answer}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
