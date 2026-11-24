import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lumina — The AI Meeting Assistant for Teams',
  description:
    "Lumina records, transcribes, and summarizes your team's meetings, then turns them into action items automatically. Free for teams up to 5.",
  alternates: { canonical: 'https://lumina.example/' },
};

const faqs = [
  {
    question: 'Is Lumina the same company as InboxZap?',
    answer:
      'Yes. Lumina was previously known as InboxZap, an email cleanup tool. We rebuilt the product from scratch as an AI meeting assistant — same team, new focus. Read more in our blog post on the rebrand.',
  },
  {
    question: 'Which video calling tools does Lumina support?',
    answer: 'Lumina joins and transcribes meetings on Zoom, Google Meet, and Microsoft Teams.',
  },
  {
    question: 'Is Lumina free?',
    answer:
      'Yes, Lumina is free for teams up to 5 people, with unlimited transcription included. Paid plans add more seats and integrations.',
  },
  {
    question: 'What happens to my meeting data?',
    answer:
      'Transcripts and summaries are stored securely and only visible to your team. See our pricing page for plan-specific retention details.',
  },
];

const softwareApplicationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Lumina',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'AI meeting assistant that records, transcribes, and summarizes team meetings.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

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

      <section className="from-the-blog">
        <h2>From the blog</h2>
        <ul>
          <li>
            <Link href="/blog/how-to-write-meeting-minutes">
              How to Write Meeting Minutes That People Actually Read
            </Link>
          </li>
          <li>
            <Link href="/blog/running-meetings-with-clear-action-items">
              Running Meetings That Produce Action Items, Not Just Notes
            </Link>
          </li>
          <li>
            <Link href="/blog/async-standups-for-remote-teams">
              Async Standups: A Practical Guide for Distributed Teams
            </Link>
          </li>
        </ul>
      </section>

      <section id="faq" className="faq">
        <h2>Frequently asked questions</h2>
        {faqs.map((faq) => (
          <div key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
