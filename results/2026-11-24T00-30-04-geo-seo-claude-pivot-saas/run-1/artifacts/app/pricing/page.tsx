import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing — InboxZap',
  description:
    'InboxZap pricing: free for personal inboxes, Pro at $6/month for unlimited bulk cleanups, and Team plans for shared mailboxes.',
  alternates: { canonical: 'https://lumina.example/pricing' },
  openGraph: {
    title: 'Pricing — InboxZap',
    description:
      'Free for personal inboxes. Pro at $6/month. Team plans for shared mailboxes.',
    url: 'https://lumina.example/pricing',
    images: ['/img/og-inboxzap.png'],
  },
};

export default function PricingPage() {
  return (
    <main>
      <h1>Simple pricing for every inbox</h1>
      <section className="plans">
        <div className="plan">
          <h2>Free</h2>
          <p>$0 &middot; personal inboxes</p>
          <p>One bulk cleanup per month, mass unsubscribe, and basic sorting rules.</p>
        </div>
        <div className="plan">
          <h2>Pro</h2>
          <p>$6 per month</p>
          <p>Unlimited bulk cleanups, automatic sorting rules, and priority support.</p>
        </div>
        <div className="plan">
          <h2>Team</h2>
          <p>Custom</p>
          <p>Shared mailbox cleanup, admin controls, and a dedicated success manager.</p>
        </div>
      </section>
      <p>Every plan keeps deleted mail recoverable in Trash for 30 days. No surprise fees.</p>
    </main>
  );
}
