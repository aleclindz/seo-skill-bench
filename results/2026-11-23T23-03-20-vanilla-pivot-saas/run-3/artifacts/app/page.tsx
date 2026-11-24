import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lumina — The AI Meeting Assistant for Teams',
  description:
    "Lumina records, transcribes, and summarizes your team's meetings, then turns them into action items automatically. Free for teams up to 5.",
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Lumina — The AI Meeting Assistant for Teams',
    description:
      'Records, transcribes, and summarizes your meetings. Action items, decisions, and recaps — automatically.',
    url: '/',
  },
};

const faqs = [
  {
    q: 'What happened to InboxZap?',
    a: "InboxZap is now Lumina. We rebuilt the product around meetings instead of email — same company, new focus. If you had an InboxZap account, reach out to support and we'll help you find the Lumina plan that fits.",
  },
  {
    q: 'Which video platforms does Lumina support?',
    a: 'Zoom, Google Meet, and Microsoft Teams. Lumina joins as a bot participant, so there is nothing to install for the rest of your team.',
  },
  {
    q: 'Does Lumina record audio, or just transcribe?',
    a: 'Both. Every meeting gets a recording and a speaker-labeled transcript, so you can verify any line of the AI summary against what was actually said.',
  },
  {
    q: 'What languages does Lumina transcribe?',
    a: 'More than 30 languages, with automatic detection — no need to set a language per meeting.',
  },
  {
    q: 'Is there a free plan?',
    a: 'Yes. Free covers teams up to 5 people with unlimited meetings and 30-day transcript history. See /pricing for Pro and Enterprise.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Lumina',
  url: 'https://lumina.example/',
  logo: 'https://lumina.example/img/og-lumina.png',
  sameAs: ['https://twitter.com/luminahq'],
};

const appJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Lumina',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'AI meeting assistant that records, transcribes, and summarizes team meetings.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function HomePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

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

      <section className="faq" id="faq">
        <h2>Frequently asked questions</h2>
        {faqs.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
