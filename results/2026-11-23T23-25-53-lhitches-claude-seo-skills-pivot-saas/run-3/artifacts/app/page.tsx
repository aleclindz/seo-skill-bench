import Link from 'next/link';
import { posts } from './blog/posts';

const faqs = [
  {
    question: 'Does Lumina work with Zoom, Google Meet, and Microsoft Teams?',
    answer:
      'Yes. Lumina joins any meeting on your calendar across Zoom, Google Meet, and Microsoft Teams, and transcribes it automatically — no plugin or manual recording required.',
  },
  {
    question: 'Is Lumina free?',
    answer:
      'Lumina is free for teams of up to 5, with unlimited meetings and 30-day transcript history. Paid plans add unlimited history, action-item routing, and integrations.',
  },
  {
    question: 'How does Lumina handle action items?',
    answer:
      "Every meeting produces a structured recap with decisions, open questions, and action items — each with an owner — so nothing gets lost in a wall of transcript text.",
  },
  {
    question: 'Where do meeting recaps end up?',
    answer:
      'Recaps can be pushed to Slack, synced to Notion and Confluence, and attached to records in your CRM, so they live where your team already works.',
  },
];

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
          {posts.slice(0, 3).map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
        <Link href="/blog">Read more on the blog &rarr;</Link>
      </section>

      <section className="faq" id="faq">
        <h2>Frequently asked questions</h2>
        {faqs.map((faq) => (
          <div className="faq-item" key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
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
