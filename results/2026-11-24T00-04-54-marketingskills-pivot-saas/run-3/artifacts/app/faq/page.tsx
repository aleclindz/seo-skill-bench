import type { Metadata } from 'next';
import { SITE_URL } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    "Answers to common questions about Lumina: which meeting platforms it supports, how transcription and summaries work, pricing, security, and data retention.",
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    title: 'FAQ — Lumina AI Meeting Assistant',
    description: 'Common questions about Lumina, answered.',
    url: `${SITE_URL}/faq`,
    images: ['/img/og-lumina.png'],
  },
};

const faqs = [
  {
    question: 'Which meeting platforms does Lumina support?',
    answer: 'Lumina joins Zoom, Google Meet, and Microsoft Teams calls automatically once you connect your calendar. No plugin or browser extension is required.',
  },
  {
    question: 'How accurate is the transcription?',
    answer: 'Lumina labels speakers automatically and supports custom vocabulary for product names, acronyms, and customer names, so transcripts hold up on real meetings with cross-talk, not just clean single-speaker audio.',
  },
  {
    question: 'Does Lumina record video, or just audio?',
    answer: 'Lumina captures audio and generates a full transcript plus an AI summary for every meeting. Screen content shared during the call is referenced in the summary when it affects a decision.',
  },
  {
    question: 'What happens to the action items Lumina finds?',
    answer: 'Action items are extracted from the transcript and routed to Slack or your task tracker with an owner attached, so they don’t get buried in a recap document.',
  },
  {
    question: 'Is there a free plan?',
    answer: 'Yes. The Free plan supports teams up to 5 people with unlimited meetings, 30-day transcript history, and basic summaries. See the full breakdown on the pricing page.',
  },
  {
    question: 'How long are transcripts and recordings retained?',
    answer: 'Free and Pro plans retain history as described on the pricing page. Enterprise plans support custom retention windows and data residency requirements.',
  },
  {
    question: 'Is my meeting data secure?',
    answer: 'Meeting data is encrypted in transit and at rest. Enterprise plans add SSO/SAML and data residency controls for teams with stricter compliance requirements.',
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

export default function FaqPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <h1>Frequently asked questions</h1>
      {faqs.map((f) => (
        <section key={f.question}>
          <h2>{f.question}</h2>
          <p>{f.answer}</p>
        </section>
      ))}
      <p>
        Still have questions? See the <a href="/features">features</a> and{' '}
        <a href="/pricing">pricing</a> pages, or read how teams use Lumina on the{' '}
        <a href="/blog">blog</a>.
      </p>
    </main>
  );
}
