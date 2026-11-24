import type { Metadata } from 'next';
import Link from 'next/link';

const BASE = 'https://lumina.example';

export const metadata: Metadata = {
  title: 'Lumina — AI Meeting Notes That Write Themselves',
  description:
    'Lumina joins your Zoom, Google Meet, or Microsoft Teams calls, transcribes them, and delivers a summary with decisions and action items before you are back at your desk.',
  alternates: { canonical: `${BASE}/` },
};

const faqs = [
  {
    q: 'What happened to InboxZap?',
    a: 'InboxZap is now Lumina. We rebuilt the product around meetings instead of email, since that is where teams told us they were losing the most time. Our old inbox and email guides are still live on the blog if that is what you came here for.',
  },
  {
    q: 'Does Lumina work with Zoom, Google Meet, and Microsoft Teams?',
    a: 'Yes. Connect your calendar once and Lumina joins every meeting you invite it to across all three.',
  },
  {
    q: 'How much does Lumina cost?',
    a: 'Lumina is free for teams up to 5 people. Paid plans start at $15 per seat per month and include unlimited transcript history and integrations. See the pricing page for details.',
  },
  {
    q: 'Is my meeting data private?',
    a: 'Transcripts and recordings are only visible to your team. See the features page for more on how Lumina handles your data.',
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
          <Link href="/features">features list</Link> or check <Link href="/pricing">pricing</Link>.
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
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
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
