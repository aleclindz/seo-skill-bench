export type Post = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  excerpt: string;
  body: string[];
  bridgeNote?: string;
};

// Content carried over from the InboxZap era. InboxZap pivoted into Lumina;
// these posts still rank for real inbox-cleanup queries, so they stay live
// (with a bridge note) instead of being silently orphaned or deleted.
const INBOX_ERA_BRIDGE =
  "InboxZap, the inbox-cleanup tool this post was written for, is now Lumina — an AI assistant for your meetings instead of your inbox. If you came here looking for InboxZap, see what we're building now.";

export const posts: Post[] = [
  {
    slug: 'inboxzap-is-now-lumina',
    title: "InboxZap Is Now Lumina: Why We Pivoted",
    description:
      "InboxZap helped you clean up your inbox. We've shut it down and rebuilt the team around Lumina, an AI meeting assistant. Here's why, and what happens to your InboxZap account.",
    publishedAt: '2026-10-01',
    excerpt:
      "InboxZap is no longer being developed. Here's the story of why we pivoted to Lumina, an AI meeting assistant, and what that means if you were an InboxZap user.",
    body: [
      "If you searched for InboxZap, here's the short version: we stopped building it. The team behind InboxZap's bulk-delete and unsubscribe tools spent two years watching the real pain shift from \"too much email\" to \"too many meetings about email.\" So we rebuilt the company around that problem instead.",
      "Lumina is an AI meeting assistant. It joins your calls, transcribes them, and turns them into a summary with decisions and action items — the same instinct that made InboxZap useful (stop doing repetitive admin work by hand), aimed at meetings instead of inboxes.",
      "InboxZap's bulk-delete and unsubscribe features are no longer being developed. If you're still looking for inbox-cleanup help, our older posts on bulk deleting email, unsubscribing from newsletters, and freeing up Gmail storage are still here and still accurate — we just won't be adding new ones.",
      "If you run a team that spends more time recapping meetings than reading email, that's what we're focused on now. Lumina is free for teams up to five.",
    ],
  },
  {
    slug: 'post-1',
    title: 'How to Reach Inbox Zero in 2024',
    description:
      "Inbox zero isn't about having zero emails — it's about having zero decisions left to make. A practical, three-step method to get there and stay there.",
    publishedAt: '2024-01-15',
    excerpt:
      "Inbox zero isn't about having zero emails — it's about having zero decisions left to make.",
    bridgeNote: INBOX_ERA_BRIDGE,
    body: [
      "Inbox zero isn't about having zero emails — it's about having zero decisions left to make. Every message in your inbox should be either archived, delegated, deferred to a scheduled block, or answered in under two minutes.",
      "Start with a bankruptcy declaration: select everything older than 30 days and archive it. It's all still searchable, and if it mattered, someone will follow up. Next, set up three filters: newsletters skip the inbox into a Reading label, receipts go straight to archive, and notifications from tools get batched into a daily digest.",
      "The habit that keeps you at zero is touch-it-once processing. Open your inbox at fixed times — say 9am, 1pm, and 4pm — and empty it completely each time. Outside those windows, the inbox stays closed. Most people find they recover four to six hours a week within the first month, and the background anxiety of an overflowing inbox simply disappears.",
    ],
  },
  {
    slug: 'post-2',
    title: '10 Gmail Filters That Save You an Hour a Day',
    description:
      "Ten Gmail filter recipes that route newsletters, receipts, and notifications out of your inbox automatically, so only real messages from real people land in front of you.",
    publishedAt: '2024-02-03',
    excerpt: 'Ten Gmail filter recipes that route noise out of your inbox automatically.',
    bridgeNote: INBOX_ERA_BRIDGE,
    body: [
      "Filters do the sorting work you'd otherwise do by hand, every single day. Set these ten up once and most of your inbox noise disappears permanently.",
      "Route anything with \"unsubscribe\" in the body to a Reading label instead of the inbox. Send receipts and confirmations (search: \"invoice OR receipt OR confirmation\") straight to an Archive label. Batch notification emails from tools like GitHub, Slack, and Jira into a daily digest folder instead of letting them interrupt you in real time.",
      "For recruiters and cold outreach, a filter matching common phrases (\"quick question\", \"connecting you with\") into a Later label keeps your main inbox for people who already know you. And for anything from your own domain sent to a distribution list you're not the primary recipient on, skip the inbox entirely — you can search for it later if it becomes relevant.",
    ],
  },
  {
    slug: 'post-3',
    title: 'How to Bulk Delete Emails',
    description:
      'A safe, three-step method for bulk deleting old email in Gmail and Outlook without accidentally losing invoices, contracts, or anything else you actually need.',
    publishedAt: '2024-02-20',
    excerpt: "Deleting emails one at a time is a losing game. Here's how to bulk delete safely.",
    bridgeNote: INBOX_ERA_BRIDGE,
    body: [
      "Deleting emails one at a time is a losing game. Here's how to bulk delete emails in every major client without nuking anything important.",
      "In Gmail, search operators do the heavy lifting: \"older_than:1y\" finds everything over a year old, \"category:promotions\" isolates marketing mail, and \"larger:10M\" surfaces the attachments eating your storage. Combine them, click select-all, then \"select all conversations that match this search\" to go beyond the visible page, and delete.",
      "Before you pull the trigger, protect the keepers. Star anything from key contacts, apply an \"important\" label to threads with invoices or contracts, and exclude them with \"-label:important\" in your delete search.",
      "In Outlook, use Sweep rules to delete all messages from a sender and keep only the latest. On mobile, don't bother — bulk operations belong on desktop where the safety nets are better. A quarterly fifteen-minute sweep keeps your archive lean permanently.",
    ],
  },
  {
    slug: 'post-4',
    title: 'Unsubscribe From Newsletters the Fast Way',
    description:
      'The average professional gets forty newsletters a week and reads three. Here is the fastest way to unsubscribe from the rest without clicking through surveys.',
    publishedAt: '2024-03-05',
    excerpt: 'The fastest way to unsubscribe from the newsletters you never read.',
    bridgeNote: INBOX_ERA_BRIDGE,
    body: [
      "The average professional receives forty newsletters a week and reads three. The rest are clutter you tolerate because unsubscribing feels like work. It doesn't have to be.",
      "The fast method: search your mail for the word \"unsubscribe\" and sort the senders by volume. Work down the list from the noisiest sender. Most legitimate newsletters honor the one-click unsubscribe header, which your mail client exposes as an Unsubscribe button right next to the sender name — no landing pages, no \"tell us why you're leaving\" surveys.",
      "For the stragglers that make you log in to leave, don't bother: create a filter that sends them straight to trash instead. The effect is identical and it takes five seconds.",
      "Do a pass like this once a quarter. Twenty minutes of ruthless unsubscribing typically cuts inbox volume by a third, and it compounds — every list you leave is hundreds of future emails that never arrive.",
    ],
  },
  {
    slug: 'post-5',
    title: "Gmail Storage Full? Here's How to Free Up Space",
    description:
      'That "storage full" banner usually means old attachments, not old emails. A fifteen-minute routine that typically recovers two to four gigabytes.',
    publishedAt: '2024-03-22',
    excerpt: 'A fifteen-minute routine that typically recovers two to four gigabytes of Gmail storage.',
    bridgeNote: INBOX_ERA_BRIDGE,
    body: [
      'That "storage full" banner means Gmail, Drive, and Photos have collectively hit your 15 GB — and email attachments are usually the silent culprit.',
      'Start with the size search: type "larger:10M" in the Gmail search bar. This surfaces every message over ten megabytes, which is where old design files, videos, and PDF decks hide. Sort through them once; most are years old and long since irrelevant. Delete, then repeat with "larger:5M".',
      'Next, target the Promotions category older than six months — thousands of image-heavy marketing emails add up faster than you\'d think. Then empty Spam and Trash, which still count against your quota until permanently cleared.',
      "If you need to keep attachments, save them to Drive first — counterintuitively, a file stored once in Drive often costs less space than the same file duplicated across a long email thread. Fifteen minutes of this routine typically recovers two to four gigabytes, enough to put the banner away for a year.",
    ],
  },
  {
    slug: 'post-6',
    title: 'The Best Email Cleanup Apps Compared',
    description:
      'Bulk unsubscribers, inbox screeners, rules engines, and full-service cleaners all promise a calm inbox. Here is how the categories actually differ.',
    publishedAt: '2024-04-10',
    excerpt: 'Email cleanup tools all promise a calm inbox, but they get there very differently.',
    bridgeNote: INBOX_ERA_BRIDGE,
    body: [
      'Email cleanup tools all promise the same thing — a calm inbox — but they get there very differently, and the differences matter.',
      "Bulk unsubscribers scan your mail for subscriptions and offer one-click mass unsubscribe. They're the fastest win for newsletter overload, but they don't touch the backlog already sitting in your archive. Screeners take the opposite approach: new senders wait in a lobby until you approve them, which is transformative for cold-email volume but does nothing for storage.",
      'Rules engines automate what filters do, with friendlier interfaces — think "roll up everything from these 40 senders into one daily digest". And full-service cleaners crunch your entire history, surfacing the biggest senders and largest attachments so you can delete by the thousand.',
      'Before you pick one, check the privacy page: some free tools have historically funded themselves by selling anonymized inbox data. Prefer tools that charge money and state plainly that your mail is never used for anything else.',
    ],
  },
  {
    slug: 'post-7',
    title: 'Bulk Delete Emails: Complete Guide',
    description:
      'Protect, select, delete: the three-phase method for taking a five-digit unread count down to a few hundred keepers in an afternoon.',
    publishedAt: '2024-04-28',
    excerpt: 'Protect, select, delete: a complete method for bulk deleting a five-digit unread count.',
    bridgeNote: INBOX_ERA_BRIDGE,
    body: [
      "If your inbox has five digits in the unread count, this guide is for you. Bulk deleting emails safely comes down to three phases: protect, select, delete.",
      'Protect first. Star or label anything you cannot lose — invoices, contracts, travel documents, threads from your accountant. In Gmail, "has:attachment from:me" often catches documents you sent and might need again.',
      'Then select in big, safe strokes. Age is the safest axis: "older_than:2y" is almost always deletable wholesale. Category is next: Promotions and Social can usually go entirely. Sender-based selection mops up the rest — sort your top senders and delete whole senders at a time.',
      "Finally, delete in batches and let each one finish; interrupting a ten-thousand-message delete mid-flight is how odd sync states happen. Keep everything in Trash for the full thirty days as your undo window.",
      "Done in this order, even a 50,000-message inbox comes down to a few hundred keepers in an afternoon.",
    ],
  },
  {
    slug: 'post-8',
    title: "Archive vs Delete: What's the Difference?",
    description:
      'Archiving and deleting both clear your inbox, but only one of them is reversible. A simple rule of thumb for which to use and when.',
    publishedAt: '2024-05-14',
    excerpt: 'Archive and delete both clear your inbox — the similarity ends there.',
    bridgeNote: INBOX_ERA_BRIDGE,
    body: [
      "Archive and delete both make a message disappear from your inbox, and that's where the similarity ends.",
      'Archiving removes the inbox label but keeps the message forever — searchable, restorable, and counted against your storage quota. Deleting moves it to Trash, where it survives thirty days before being permanently removed, quota and all.',
      'The rule of thumb: archive by default, delete by category. Any message you might conceivably search for — a conversation, a receipt, a decision — should be archived, because storage is cheap and your memory isn\'t. Reserve deletion for categories you know are worthless in bulk: promotions, notifications, social updates, and expired calendar noise.',
      "The one exception is storage pressure. When you're paying for space you don't need, deletion becomes an economic decision — start with the largest attachments and the oldest promotional mail.",
      'If you\'re ever unsure, archive. Nobody has ever regretted keeping a searchable copy; plenty of people have regretted an overeager empty-trash click.',
    ],
  },
  {
    slug: 'post-9',
    title: 'Email Overload: Why Your Inbox Is Stressing You Out',
    description:
      "Email overload isn't about volume, it's about unresolved decisions. Why an overflowing inbox causes real anxiety, and the mental model that fixes it.",
    publishedAt: '2024-06-02',
    excerpt: "Email overload isn't about volume — it's about unresolved decisions piling up.",
    bridgeNote: INBOX_ERA_BRIDGE,
    body: [
      "Email overload isn't really about volume. A thousand read, filed, and resolved messages cause no stress at all. The anxiety comes from unresolved decisions sitting in view, each one a tiny unfinished task your brain keeps re-checking.",
      "That's why clearing your unread count doesn't fix the feeling — you can mark everything read and still feel behind, because the underlying decisions are still pending. The fix is processing, not viewing: every message needs a verdict (respond, delegate, schedule, archive) the first time you touch it.",
      "Batching helps precisely because it removes the ambient presence of the inbox between checks. If you only ever open email at three fixed points a day, there's nothing to re-check in between — the anxiety has nothing to attach to.",
    ],
  },
  {
    slug: 'post-10',
    title: 'How to Clean Up Your Outlook Inbox',
    description:
      'Sweep, Clean Up Conversation, Focused Inbox, and auto-archive: the four built-in Outlook tools most people never open, used together.',
    publishedAt: '2024-06-20',
    excerpt: 'Outlook has more built-in cleanup power than any other mail client.',
    bridgeNote: INBOX_ERA_BRIDGE,
    body: [
      'Outlook has more built-in cleanup power than any other mail client — most people just never open the right menus.',
      'Start with Sweep. From any message, Sweep lets you delete everything from that sender, keep only the latest message, or auto-delete their mail after ten days. Applied to your top twenty noisy senders, Sweep alone can retire thousands of messages in minutes.',
      "Next, the Clean Up Conversation tool: it removes every message in a thread that's quoted inside a later reply, collapsing fifty-message chains into the handful that contain unique content.",
      'Then set your Focused Inbox honestly. Train it by moving misfiled mail for a week, and it becomes a reliable first-pass filter. Pair it with rules that route newsletters and notifications to folders that skip the inbox entirely.',
      "Finally, schedule auto-archive: anything older than six months moves to an archive folder automatically. Your searches still find everything; your inbox just stops being a museum.",
    ],
  },
  {
    slug: 'post-11',
    title: 'Automatic Email Sorting: Set It and Forget It',
    description:
      'Four buckets — Now, Reading, Records, Noise — and one rule each. The simplest automatic email-sorting system that actually holds up over time.',
    publishedAt: '2024-07-09',
    excerpt: 'Four buckets and one rule each: the simplest automatic email-sorting system.',
    bridgeNote: INBOX_ERA_BRIDGE,
    body: [
      "Manual email sorting is a job you can retire today. Every major mail client can route messages automatically by sender, subject, keywords, or list headers — the trick is designing the buckets before you build the rules.",
      "Four buckets cover almost everyone. Now: real humans writing to you directly — the only bucket that belongs in your inbox. Reading: newsletters and digests, batched for when you choose. Records: receipts, confirmations, statements — archived on arrival, searchable later. Noise: notifications and social updates, sent to a folder you check weekly or never.",
      "Build one rule per bucket, broadest match first, and let new mail train the edges: each time something lands in the wrong place, tighten the rule rather than moving the message. Within two weeks the misfiles stop.",
      "The payoff compounds quietly. Sorting five hundred weekly messages by hand costs about two hours; the rules do it in zero. That's a hundred hours a year returned for an evening of setup.",
    ],
  },
  {
    slug: 'post-12',
    title: 'How to Delete Old Emails in Bulk Without Losing Important Ones',
    description:
      'A protect-first checklist for bulk-deleting years of old email — what to star, label, and exclude before you select-all and delete.',
    publishedAt: '2024-07-25',
    excerpt: 'A protect-first checklist for bulk-deleting years of old email safely.',
    bridgeNote: INBOX_ERA_BRIDGE,
    body: [
      "Old email is almost always safe to delete in bulk — almost. The risk isn't the delete itself, it's deleting before you've protected the handful of threads you'll actually need again.",
      'Before anything else, star or label: anything from your accountant or lawyer, signed contracts, warranty and purchase receipts for big-ticket items, and travel confirmations for upcoming trips. That takes ten minutes and removes 95% of the real risk.',
      'Then delete by age and category, not by scrolling: "older_than:2y -label:important" is a safe wholesale search in Gmail once you\'ve protected the keepers. Review the first page of results once to sanity-check the filter, then select all matching conversations and delete.',
      "Everything lands in Trash for thirty days before it's gone for good, so there's a real undo window if you protected the wrong label by mistake.",
    ],
  },
];

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
