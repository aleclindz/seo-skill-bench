import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'InboxZap is free for personal inboxes. See what is included free and what Pro adds for teams and multiple accounts.',
  alternates: { canonical: '/pricing' },
};

const plans = [
  {
    name: 'Personal',
    price: '$0',
    body: 'Bulk delete, mass unsubscribe, and filters for one personal inbox. Free, no time limit.',
  },
  {
    name: 'Pro',
    price: '$6/mo',
    body: 'Everything in Personal, plus multiple accounts and scheduled cleanups that run automatically.',
  },
];

export default function PricingPage() {
  return (
    <main>
      <h1>InboxZap pricing</h1>
      <p>Free for personal inboxes. Upgrade to Pro for multiple accounts and automatic scheduled cleanups.</p>
      <div className="plan-list">
        {plans.map((p) => (
          <section key={p.name}>
            <h2>{p.name} — {p.price}</h2>
            <p>{p.body}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
