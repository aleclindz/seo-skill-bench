import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers to common questions about how Lumina joins calls, transcribes them, and handles your meeting data.',
  alternates: { canonical: '/faq' },
};

const faqs = [
  {
    q: 'Which video platforms does Lumina support?',
    a: 'Lumina joins meetings on Zoom, Google Meet, and Microsoft Teams. Connect your calendar once and it joins automatically based on your invites.',
  },
  {
    q: 'Do I need to invite a bot to every call manually?',
    a: 'No. Once your calendar is connected, Lumina joins every meeting on it automatically — you don’t add it call by call.',
  },
  {
    q: 'How does Lumina tell decisions apart from action items?',
    a: 'Lumina extracts decisions as standalone statements and action items as a checklist with an owner and due date, pulled directly from what was said on the call.',
  },
  {
    q: 'How long after the meeting do I get the recap?',
    a: 'The recap is generated and sent immediately after the call ends.',
  },
  {
    q: 'Is there a free plan?',
    a: 'Yes. The Free plan supports teams up to 5 people with unlimited transcription and a 30-day meeting history. See the pricing page for details on paid plans.',
  },
  {
    q: 'What happens to our meeting recordings and transcripts?',
    a: 'Transcripts and recaps are stored under your account and retained according to your plan’s history window. Enterprise plans support a custom retention policy.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
};

export default function FaqPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>Frequently asked questions</h1>
      <div className="faq-list">
        {faqs.map((f) => (
          <section key={f.q}>
            <h2>{f.q}</h2>
            <p>{f.a}</p>
          </section>
        ))}
      </div>
      <p>
        Still have questions? See <a href="/features">features</a> or{' '}
        <a href="/pricing">pricing</a>.
      </p>
    </main>
  );
}
