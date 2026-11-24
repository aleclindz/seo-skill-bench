import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ — Inbox Zero, Bulk Delete & Unsubscribe Questions | InboxZap',
  description:
    'Answers to common questions about reaching inbox zero, bulk deleting old emails, unsubscribing from newsletters, and freeing up Gmail storage.',
  alternates: { canonical: 'https://lumina.example/faq' },
};

const faqs = [
  {
    question: 'How do I reach inbox zero?',
    answer:
      'Archive everything older than 30 days, set up filters so newsletters, receipts, and notifications never hit your inbox again, then process what remains on a fixed schedule — a few times a day instead of constantly. InboxZap automates the archiving and filtering steps so you start from zero immediately instead of over weeks.',
  },
  {
    question: 'Should I archive or delete old emails?',
    answer:
      "Archive by default — it removes the message from your inbox but keeps it searchable and restorable. Delete only categories you know are worthless in bulk, like promotions and notifications, or when you're specifically trying to free up storage.",
  },
  {
    question: 'How do I bulk delete emails in Gmail?',
    answer:
      'Use search operators like "older_than:1y" or "category:promotions", select all matching conversations, and delete. InboxZap does this automatically across your whole inbox, grouped by sender and size, so you can review before anything is removed.',
  },
  {
    question: 'How do I delete thousands of emails at once?',
    answer:
      'Protect your keepers first (label invoices, contracts, and key contacts), then delete in large, safe batches by age or category rather than one at a time. InboxZap is built for exactly this — bulk-deleting tens of thousands of messages in minutes while keeping anything labeled important.',
  },
  {
    question: 'How do I mass unsubscribe from newsletters?',
    answer:
      'InboxZap scans your inbox for every newsletter and subscription you receive and lets you unsubscribe from dozens at once, using each sender\'s one-click unsubscribe header so nothing requires logging into a website.',
  },
  {
    question: 'Why is my Gmail storage full, and how do I fix it?',
    answer:
      'Attachments are usually the cause. Search "larger:10M" to find the biggest offenders, clear out old Promotions mail, and empty Spam and Trash, which still count against your quota. InboxZap surfaces your largest senders and attachments automatically so you know what to clear first.',
  },
  {
    question: 'Is InboxZap free?',
    answer:
      'Yes — InboxZap is free for personal inboxes. See the pricing page for team and unlimited-history plans.',
  },
];

export default function FaqPage() {
  return (
    <main>
      <h1>Frequently asked questions</h1>
      <div className="faq-list">
        {faqs.map((f) => (
          <article key={f.question}>
            <h2>{f.question}</h2>
            <p>{f.answer}</p>
          </article>
        ))}
      </div>
      <p>
        More detail in our <Link href="/blog">inbox cleanup guides</Link>.
      </p>
    </main>
  );
}
