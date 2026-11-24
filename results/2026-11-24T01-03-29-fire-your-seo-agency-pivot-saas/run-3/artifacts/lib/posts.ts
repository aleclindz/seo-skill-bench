export type Source = { name: string; url: string };
export type FaqItem = { q: string; a: string };
export type Section =
  | { heading: string; paragraphs: string[]; table?: undefined }
  | { heading: string; paragraphs?: string[]; table: { headers: string[]; rows: string[][] } };

export type Post = {
  slug: string;
  title: string;
  question: string;
  answer: string;
  description: string;
  dataAsOf: string;
  datePublished: string;
  dateModified: string;
  body: Section[];
  sources: Source[];
  faq: FaqItem[];
  related: string[];
  isHub?: boolean;
  /** Human-readable anchor text used when other posts link to this one inline. */
  anchorText: string;
};

const GOOGLE_MAIL_HELP: Source = { name: 'Google Workspace Help — Gmail', url: 'https://support.google.com/mail/' };
const MS_OUTLOOK_HELP: Source = { name: 'Microsoft Support — Outlook', url: 'https://support.microsoft.com/outlook' };

export const posts: Post[] = [
  {
    slug: 'how-to-reach-inbox-zero',
    title: 'Reach Inbox Zero Without Reading Every Email',
    question: 'How do I reach inbox zero?',
    anchorText: 'the inbox zero method',
    answer:
      'Reach inbox zero fastest by bulk-deleting or archiving everything older than 30 days first, unsubscribing from senders you never open, then keeping it at zero with 2-3 filters that auto-file future mail before it piles up again.',
    description:
      'Reach inbox zero in three passes: clear the backlog in bulk, cut the newsletters causing it, then add filters so it never piles up again.',
    dataAsOf: '2026-11-24',
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
    isHub: true,
    body: [
      {
        heading: 'Why "read every email" fails',
        paragraphs: [
          'Most inbox-zero attempts fail because they start with triage — opening each message and deciding what to do with it. That works for 50 emails, not 5,000. The order that actually finishes is: clear the backlog in bulk first, stop new backlog from forming second, then triage only what is left.',
        ],
      },
      {
        heading: 'Pass 1: clear the backlog in bulk',
        paragraphs: [
          'Sort by sender or use a date filter (Gmail: older_than:1y, Outlook: a date-range search) and bulk-select everything from senders you have not opened in a year. Archive if you might need it for search later, delete if you would never look it up. See bulk-delete-emails-gmail for the exact steps.',
        ],
      },
      {
        heading: 'Pass 2: cut the source, not just the symptom',
        paragraphs: [
          'Newsletters and promotional mail are usually the largest recurring share of a cluttered inbox. Unsubscribing from senders you never open stops tomorrow\'s backlog from forming — see unsubscribe-from-newsletters for a one-sitting method.',
        ],
      },
      {
        heading: 'Pass 3: make zero stick with filters',
        paragraphs: [
          'Once the backlog is cleared, 2-3 filters that auto-archive or auto-label recurring senders (receipts, notifications, newsletters you keep but don\'t read immediately) keep new mail from re-accumulating. See gmail-filters-guide or outlook-inbox-cleanup depending on your provider.',
        ],
        table: undefined,
      },
      {
        heading: 'How long does each pass take',
        paragraphs: [],
        table: {
          headers: ['Pass', 'Typical time', 'Tooling'],
          rows: [
            ['Clear backlog', '10-20 minutes', 'Bulk select + delete/archive'],
            ['Cut newsletters', '10-15 minutes', 'Unsubscribe in bulk'],
            ['Set up filters', '5-10 minutes', '2-3 rules, one time'],
          ],
        },
      },
    ],
    sources: [GOOGLE_MAIL_HELP, MS_OUTLOOK_HELP],
    faq: [
      {
        q: 'Is inbox zero realistic for a busy, years-old inbox?',
        a: 'Yes — the backlog is cleared in bulk in one pass (minutes, not hours), it is only the triage-every-message approach that does not scale.',
      },
      {
        q: 'Should I archive or delete to get there?',
        a: 'Archive anything you might search for later; delete anything you would never look up again. See archive-vs-delete-email for the specific tradeoffs.',
      },
      {
        q: 'Will I just end up back at thousands of unread emails?',
        a: 'Only if pass 3 (filters) is skipped. Clearing the backlog without stopping new recurring mail just delays the next cleanup.',
      },
    ],
    related: ['bulk-delete-emails-gmail', 'unsubscribe-from-newsletters', 'email-overload-and-inbox-anxiety'],
  },
  {
    slug: 'free-up-gmail-storage',
    title: 'Gmail Storage Full? How to Free Up Space Fast',
    question: "How do I free up Gmail storage when it's full?",
    anchorText: 'freeing up Gmail storage',
    answer:
      'Free up Gmail storage by finding your largest emails with the larger_than: search operator and deleting those first, then bulk-deleting old Promotions and Social mail, which is where most quota gets used.',
    description:
      'Gmail storage full? Find your biggest emails with larger_than:, then clear old Promotions mail in bulk. The fastest path to free space, step by step.',
    dataAsOf: '2026-11-24',
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
    body: [
      {
        heading: 'Find what is actually using your storage',
        paragraphs: [
          'Search Gmail for larger_than:10M to surface every email over 10MB — almost always attachments. A handful of these can account for gigabytes. Sort by size, not date, since one 500MB email backlog of PDFs matters more than a thousand small marketing emails.',
        ],
      },
      {
        heading: 'Clear the recurring source: Promotions and Social',
        paragraphs: [
          'After large attachments, the next biggest contributor is usually accumulated Promotions and Social-tab mail. Search category:promotions older_than:6mo and bulk-delete — see bulk-delete-emails-gmail for the exact selection steps.',
        ],
      },
      {
        heading: 'Storage is shared across Gmail, Drive, and Photos',
        paragraphs: [],
        table: {
          headers: ['Free tier storage', 'Shared across'],
          rows: [['15 GB', 'Gmail + Google Drive + Google Photos']],
        },
      },
      {
        heading: 'Does deleting free space immediately?',
        paragraphs: [
          'Deleted mail sits in Trash for 30 days and still counts against your quota until it is permanently removed, either automatically after 30 days or by emptying Trash manually.',
        ],
      },
    ],
    sources: [GOOGLE_MAIL_HELP],
    faq: [
      {
        q: "What's the fastest way to check what's using my Gmail storage?",
        a: 'Search larger_than:10M (or a smaller threshold) to sort by the biggest individual emails first — that finds the worst offenders in seconds.',
      },
      {
        q: 'Does deleting old emails free storage right away?',
        a: 'Only after Trash is emptied — deleted mail still counts toward your quota for up to 30 days unless you empty Trash manually.',
      },
      {
        q: 'Will deleting old emails break Gmail search?',
        a: 'No — search only returns what still exists. Archiving instead of deleting keeps mail searchable if you are not sure you want it gone.',
      },
    ],
    related: ['bulk-delete-emails-gmail', 'how-to-reach-inbox-zero', 'archive-vs-delete-email'],
  },
  {
    slug: 'bulk-delete-emails-gmail',
    title: 'How to Bulk Delete Thousands of Emails in Gmail',
    question: 'How do I bulk delete thousands of emails in Gmail?',
    anchorText: 'bulk-deleting emails in Gmail',
    answer:
      'Search a filter like older_than:1y category:promotions, select the checkbox at the top of the results, then click "Select all conversations that match this search" to delete every matching email at once, not just the page you see.',
    description:
      'Bulk delete thousands of Gmail emails at once: build a search filter, select all matching conversations, then delete. Full steps and limits.',
    dataAsOf: '2026-11-24',
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
    body: [
      {
        heading: 'The step most people miss',
        paragraphs: [
          'Checking the top checkbox only selects the ~50 emails visible on screen. After checking it, Gmail shows a link: "Select all conversations that match this search." Clicking that is what actually selects every matching email across the whole account, not just the current page.',
        ],
      },
      {
        heading: 'Useful search filters before you delete',
        paragraphs: [],
        table: {
          headers: ['Goal', 'Search filter'],
          rows: [
            ['Everything older than a year', 'older_than:1y'],
            ['Old promotional mail only', 'category:promotions older_than:6mo'],
            ['From one noisy sender', 'from:sender@example.com'],
            ['Large attachments', 'larger_than:10M'],
          ],
        },
      },
      {
        heading: 'Is there a limit?',
        paragraphs: [
          'Gmail processes bulk deletes in batches rather than one single instant action on very large result sets; on a large mailbox this can take a few minutes to finish applying. It is still far faster than manual selection.',
        ],
      },
    ],
    sources: [GOOGLE_MAIL_HELP],
    faq: [
      {
        q: 'Can I recover bulk-deleted emails?',
        a: 'Yes, for 30 days — deleted mail goes to Trash and can be restored until Trash auto-empties or you empty it manually.',
      },
      {
        q: 'Does bulk deleting affect storage right away?',
        a: 'Not until Trash is emptied — see free-up-gmail-storage for how quota accounting works.',
      },
      {
        q: 'What if I only want to delete promotional mail, not everything?',
        a: 'Add category:promotions (or category:social) to the search before selecting all — the delete only applies to what the search matches.',
      },
    ],
    related: ['free-up-gmail-storage', 'how-to-reach-inbox-zero', 'archive-vs-delete-email'],
  },
  {
    slug: 'unsubscribe-from-newsletters',
    title: 'How to Mass Unsubscribe From Newsletters',
    question: 'How do I unsubscribe from newsletters in bulk?',
    anchorText: 'unsubscribing from newsletters in bulk',
    answer:
      'Search your inbox for unsubscribe to surface every newsletter and marketing sender in one list, open each one once and use the one-click unsubscribe link (or List-Unsubscribe header) most senders are legally required to include, rather than deleting messages one by one forever.',
    description:
      'Unsubscribe from every newsletter in one sitting: find senders with an unsubscribe search, use the required one-click link, confirm nothing new arrives.',
    dataAsOf: '2026-11-24',
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
    body: [
      {
        heading: 'Find every newsletter sender in one search',
        paragraphs: [
          'Searching unsubscribe (Gmail or Outlook) surfaces nearly every marketing and newsletter sender, since commercial email is required to include an unsubscribe mechanism. Sort by sender to see how many separate lists you are actually on — most people are surprised it is 40-80 senders, not 5.',
        ],
      },
      {
        heading: 'Use the link, do not just delete',
        paragraphs: [
          'Deleting a newsletter removes that one email; the sender keeps sending next week. The unsubscribe link (often shown next to the sender name in Gmail, or at the bottom of the message) stops it at the source. Gmail and major providers support one-click unsubscribe via the List-Unsubscribe header, so this is usually a single click, not a form.',
        ],
      },
      {
        heading: 'Why it is worth doing in one sitting',
        paragraphs: [
          'Unsubscribing one sender a day never catches up with new signups and old list purchases. Working through the full unsubscribe search once, then repeating the search a week later to catch stragglers, actually finishes the job.',
        ],
      },
    ],
    sources: [GOOGLE_MAIL_HELP],
    faq: [
      {
        q: 'Is unsubscribing safe, or does it confirm my email is active to spammers?',
        a: 'Legitimate senders are legally required to honor unsubscribe requests (e.g. under CAN-SPAM/GDPR rules). It is a risk mainly with senders you never opted into in the first place — for those, filtering/blocking is safer than clicking links.',
      },
      {
        q: 'What is a mass unsubscribe vs deleting in bulk?',
        a: 'Mass unsubscribe stops future mail from a sender; bulk delete (see bulk-delete-emails-gmail) only clears mail already sent. Most cleanups need both.',
      },
      {
        q: 'Why do I still get mail from someone I unsubscribed from?',
        a: 'Some senders take up to 10 business days to process unsubscribes, and separate lists from the same company require separate unsubscribes.',
      },
    ],
    related: ['how-to-reach-inbox-zero', 'bulk-delete-emails-gmail', 'best-email-cleanup-tools'],
  },
  {
    slug: 'gmail-filters-guide',
    title: 'Gmail Filters: Auto-Sort Your Email',
    question: 'How do I set up Gmail filters to automatically sort email?',
    anchorText: 'setting up Gmail filters',
    answer:
      'Create a Gmail filter from Settings > Filters and Blocked Addresses > Create a new filter, match by sender or subject, then choose "Skip the Inbox," "Apply label," or "Delete it" so matching mail is sorted automatically before it ever reaches your inbox.',
    description:
      'Set up Gmail filters that automatically sort, label, archive, or delete incoming email by sender or subject — so your inbox stays organized without manual work.',
    dataAsOf: '2026-11-24',
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
    body: [
      {
        heading: 'Where filters live and how to create one',
        paragraphs: [
          'In Gmail: Settings (gear icon) > See all settings > Filters and Blocked Addresses > Create a new filter. You can also start from an existing email via the three-dot menu > "Filter messages like these," which pre-fills the sender.',
        ],
      },
      {
        heading: 'The three rules worth setting up first',
        paragraphs: [],
        table: {
          headers: ['Rule', 'Match', 'Action'],
          rows: [
            ['Receipts', 'subject:(receipt OR invoice OR order confirmation)', 'Apply label "Receipts", skip inbox'],
            ['Newsletters you keep', 'from: known newsletter senders', 'Apply label "Read later", skip inbox'],
            ['Known noise', 'from: senders you never open', 'Delete it'],
          ],
        },
      },
      {
        heading: 'Filters vs unsubscribing',
        paragraphs: [
          'A filter hides mail from your inbox; it does not stop it from being sent. For senders you never want again, unsubscribing (see unsubscribe-from-newsletters) is the stronger fix — use filters for mail you want kept but out of the way.',
        ],
      },
    ],
    sources: [GOOGLE_MAIL_HELP],
    faq: [
      {
        q: 'Do Gmail filters apply to email already in my inbox?',
        a: 'Only if you check "Also apply filter to matching conversations" when creating it — otherwise it only applies going forward.',
      },
      {
        q: 'What is the difference between a filter and a label?',
        a: 'A label is a tag you can apply manually or via a filter; a filter is the automation rule that applies labels (or other actions) to incoming mail automatically.',
      },
      {
        q: 'Can filters delete email automatically?',
        a: 'Yes — choosing "Delete it" as the action sends matching mail straight to Trash without it ever appearing in the inbox.',
      },
    ],
    related: ['how-to-reach-inbox-zero', 'outlook-inbox-cleanup', 'unsubscribe-from-newsletters'],
  },
  {
    slug: 'outlook-inbox-cleanup',
    title: 'How to Clean Up and Auto-Sort Your Outlook Inbox',
    question: 'How do I clean up and automatically sort my Outlook inbox?',
    anchorText: 'cleaning up your Outlook inbox',
    answer:
      'Clean up Outlook fastest with Sweep (right-click any email > Sweep) to auto-delete or auto-archive future mail from that sender, Focused Inbox to separate priority mail automatically, and Rules for anything Sweep cannot cover.',
    description:
      "Clean up and auto-sort your Outlook inbox with Sweep, Focused Inbox, and Rules — the three built-in features that do the ongoing sorting for you.",
    dataAsOf: '2026-11-24',
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
    body: [
      {
        heading: 'Sweep: the fastest bulk tool',
        paragraphs: [
          'Right-click any email and choose Sweep to delete all mail from that sender, keep only the latest, or move everything older than 10 days — and optionally apply the same rule to all future mail from that sender automatically.',
        ],
      },
      {
        heading: 'Focused Inbox: separate the noise automatically',
        paragraphs: [
          'Focused Inbox splits incoming mail into "Focused" and "Other" tabs based on who you actually interact with. It is on by default in Outlook and can be tuned per sender from the message menu ("Move to Other").',
        ],
      },
      {
        heading: 'Rules: for anything Sweep and Focused Inbox miss',
        paragraphs: [
          'File > Manage Rules & Alerts lets you build sender- or keyword-based rules similar to Gmail filters — see gmail-filters-guide for the same logic applied to Gmail if you manage both.',
        ],
      },
    ],
    sources: [MS_OUTLOOK_HELP],
    faq: [
      {
        q: 'What does the Outlook Sweep feature actually do?',
        a: 'It applies a bulk action (delete, keep latest only, or move older mail) to all current and optionally future email from a specific sender, in one setup step.',
      },
      {
        q: 'How is Focused Inbox different from a filter or rule?',
        a: 'Focused Inbox learns automatically from your reading habits; rules require you to define the exact condition and action manually.',
      },
      {
        q: 'Can I turn off Focused Inbox if it miscategorizes mail?',
        a: 'Yes, under View > Show Focused Inbox — though moving individual senders to "Other" first usually fixes miscategorization without disabling it.',
      },
    ],
    related: ['gmail-filters-guide', 'how-to-reach-inbox-zero', 'unsubscribe-from-newsletters'],
  },
  {
    slug: 'archive-vs-delete-email',
    title: 'Archive vs. Delete: Which Should You Use?',
    question: 'Should I archive or delete old emails?',
    anchorText: 'archiving vs. deleting old email',
    answer:
      'Archive anything you might search for or need as a record later; delete anything you would never look up again — archiving keeps mail searchable and out of the inbox, while deleting is the only way to actually reduce storage use.',
    description:
      'Archive vs delete for old email: archive keeps mail searchable without storage savings, delete frees space but loses the record. How to decide.',
    dataAsOf: '2026-11-24',
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
    body: [
      {
        heading: 'The core tradeoff',
        paragraphs: [],
        table: {
          headers: ['', 'Archive', 'Delete'],
          rows: [
            ['Removed from inbox', 'Yes', 'Yes'],
            ['Still searchable', 'Yes', 'No (after Trash empties)'],
            ['Frees up storage', 'No', 'Yes'],
            ['Best for', 'Receipts, records, anything you might need later', 'Spam, expired promotions, duplicates'],
          ],
        },
      },
      {
        heading: 'A simple rule by email type',
        paragraphs: [
          'Order confirmations, tax-related mail, and anything with a legal or financial record: archive. Promotional mail, expired event invites, and newsletters already covered by free-up-gmail-storage: delete.',
        ],
      },
    ],
    sources: [GOOGLE_MAIL_HELP],
    faq: [
      {
        q: 'Does archiving help if Gmail storage is full?',
        a: 'No — archived mail still counts against your storage quota. If storage is the problem, see free-up-gmail-storage for what actually frees space.',
      },
      {
        q: 'Can I undo a delete the same way I can un-archive?',
        a: 'Only within the Trash retention window (30 days in Gmail) — after that, deleted mail is gone for good, while archived mail has no time limit.',
      },
    ],
    related: ['free-up-gmail-storage', 'bulk-delete-emails-gmail', 'how-to-reach-inbox-zero'],
  },
  {
    slug: 'best-email-cleanup-tools',
    title: 'What to Look for in an Email Cleanup Tool',
    question: "What's the best email cleanup app?",
    anchorText: 'choosing an email cleanup tool',
    answer:
      "The best email cleanup tool for you depends on scale: Gmail and Outlook's own search operators and Sweep/filter tools are free and enough for occasional cleanup, while a dedicated tool like InboxZap is worth it once you're doing bulk delete and mass unsubscribe regularly across a large backlog.",
    description:
      'What actually matters when choosing an email cleanup app: bulk delete scope, real unsubscribe, and Gmail/Outlook support. A buyer\'s checklist.',
    dataAsOf: '2026-11-24',
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
    body: [
      {
        heading: 'Start with what your provider already gives you free',
        paragraphs: [
          'Gmail (search operators, filters, "select all matching") and Outlook (Sweep, Focused Inbox, Rules) both include real bulk-cleanup tools at no cost — see bulk-delete-emails-gmail and outlook-inbox-cleanup. For a one-time cleanup, this is usually enough.',
        ],
      },
      {
        heading: 'What a dedicated cleanup tool should actually add',
        paragraphs: [],
        table: {
          headers: ['Capability', 'Why it matters'],
          rows: [
            ['Unsubscribes at the source, not just filters', 'A filter hides future mail; it does not stop the sender from sending it'],
            ['Bulk delete across whole backlog, not page-by-page', 'Manual "select all matching" works, but is slow for repeated cleanups'],
            ['Works the same way across Gmail and other providers', 'Provider-native tools only cover their own inbox'],
            ['Free tier for personal use', 'No reason to pay for occasional cleanup'],
          ],
        },
      },
      {
        heading: 'Where InboxZap fits',
        paragraphs: [
          'InboxZap bulk-deletes old email and unsubscribes from newsletters in minutes, and is free for personal inboxes — see features for the full list. If your only need is an occasional one-time cleanup, your provider\'s own tools above may be all you need; InboxZap is built for doing this repeatedly without repeating the manual steps each time.',
        ],
      },
    ],
    sources: [GOOGLE_MAIL_HELP, MS_OUTLOOK_HELP],
    faq: [
      {
        q: 'Do I need a separate app, or is Gmail/Outlook enough?',
        a: "For a single cleanup, Gmail and Outlook's built-in tools are enough. For recurring cleanup across a large or multi-account inbox, a dedicated tool saves repeating the manual steps.",
      },
      {
        q: 'Does a cleanup tool need inbox access, and is that safe?',
        a: 'Any tool that bulk-deletes or unsubscribes on your behalf needs mail access scoped to those actions — check that access is limited to what the tool actually does, and that you can revoke it at any time from your provider\'s account security settings.',
      },
    ],
    related: ['unsubscribe-from-newsletters', 'bulk-delete-emails-gmail', 'how-to-reach-inbox-zero'],
  },
  {
    slug: 'email-overload-and-inbox-anxiety',
    title: 'Email Overload: Why It Happens, How to Fix It',
    question: 'Why does my email feel so overwhelming, and how do I fix it?',
    anchorText: 'email overload',
    answer:
      "Email overload is usually a backlog problem, not a discipline problem — thousands of unread messages create the anxiety, and the fix is clearing that backlog in bulk once, not reading faster or feeling guiltier about unread counts.",
    description:
      'Email overload and inbox anxiety usually come from an uncleared backlog, not a habit problem. How to fix the real cause and keep it from returning.',
    dataAsOf: '2026-11-24',
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
    body: [
      {
        heading: 'The backlog is the anxiety',
        paragraphs: [
          'An unread count in the thousands signals unfinished obligations even when most of those emails need no action at all. The feeling does not go away by ignoring it — it goes away when the number does.',
        ],
      },
      {
        heading: 'Fixing it does not mean reading everything',
        paragraphs: [
          'The fix is bulk clearing, not individual triage: see how-to-reach-inbox-zero for the three-pass method (clear backlog, cut newsletters, add filters) that gets through thousands of emails without opening most of them.',
        ],
      },
      {
        heading: 'Preventing it from coming back',
        paragraphs: [
          'Overload returns when the source — usually newsletters and recurring low-value senders — is not cut off. Unsubscribing (unsubscribe-from-newsletters) and a couple of filters (gmail-filters-guide) address the cause, not just the symptom.',
        ],
      },
    ],
    sources: [GOOGLE_MAIL_HELP],
    faq: [
      {
        q: "Is 'too many emails' really just a storage or clutter problem?",
        a: "It's a backlog problem — the count itself is what creates the overwhelmed feeling, independent of whether storage is actually full.",
      },
      {
        q: 'Will setting up filters alone fix an already-overwhelming inbox?',
        a: 'No — filters only affect new mail. The existing backlog needs a bulk clear first; see how-to-reach-inbox-zero.',
      },
    ],
    related: ['how-to-reach-inbox-zero', 'unsubscribe-from-newsletters', 'bulk-delete-emails-gmail'],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function getRelatedPosts(post: Post): Post[] {
  return post.related.map((slug) => getPost(slug)).filter((p): p is Post => Boolean(p));
}

export function getHubPost(): Post {
  const hub = posts.find((p) => p.isHub);
  if (!hub) throw new Error('No hub post defined');
  return hub;
}
