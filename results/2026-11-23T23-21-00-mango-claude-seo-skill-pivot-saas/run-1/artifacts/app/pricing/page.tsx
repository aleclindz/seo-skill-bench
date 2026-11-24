import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Lumina pricing for teams of every size, from getting started for free to enterprise rollouts.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Lumina Pricing',
    description:
      'Lumina pricing for teams of every size, from getting started for free to enterprise rollouts.',
    url: 'https://lumina.example/pricing',
  },
};

export default function PricingPage() {
  return (
    <main>
      <h1>Simple pricing for every team</h1>
      <p>Start for free, then move up as your team relies on Lumina for more meetings.</p>

      <section className="plans">
        <div className="plan">
          <h2>Free</h2>
          <p>Get started with automatic recording, transcription, and AI summaries.</p>
          <a className="cta" href="/">Start free</a>
        </div>
        <div className="plan">
          <h2>Team</h2>
          <p>
            For teams that want every meeting captured, with longer transcript history and
            priority support.
          </p>
          <a className="cta" href="/">Talk to us</a>
        </div>
        <div className="plan">
          <h2>Enterprise</h2>
          <p>Custom rollouts, security review, and dedicated support for larger organizations.</p>
          <a className="cta" href="/">Contact sales</a>
        </div>
      </section>
    </main>
  );
}
