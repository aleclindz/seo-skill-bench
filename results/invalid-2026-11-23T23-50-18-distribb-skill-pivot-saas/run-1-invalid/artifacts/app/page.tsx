import Link from 'next/link';
import { posts } from './blog/posts';

export default function HomePage() {
  const latest = [...posts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

  return (
    <main>
      <section className="hero">
        <h1>Reach inbox zero in minutes, not weekends</h1>
        <p>
          InboxZap scans your Gmail or Outlook inbox, finds the old mail, newsletters, and
          storage-hogging attachments, and lets you bulk delete and mass-unsubscribe in a
          few clicks. Free for personal inboxes.
        </p>
        <Link className="cta" href="/pricing">
          Start free
        </Link>
      </section>

      <section className="how-it-works">
        <h2>How InboxZap works</h2>
        <p>
          Connect your inbox once. InboxZap scans every message, groups the backlog by
          sender, age, and size, and gets you to inbox zero without you clicking through
          thousands of emails by hand.
        </p>
        <div className="steps">
          <div className="step">
            <h3>Bulk delete old email</h3>
            <p>
              Clear years of backlog in one pass &mdash; by age, by sender, or by size &mdash;
              with your important mail protected automatically. See{' '}
              <Link href="/blog/post-3">how bulk delete works</Link>.
            </p>
          </div>
          <div className="step">
            <h3>Mass-unsubscribe from newsletters</h3>
            <p>
              Find every list you&apos;ve ever subscribed to and leave the noisy ones in one
              pass instead of sender by sender.
            </p>
          </div>
          <div className="step">
            <h3>Free up storage</h3>
            <p>
              Rank senders and attachments by size so you can clear a &ldquo;storage
              full&rdquo; warning in minutes.
            </p>
          </div>
        </div>
      </section>

      <section className="social-proof">
        <h2>Calmer inboxes, every day</h2>
        <p>
          &ldquo;I went from 40,000 unread to zero in an afternoon. I didn&apos;t think that
          was possible without losing something important.&rdquo; &mdash; a relieved
          InboxZap user
        </p>
        <p>
          Works with Gmail and Outlook. See the full{' '}
          <Link href="/features">feature list</Link> or check{' '}
          <Link href="/pricing">pricing</Link>.
        </p>
      </section>

      <section className="from-the-blog">
        <h2>From the blog</h2>
        <ul>
          {latest.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
        <p>
          <Link href="/blog">Read all guides</Link>
        </p>
      </section>

      <section className="faq-teaser">
        <h2>Questions?</h2>
        <p>
          Is InboxZap free? Does it work with Outlook? Can deletes be undone? Find the
          answers on the <Link href="/faq">FAQ page</Link>.
        </p>
      </section>
    </main>
  );
}
