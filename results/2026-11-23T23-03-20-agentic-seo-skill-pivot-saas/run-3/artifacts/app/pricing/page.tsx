import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing — InboxZap',
  description:
    'InboxZap is free for personal inboxes. See plans for unlimited history and team accounts.',
  alternates: { canonical: 'https://lumina.example/pricing' },
};

export default function PricingPage() {
  return (
    <main>
      <h1>Pricing</h1>
      <section>
        <h2>Free</h2>
        <p>Bulk delete, unsubscribe, and reach inbox zero on one personal inbox. $0.</p>
      </section>
      <section>
        <h2>Pro</h2>
        <p>Unlimited mailbox history and scheduled cleanups for power users.</p>
      </section>
      <section>
        <h2>Team</h2>
        <p>Pro features across every inbox on your team, billed per seat.</p>
      </section>
    </main>
  );
}
