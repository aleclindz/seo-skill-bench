import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    "Lumina is free for teams up to 5. Paid plans add unlimited meeting history, admin controls, and integrations as your team grows.",
  alternates: { canonical: '/pricing' },
};

const plans = [
  {
    name: 'Free',
    price: '$0',
    tagline: 'For small teams getting started',
    features: ['Up to 5 team members', 'Unlimited meeting transcripts', '30-day searchable history'],
  },
  {
    name: 'Team',
    price: '$12/user/mo',
    tagline: 'For growing teams that live in meetings',
    features: [
      'Unlimited team members',
      'Unlimited searchable history',
      'Action-item routing to Slack and email',
    ],
  },
  {
    name: 'Business',
    price: 'Contact us',
    tagline: 'For companies that need admin controls',
    features: ['SSO & admin controls', 'Priority support', 'Custom data retention'],
  },
];

export default function PricingPage() {
  return (
    <main>
      <h1>Simple pricing for teams of any size</h1>
      <p>Start free. Upgrade when your team needs more history or admin controls.</p>
      <div className="plan-list">
        {plans.map((plan) => (
          <section key={plan.name}>
            <h2>{plan.name}</h2>
            <p className="price">{plan.price}</p>
            <p>{plan.tagline}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <a className="cta" href="/">
        Start free
      </a>
    </main>
  );
}
