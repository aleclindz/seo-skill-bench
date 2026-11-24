export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: 'Which meeting platforms does Lumina support?',
    answer:
      'Lumina joins Zoom, Google Meet, and Microsoft Teams calls automatically once it is connected to your calendar. We add new platforms based on customer demand.',
  },
  {
    question: 'Is my meeting data private and secure?',
    answer:
      'Transcripts are encrypted in transit and at rest, and are never used to train models. Enterprise plans include custom data retention and data residency options.',
  },
  {
    question: 'How accurate are the AI summaries?',
    answer:
      "Every summary is built on top of a full speaker-labeled transcript, so decisions and action items are extracted from exactly what was said rather than guessed at.",
  },
  {
    question: 'Can I use Lumina for free?',
    answer:
      'Yes. The Free plan supports teams up to 5 people with unlimited meetings and 30-day transcript history, no credit card required.',
  },
  {
    question: 'Does Lumina integrate with the tools we already use?',
    answer:
      'Action items and recaps push to Slack and Notion, and transcripts can attach directly to CRM records, so Lumina fits into your existing workflow instead of replacing it.',
  },
  {
    question: 'What happens to my meeting history if I cancel?',
    answer:
      'You can export every transcript and summary before cancelling. We keep your data available for 30 days after cancellation in case you need to come back for it.',
  },
];
