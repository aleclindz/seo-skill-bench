import type { Metadata } from 'next';
import { SITE } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Lumina FAQ — Pricing, Privacy, and Setup Questions',
  description:
    'Answers to the questions teams ask before trying Lumina: pricing, recording consent, supported call tools, and what happened to InboxZap.',
  alternates: { canonical: `${SITE.url}/faq` },
};

const faqs = [
  {
    q: 'Is Lumina really free?',
    a: 'Yes, for teams up to 5 people. Larger teams need a paid plan — see /pricing for current tiers.',
  },
  {
    q: 'Which call tools does Lumina support?',
    a: 'Zoom, Google Meet, and Microsoft Teams. Lumina joins as a calendar-invited participant, the same way a human guest would.',
  },
  {
    q: 'Do all participants have to consent to being recorded?',
    a: 'Yes. Lumina shows a visible recording indicator in the call, and any participant can decline before the call starts.',
  },
  {
    q: 'What happened to InboxZap?',
    a: 'InboxZap relaunched in 2026 as Lumina — same company, new product. InboxZap is no longer developed or billed.',
  },
  {
    q: 'How long does Lumina keep transcripts?',
    a: 'Transcripts and summaries are kept for the lifetime of your account and are searchable from the dashboard.',
  },
  {
    q: 'Can I export meeting summaries to my task tracker?',
    a: 'Action items can be routed to the owner directly; see /features for the current list of integrations.',
  },
];

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <h1>Frequently asked questions</h1>
      <div className="faq-list">
        {faqs.map((f) => (
          <div key={f.q}>
            <h2>{f.q}</h2>
            <p>{f.a}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
