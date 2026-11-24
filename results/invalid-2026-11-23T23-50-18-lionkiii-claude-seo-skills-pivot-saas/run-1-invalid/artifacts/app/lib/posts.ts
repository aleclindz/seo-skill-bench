export type Post = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  excerpt: string;
  paragraphs: string[];
};

// Previously-indexed posts (see gsc/Pages.csv and gsc/Queries.csv). Copy is
// preserved as-is from before the rebrand so the URLs keep the rankings and
// backlinks they already earned.
export const posts: Post[] = [
  {
    slug: 'post-1',
    title: "How to Reach Inbox Zero in 2024 (and Actually Stay There)",
    h1: 'How to Reach Inbox Zero in 2024',
    description:
      "Inbox zero isn't about deleting everything — it's about eliminating decisions. A practical system for archiving, filtering, and processing email on a fixed schedule.",
    excerpt:
      "Inbox zero isn't about having zero emails — it's about having zero decisions left to make.",
    paragraphs: [
      "Inbox zero isn't about having zero emails — it's about having zero decisions left to make. Every message in your inbox should be either archived, delegated, deferred to a scheduled block, or answered in under two minutes.",
      'Start with a bankruptcy declaration: select everything older than 30 days and archive it. It\'s all still searchable, and if it mattered, someone will follow up. Next, set up three filters: newsletters skip the inbox into a Reading label, receipts go straight to archive, and notifications from tools get batched into a daily digest.',
      'The habit that keeps you at zero is touch-it-once processing. Open your inbox at fixed times — say 9am, 1pm, and 4pm — and empty it completely each time. Outside those windows, the inbox stays closed. Most people find they recover four to six hours a week within the first month, and the background anxiety of an overflowing inbox simply disappears.',
    ],
  },
  {
    slug: 'post-2',
    title: '10 Gmail Filters That Save You an Hour a Day',
    h1: '10 Gmail Filters That Save You an Hour a Day',
    description:
      'Ten Gmail filters power users rely on to route newsletters, receipts, and notifications automatically, so your inbox sorts itself.',
    excerpt:
      'Filters are the highest-leverage feature in Gmail, and almost nobody uses more than one.',
    paragraphs: [
      'Filters are the highest-leverage feature in Gmail, and almost nobody uses more than one. Here are the ten we see power users rely on most.',
      'Route every newsletter to a Reading label with skip-inbox enabled. Auto-archive receipts and order confirmations, but star anything containing "refund" or "failed payment". Send calendar responses straight to trash — the event already updated. Label anything from your boss\'s domain as priority. Batch tool notifications (Jira, GitHub, Asana) into one label you review once daily.',
      'Auto-delete "out of office" replies after campaigns. Flag emails where you\'re in the To: line and the sender is external. Mute list-serve threads you\'ve been CC\'d into. Archive social media notifications on arrival. Finally, catch anything with an unsubscribe link that isn\'t already labeled and queue it for review.',
      'Set these up once — about twenty minutes of work — and your inbox handles the sorting that used to eat your mornings.',
    ],
  },
  {
    slug: 'post-3',
    title: 'How to Bulk Delete Emails',
    h1: 'How to Bulk Delete Emails',
    description:
      'A safe, repeatable way to bulk delete emails in Gmail and Outlook using search operators and Sweep rules — without losing anything important.',
    excerpt: 'Deleting emails one at a time is a losing game.',
    paragraphs: [
      "Deleting emails one at a time is a losing game. Here's how to bulk delete emails in every major client without nuking anything important.",
      'In Gmail, search operators do the heavy lifting: "older_than:1y" finds everything over a year old, "category:promotions" isolates marketing mail, and "larger:10M" surfaces the attachments eating your storage. Combine them, click select-all, then "select all conversations that match this search" to go beyond the visible page, and delete.',
      'Before you pull the trigger, protect the keepers. Star anything from key contacts, apply an "important" label to threads with invoices or contracts, and exclude them with "-label:important" in your delete search.',
      'In Outlook, use Sweep rules to delete all messages from a sender and keep only the latest. On mobile, don\'t bother — bulk operations belong on desktop where the safety nets are better. A quarterly fifteen-minute sweep keeps your archive lean permanently.',
    ],
  },
  {
    slug: 'post-4',
    title: 'Unsubscribe From Newsletters the Fast Way',
    h1: 'Unsubscribe From Newsletters the Fast Way',
    description:
      "The fastest way to unsubscribe from newsletters using one-click unsubscribe headers, plus a filter trick for the stragglers that won't let go.",
    excerpt: 'The average professional receives forty newsletters a week and reads three.',
    paragraphs: [
      "The average professional receives forty newsletters a week and reads three. The rest are clutter you tolerate because unsubscribing feels like work. It doesn't have to be.",
      'The fast method: search your mail for the word "unsubscribe" and sort the senders by volume. Work down the list from the noisiest sender. Most legitimate newsletters honor the one-click unsubscribe header, which your mail client exposes as an Unsubscribe button right next to the sender name — no landing pages, no "tell us why you\'re leaving" surveys.',
      "For the stragglers that make you log in to leave, don't bother: create a filter that sends them straight to trash instead. The effect is identical and it takes five seconds.",
      'Do a pass like this once a quarter. Twenty minutes of ruthless unsubscribing typically cuts inbox volume by a third, and it compounds — every list you leave is hundreds of future emails that never arrive.',
    ],
  },
  {
    slug: 'post-5',
    title: "Gmail Storage Full? Here's How to Free Up Space",
    h1: "Gmail Storage Full? Here's How to Free Up Space",
    description:
      "What to delete when Gmail says storage is full — large attachments, old promotions, spam, and trash — to recover gigabytes in minutes.",
    excerpt:
      'That "storage full" banner means Gmail, Drive, and Photos have collectively hit your 15 GB.',
    paragraphs: [
      'That "storage full" banner means Gmail, Drive, and Photos have collectively hit your 15 GB — and email attachments are usually the silent culprit.',
      'Start with the size search: type "larger:10M" in the Gmail search bar. This surfaces every message over ten megabytes, which is where old design files, videos, and PDF decks hide. Sort through them once; most are years old and long since irrelevant. Delete, then repeat with "larger:5M".',
      'Next, target the Promotions category older than six months — thousands of image-heavy marketing emails add up faster than you\'d think. Then empty Spam and Trash, which still count against your quota until permanently cleared.',
      "If you need to keep attachments, save them to Drive first — counterintuitively, a file stored once in Drive often costs less space than the same file duplicated across a long email thread. Fifteen minutes of this routine typically recovers two to four gigabytes, enough to put the banner away for a year.",
    ],
  },
  {
    slug: 'post-6',
    title: 'The Best Email Cleanup Apps Compared (2024 Edition)',
    h1: 'The Best Email Cleanup Apps Compared',
    description:
      'How bulk unsubscribers, inbox screeners, rules engines, and full-service cleaners differ — and what to check before trusting one with your mail.',
    excerpt:
      'Email cleanup tools all promise the same thing — a calm inbox — but they get there very differently.',
    paragraphs: [
      'Email cleanup tools all promise the same thing — a calm inbox — but they get there very differently, and the differences matter.',
      "Bulk unsubscribers scan your mail for subscriptions and offer one-click mass unsubscribe. They're the fastest win for newsletter overload, but they don't touch the backlog already sitting in your archive. Screeners take the opposite approach: new senders wait in a lobby until you approve them, which is transformative for cold-email volume but does nothing for storage.",
      'Rules engines automate what filters do, with friendlier interfaces — think "roll up everything from these 40 senders into one daily digest". And full-service cleaners crunch your entire history, surfacing the biggest senders and largest attachments so you can delete by the thousand.',
      'Before you pick one, check the privacy page: some free tools have historically funded themselves by selling anonymized inbox data. Prefer tools that charge money and state plainly that your mail is never used for anything else.',
    ],
  },
  {
    slug: 'post-7',
    title: 'Bulk Delete Emails: Complete Guide',
    h1: 'Bulk Delete Emails: Complete Guide',
    description:
      'A three-phase system — protect, select, delete — for safely bulk deleting tens of thousands of emails without losing the ones that matter.',
    excerpt: 'If your inbox has five digits in the unread count, this guide is for you.',
    paragraphs: [
      'If your inbox has five digits in the unread count, this guide is for you. Bulk deleting emails safely comes down to three phases: protect, select, delete.',
      'Protect first. Star or label anything you cannot lose — invoices, contracts, travel documents, threads from your accountant. In Gmail, "has:attachment from:me" often catches documents you sent and might need again.',
      'Then select in big, safe strokes. Age is the safest axis: "older_than:2y" is almost always deletable wholesale. Category is next: Promotions and Social can usually go entirely. Sender-based selection mops up the rest — sort your top senders and delete whole senders at a time.',
      'Finally, delete in batches and let each one finish; interrupting a ten-thousand-message delete mid-flight is how odd sync states happen. Keep everything in Trash for the full thirty days as your undo window.',
      'Done in this order, even a 50,000-message inbox comes down to a few hundred keepers in an afternoon.',
    ],
  },
  {
    slug: 'post-8',
    title: "Archive vs Delete: What's the Difference and When to Use Each",
    h1: "Archive vs Delete: What's the Difference?",
    description:
      "Archiving keeps a searchable copy forever; deleting frees storage after a 30-day grace period. Here's the rule of thumb for choosing between them.",
    excerpt:
      "Archive and delete both make a message disappear from your inbox, and that's where the similarity ends.",
    paragraphs: [
      "Archive and delete both make a message disappear from your inbox, and that's where the similarity ends.",
      'Archiving removes the inbox label but keeps the message forever — searchable, restorable, and counted against your storage quota. Deleting moves it to Trash, where it survives thirty days before being permanently removed, quota and all.',
      'The rule of thumb: archive by default, delete by category. Any message you might conceivably search for — a conversation, a receipt, a decision — should be archived, because storage is cheap and your memory isn\'t. Reserve deletion for categories you know are worthless in bulk: promotions, notifications, social updates, and expired calendar noise.',
      "The one exception is storage pressure. When you're paying for space you don't need, deletion becomes an economic decision — start with the largest attachments and the oldest promotional mail.",
      "If you're ever unsure, archive. Nobody has ever regretted keeping a searchable copy; plenty of people have regretted an overeager empty-trash click.",
    ],
  },
  {
    slug: 'post-9',
    title: 'Email Overload: Why Your Inbox Is Stressing You Out',
    h1: 'Email Overload: Why Your Inbox Is Stressing You Out',
    description:
      'The psychology behind inbox anxiety — the Zeigarnik effect — and the three structural changes that make email stop following you around.',
    excerpt: 'The average knowledge worker checks email 74 times a day.',
    paragraphs: [
      "The average knowledge worker checks email 74 times a day. Each check is a context switch, and each unprocessed message is an open loop your brain keeps tracking in the background. That's the mechanism behind inbox anxiety: it isn't the volume itself, it's the accumulated undecided.",
      "Psychologists call it the Zeigarnik effect — incomplete tasks occupy working memory until they're resolved or externalized. An inbox with 4,000 unread messages is 4,000 tiny unresolved claims on your attention.",
      'The fix is structural, not motivational. Close the loops in bulk: declare email bankruptcy on everything older than a month. Stop new loops from opening: unsubscribe aggressively and screen unknown senders. And contain the checking habit: batch email into two or three fixed windows a day, with notifications off in between.',
      "People who make these three changes report the same thing in different words — not that they got faster at email, but that email stopped following them around.",
    ],
  },
  {
    slug: 'post-10',
    title: 'How to Clean Up Your Outlook Inbox (Without Losing Anything)',
    h1: 'How to Clean Up Your Outlook Inbox',
    description:
      "Outlook's built-in cleanup tools — Sweep, Clean Up Conversation, Focused Inbox, and auto-archive — and how to use all four together.",
    excerpt: 'Outlook has more built-in cleanup power than any other mail client.',
    paragraphs: [
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
    h1: 'Automatic Email Sorting: Set It and Forget It',
    description:
      'A four-bucket system — Now, Reading, Records, Noise — for automatic email sorting that gets more accurate the longer you run it.',
    excerpt: 'Manual email sorting is a job you can retire today.',
    paragraphs: [
      'Manual email sorting is a job you can retire today. Every major mail client can route messages automatically by sender, subject, keywords, or list headers — the trick is designing the buckets before you build the rules.',
      'Four buckets cover almost everyone. Now: real humans writing to you directly — the only bucket that belongs in your inbox. Reading: newsletters and digests, batched for when you choose. Records: receipts, confirmations, statements — archived on arrival, searchable later. Noise: notifications and social updates, sent to a folder you check weekly or never.',
      'Build one rule per bucket, broadest match first, and let new mail train the edges: each time something lands in the wrong place, tighten the rule rather than moving the message. Within two weeks the misfiles stop.',
      "The payoff compounds quietly. Sorting five hundred weekly messages by hand costs about two hours; the rules do it in zero. That's a hundred hours a year returned for an evening of setup.",
    ],
  },
  {
    slug: 'post-12',
    title: 'How to Delete Old Emails in Bulk Without Losing Important Ones',
    h1: 'Delete Old Emails in Bulk Without Losing Important Ones',
    description:
      'Identify the keepers first, then delete everything else with confidence — a safe method for mass-deleting years of old email.',
    excerpt:
      'The fear that stops most people from mass-deleting old email is losing the one message that matters.',
    paragraphs: [
      'The fear that stops most people from mass-deleting old email is losing the one message that matters. The answer is to invert the problem: identify the keepers first, then delete everything else with confidence.',
      'Keepers cluster predictably. Financial records — search "invoice OR receipt OR statement" and label the results. Legal and HR — contracts, offers, anything signed. Travel and identity documents. Threads with a short list of key people: your manager, your lawyer, your co-founder. Labeling these four groups typically takes under an hour even in a huge mailbox.',
      'Now delete by age with the keepers excluded: "older_than:18m -label:keep" removes the bulk while your labeled messages stay untouched. Work backwards in six-month slices rather than one giant delete.',
      'Leave everything in Trash for its full thirty-day grace period as a final safety net. In practice, almost nobody restores anything — but knowing you can is what makes the big delete psychologically possible.',
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
