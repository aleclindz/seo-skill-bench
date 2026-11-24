import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing — InboxZap',
  description:
    'InboxZap pricing: free for one personal inbox, Pro at $6/month for unlimited bulk cleanups and Outlook support, and Teams plans for shared company inboxes.',
  alternates: { canonical: 'https://lumina.example/pricing' },
  openGraph: {
    title: 'Pricing — InboxZap',
    description:
      'Free for one personal inbox. Pro at $6/month. Teams plans for shared inboxes.',
    url: 'https://lumina.example/pricing',
    images: ['/img/og-inboxzap.png'],
  },
};

export default function PricingPage() {
  return (
    <main>
      <h1>Simple pricing for a cleaner inbox</h1>
      <section className="plans">
        <div className="plan">
          <h2>Free</h2>
          <p>$0 &middot; one personal inbox</p>
          <p>
            One full bulk-delete and mass-unsubscribe scan per month, storage rescue, and
            basic sorting rules.
          </p>
        </div>
        <div className="plan">
          <h2>Pro</h2>
          <p>$6 per month</p>
          <p>
            Unlimited bulk cleanups, unlimited mass-unsubscribe, Outlook support, and smart
            sorting rules that keep learning.
          </p>
        </div>
        <div className="plan">
          <h2>Teams</h2>
          <p>Custom</p>
          <p>
            Shared and delegated inboxes, admin controls, SSO, and a dedicated success
            manager.
          </p>
        </div>
      </section>
      <p>
        Every plan includes unlimited scanning and the keeper-protection pass, so important
        mail is never swept up by accident.
      </p>
      <p>
        Not sure what InboxZap does? See the full{' '}
        <Link href="/features">feature list</Link> or read the{' '}
        <Link href="/faq">FAQ</Link>.
      </p>
    </main>
  );
}
