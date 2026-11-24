import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing — Free for Teams up to 5',
  description:
    'Lumina is free for teams up to 5 people. Paid plans add unlimited meeting history, CRM sync, and admin controls for larger teams.',
  alternates: { canonical: '/pricing' },
};

const plans = [
  {
    name: 'Free',
    price: '$0',
    cadence: 'forever',
    description: 'For small teams getting started with automatic meeting notes.',
    features: [
      'Up to 5 team members',
      'Unlimited meeting transcription',
      'AI summaries and action items',
      '30 days of searchable meeting history',
    ],
  },
  {
    name: 'Team',
    price: '$15',
    cadence: 'per user / month',
    description: 'For growing teams that live in meetings.',
    features: [
      'Unlimited team members',
      'Unlimited meeting history',
      'CRM and Slack sync',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: '',
    description: 'For organizations that need security and admin controls at scale.',
    features: [
      'SSO and SCIM provisioning',
      'Admin audit logs',
      'Dedicated onboarding',
      'Custom data retention policies',
    ],
  },
];

export default function PricingPage() {
  return (
    <main>
      <section className="hero">
        <h1>Simple pricing that scales with your team</h1>
        <p>Start free. Upgrade when your team outgrows it.</p>
      </section>

      <section className="pricing-plans">
        {plans.map((plan) => (
          <article key={plan.name}>
            <h2>{plan.name}</h2>
            <p className="price">
              {plan.price} {plan.cadence}
            </p>
            <p>{plan.description}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
