import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing — InboxZap',
  description:
    'InboxZap pricing: free for one personal inbox, Pro at $4/month per inbox for automatic rules, and custom Teams plans with admin controls.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing — InboxZap',
    description:
      'Free for one personal inbox. Pro at $4/month per inbox. Custom Teams plans.',
    url: '/pricing',
    type: 'website',
  },
};

export default function PricingPage() {
  return (
    <main>
      <h1>Simple pricing for every inbox</h1>
      <section className="plans">
        <div className="plan">
          <h2>Free</h2>
          <p>$0 &middot; 1 personal inbox</p>
          <p>Bulk delete, one-click unsubscribe, and manual storage cleanup for Gmail or Outlook.</p>
        </div>
        <div className="plan">
          <h2>Pro</h2>
          <p>$4 per inbox / month</p>
          <p>
            Everything in Free, plus automatic rules, storage alerts, unlimited cleanup
            history, and priority support.
          </p>
        </div>
        <div className="plan">
          <h2>Teams</h2>
          <p>Custom</p>
          <p>Multiple inboxes and seats, shared cleanup policies, an admin dashboard, and SSO.</p>
        </div>
      </section>
      <p>
        Every plan includes a 30-day undo window — nothing is ever permanently deleted
        without landing in Trash first. See what&apos;s included on the{' '}
        <Link href="/features">features page</Link>.
      </p>
    </main>
  );
}
