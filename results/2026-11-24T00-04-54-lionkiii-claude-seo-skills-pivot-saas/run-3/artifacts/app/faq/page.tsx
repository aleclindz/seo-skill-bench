import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ — Lumina AI Meeting Assistant',
  description:
    'Answers to common questions about Lumina: supported platforms, data privacy, languages, pricing, and how teams get started.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'FAQ — Lumina AI Meeting Assistant',
    description: 'Answers to common questions about Lumina.',
    url: 'https://lumina.example/faq',
    images: ['/img/og-lumina.png'],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const faqs = [
  {
    question: 'What is Lumina?',
    answer:
      'Lumina is an AI meeting assistant that joins your video calls, records and transcribes them, and turns the conversation into a structured summary with decisions and action items.',
  },
  {
    question: 'Which video platforms does Lumina support?',
    answer:
      'Lumina joins meetings on Zoom, Google Meet, and Microsoft Teams automatically once you connect your calendar — no manual invites needed.',
  },
  {
    question: 'Does Lumina store my recordings and transcripts securely?',
    answer:
      'Yes. Recordings and transcripts are encrypted and only visible to your workspace. Enterprise plans add SSO/SAML and custom data retention controls.',
  },
  {
    question: 'What languages does Lumina transcribe?',
    answer:
      'Lumina produces speaker-labeled transcripts in more than 30 languages, searchable across your whole workspace.',
  },
  {
    question: 'Can I use Lumina on my own, or only with a team?',
    answer:
      'Lumina works for solo users and teams alike. The Free plan covers up to 5 teammates; Pro and Enterprise scale to larger organizations.',
  },
  {
    question: 'How much does Lumina cost?',
    answer:
      'Lumina is free for teams up to 5 people. Pro is $12 per seat per month and adds unlimited history and integrations. Enterprise pricing is custom. See the pricing page for details.',
  },
];

export default function FaqPage() {
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

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <h1>Frequently asked questions</h1>
      {faqs.map((faq) => (
        <section key={faq.question}>
          <h2>{faq.question}</h2>
          <p>{faq.answer}</p>
        </section>
      ))}
    </main>
  );
}
