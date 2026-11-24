import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'InboxZap is now Lumina',
  description:
    'InboxZap has become Lumina. Here is what changed, why, and where to find the AI meeting assistant we built next.',
  alternates: { canonical: 'https://lumina.example/from-inboxzap' },
  openGraph: {
    title: 'InboxZap is now Lumina',
    description: 'InboxZap has become Lumina — an AI meeting assistant for teams.',
    url: 'https://lumina.example/from-inboxzap',
    images: ['/img/og-lumina.png'],
  },
};

export default function FromInboxZapPage() {
  return (
    <main>
      <h1>InboxZap is now Lumina</h1>
      <p>
        If you used InboxZap to bulk-delete old emails and reach inbox zero, you&apos;re in
        the right place — the company behind it is still here, just focused on a different
        problem.
      </p>
      <p>
        We built InboxZap to clean up inboxes. Working with customers, we kept hearing the
        same complaint about a different kind of clutter: meetings that generated no written
        record, decisions nobody wrote down, and action items that existed only in someone&apos;s
        memory. That problem turned out to be bigger than inbox clutter, so we rebuilt the
        product around it and renamed the company Lumina.
      </p>
      <p>
        <strong>InboxZap itself is no longer available.</strong> Lumina now records,
        transcribes, and summarizes your team&apos;s meetings automatically — decisions,
        action items, and a recap, without anyone taking notes.
      </p>
      <p>
        <a className="cta" href="/features">
          See what Lumina does
        </a>{' '}
        or{' '}
        <a href="/pricing">check pricing</a>.
      </p>
    </main>
  );
}
