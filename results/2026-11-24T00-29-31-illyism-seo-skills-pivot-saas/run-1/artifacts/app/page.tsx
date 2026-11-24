import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lumina — The AI Meeting Assistant for Teams',
  description:
    "Lumina records, transcribes, and summarizes your team's meetings, then turns them into action items automatically. Free for teams up to 5.",
  alternates: { canonical: 'https://lumina.example/' },
  openGraph: {
    title: 'Lumina — The AI Meeting Assistant for Teams',
    description:
      'Records, transcribes, and summarizes your meetings. Action items, decisions, and recaps — automatically.',
    url: 'https://lumina.example/',
    images: ['/img/og-lumina.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumina — The AI Meeting Assistant for Teams',
    description: 'Records, transcribes, and summarizes your meetings automatically.',
  },
};

const faqs = [
  {
    question: 'What is Lumina?',
    answer:
      'Lumina is an AI meeting assistant that joins your Zoom, Google Meet, or Teams calls, records and transcribes them, and delivers a summary with decisions and action items.',
  },
  {
    question: 'Is Lumina free?',
    answer:
      'Yes. Free plans cover teams up to 5 people with unlimited meetings and 30-day transcript history. Paid plans start at $12 per seat per month.',
  },
  {
    question: 'Is Lumina the same company as InboxZap?',
    answer:
      'Yes. InboxZap rebranded to Lumina and moved from email cleanup to AI meeting notes. Existing InboxZap accounts carry over automatically.',
  },
  {
    question: 'Which video platforms does Lumina support?',
    answer: 'Lumina joins Zoom, Google Meet, and Microsoft Teams calls automatically.',
  },
];

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
          Meet, or Teams — and does the busywork humans shouldn&apos;t. See the full{' '}
          <a href="/features">feature list</a>.
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
        {faqs.map((item) => (
          <div key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Lumina',
            alternateName: 'InboxZap',
            url: 'https://lumina.example/',
            logo: 'https://lumina.example/img/og-lumina.png',
            sameAs: ['https://twitter.com/luminahq'],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Lumina',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            description:
              'AI meeting assistant that records, transcribes, and summarizes team meetings.',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          }),
        }}
      />
    </main>
  );
}
