export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  dateModified?: string;
  paragraphs: string[];
  related: string[];
};

// `post-3` and `post-12` used to exist as separate pages. All three were
// targeting the same "bulk delete emails" search intent and splitting
// ranking signal across three weak pages instead of one strong one, so they
// were merged into `post-7` and now 301 there (see next.config.js).
export const posts: BlogPost[] = [
  {
    slug: 'post-1',
    title: 'How to Reach Inbox Zero in 2024 (and Actually Stay There)',
    description:
      "A step-by-step inbox zero method: the 30-day bankruptcy archive, three starter filters, and a fixed-times processing habit that keeps your inbox empty for good.",
    publishedAt: '2025-01-13',
    paragraphs: [
      "Inbox zero isn't about having zero emails — it's about having zero decisions left to make. Every message in your inbox should be either archived, delegated, deferred to a scheduled block, or answered in under two minutes.",
      "Start with a bankruptcy declaration: select everything older than 30 days and archive it. It's all still searchable, and if it mattered, someone will follow up. Next, set up three filters: newsletters skip the inbox into a Reading label, receipts go straight to archive, and notifications from tools get batched into a daily digest.",
      "The habit that keeps you at zero is touch-it-once processing. Open your inbox at fixed times — say 9am, 1pm, and 4pm — and empty it completely each time. Outside those windows, the inbox stays closed. Most people find they recover four to six hours a week within the first month, and the background anxiety of an overflowing inbox simply disappears.",
    ],
    related: ['post-7', 'post-11'],
  },
  {
    slug: 'post-2',
    title: '10 Gmail Filters That Save You an Hour a Day',
    description:
      'Ten Gmail filter rules power users rely on to auto-sort newsletters, receipts, and notifications — set up once in twenty minutes, save an hour every day.',
    publishedAt: '2025-01-20',
    paragraphs: [
      "Filters are the highest-leverage feature in Gmail, and almost nobody uses more than one. Here are the ten we see power users rely on most.",
      'Route every newsletter to a Reading label with skip-inbox enabled. Auto-archive receipts and order confirmations, but star anything containing "refund" or "failed payment". Send calendar responses straight to trash — the event already updated. Label anything from your boss\'s domain as priority. Batch tool notifications (Jira, GitHub, Asana) into one label you review once daily.',
      'Auto-delete "out of office" replies after campaigns. Flag emails where you\'re in the To: line and the sender is external. Mute list-serve threads you\'ve been CC\'d into. Archive social media notifications on arrival. Finally, catch anything with an unsubscribe link that isn\'t already labeled and queue it for review.',
      'Set these up once — about twenty minutes of work — and your inbox handles the sorting that used to eat your mornings.',
    ],
    related: ['post-11', 'post-1'],
  },
  {
    slug: 'post-7',
    title: 'Bulk Delete Emails: The Complete Guide',
    description:
      'How to bulk delete emails safely in Gmail and Outlook: protect your keepers first, then use search operators and Sweep rules to clear thousands of old emails fast.',
    publishedAt: '2025-01-27',
    dateModified: '2026-11-24',
    paragraphs: [
      "Deleting emails one at a time is a losing game, and the fear of losing something important is what stops most people from doing it in bulk. The fix is to work in a fixed order: protect your keepers, select in big safe strokes, then delete in batches.",
      'Protect first. Star or label anything you can\'t lose — invoices, contracts, travel documents, threads from your accountant or your manager. Searching "invoice OR receipt OR statement" and labeling the results usually takes under an hour, even in a huge mailbox. In Gmail, add a "keep" label so later searches can exclude it explicitly.',
      'Then select by age and category, the two safest axes. "older_than:1y" finds everything past its useful life; "category:promotions" and "category:social" isolate marketing mail that can almost always go entirely; "larger:10M" surfaces the attachments eating your storage. Combine operators and exclude your keepers with "-label:keep" so the labeled messages stay untouched.',
      'Work backwards in slices — six months at a time — rather than attempting one giant delete. Click select-all, then "select all conversations that match this search" to go beyond the visible page, and delete the batch before starting the next one; interrupting a ten-thousand-message delete mid-flight is how odd sync states happen.',
      "Outlook users get a shortcut: Sweep rules can delete everything from a sender, or keep only the latest message, without building a search query at all. Applied to your twenty noisiest senders, Sweep alone can retire thousands of messages in minutes.",
      "Whichever client you use, leave everything in Trash for its full thirty-day grace period as a safety net. In practice almost nobody restores anything — but knowing you can is what makes the first big delete psychologically possible. Do a pass like this quarterly and even a 50,000-message inbox comes down to a few hundred keepers in an afternoon.",
    ],
    related: ['post-8', 'post-5'],
  },
  {
    slug: 'post-4',
    title: 'Unsubscribe From Newsletters the Fast Way',
    description:
      'The fastest way to mass unsubscribe from newsletters: sort senders by volume, use the one-click Unsubscribe header, and filter the stragglers straight to trash.',
    publishedAt: '2025-02-03',
    paragraphs: [
      "The average professional receives forty newsletters a week and reads three. The rest are clutter you tolerate because unsubscribing feels like work. It doesn't have to be.",
      'The fast method: search your mail for the word "unsubscribe" and sort the senders by volume. Work down the list from the noisiest sender. Most legitimate newsletters honor the one-click unsubscribe header, which your mail client exposes as an Unsubscribe button right next to the sender name — no landing pages, no "tell us why you\'re leaving" surveys.',
      "For the stragglers that make you log in to leave, don't bother: create a filter that sends them straight to trash instead. The effect is identical and it takes five seconds.",
      'Do a pass like this once a quarter. Twenty minutes of ruthless unsubscribing typically cuts inbox volume by a third, and it compounds — every list you leave is hundreds of future emails that never arrive.',
    ],
    related: ['post-6', 'post-9'],
  },
  {
    slug: 'post-5',
    title: "Gmail Storage Full? Here's How to Free Up Space",
    description:
      'Gmail storage full? Find and clear your biggest space-hogging emails fast using the larger: search operator, attachment cleanup, and a few storage-saving habits.',
    publishedAt: '2025-02-10',
    paragraphs: [
      'When Gmail storage runs out, the fastest relief comes from finding your biggest offenders, not your oldest ones. Search "larger:25M" to surface attachments eating the most space, and "has:attachment larger:10M" to narrow that down to mail you probably forwarded once and never needed again.',
      "Google Photos and Drive share the same storage pool as Gmail, so check those too — a handful of old videos backed up at full resolution can outweigh years of email. Empty your Spam and Trash folders explicitly; both count against quota until they're cleared.",
      "Once you're under quota, stay there with a standing filter: anything over 20MB gets labeled for a monthly review instead of landing permanently in your primary inbox. Free tier limits catch up with everyone eventually — a once-a-month five-minute check keeps you from hitting the wall again.",
    ],
    related: ['post-7', 'post-8'],
  },
  {
    slug: 'post-6',
    title: 'The Best Email Cleanup Apps Compared',
    description:
      'Bulk unsubscribers, screeners, rules engines, and full-service cleaners compared — which type of email cleanup app actually fits your inbox, and what to check first.',
    publishedAt: '2025-02-17',
    paragraphs: [
      'Email cleanup tools all promise the same thing — a calm inbox — but they get there very differently, and the differences matter.',
      "Bulk unsubscribers scan your mail for subscriptions and offer one-click mass unsubscribe. They're the fastest win for newsletter overload, but they don't touch the backlog already sitting in your archive. Screeners take the opposite approach: new senders wait in a lobby until you approve them, which is transformative for cold-email volume but does nothing for storage.",
      'Rules engines automate what filters do, with friendlier interfaces — think "roll up everything from these 40 senders into one daily digest". And full-service cleaners crunch your entire history, surfacing the biggest senders and largest attachments so you can delete by the thousand.',
      'Before you pick one, check the privacy page: some free tools have historically funded themselves by selling anonymized inbox data. Prefer tools that charge money and state plainly that your mail is never used for anything else.',
    ],
    related: ['post-4', 'post-7'],
  },
  {
    slug: 'post-8',
    title: "Archive vs Delete: What's the Difference?",
    description:
      "Archive vs delete: what actually happens to a message in each case, and a simple rule of thumb for which one to use for every category of email you get.",
    publishedAt: '2025-02-24',
    paragraphs: [
      "Archive and delete both make a message disappear from your inbox, and that's where the similarity ends.",
      'Archiving removes the inbox label but keeps the message forever — searchable, restorable, and counted against your storage quota. Deleting moves it to Trash, where it survives thirty days before being permanently removed, quota and all.',
      "The rule of thumb: archive by default, delete by category. Any message you might conceivably search for — a conversation, a receipt, a decision — should be archived, because storage is cheap and your memory isn't. Reserve deletion for categories you know are worthless in bulk: promotions, notifications, social updates, and expired calendar noise.",
      "The one exception is storage pressure. When you're paying for space you don't need, deletion becomes an economic decision — start with the largest attachments and the oldest promotional mail.",
      "If you're ever unsure, archive. Nobody has ever regretted keeping a searchable copy; plenty of people have regretted an overeager empty-trash click.",
    ],
    related: ['post-7', 'post-1'],
  },
  {
    slug: 'post-9',
    title: 'Email Overload: Why Your Inbox Is Stressing You Out',
    description:
      'Why email overload causes real anxiety, and the four habits — filters, unsubscribing, bulk cleanup, and fixed check-in times — that declutter your inbox for good.',
    publishedAt: '2025-03-03',
    paragraphs: [
      "An overflowing inbox reads to your brain as an open loop — a pile of unmade decisions that never gets smaller no matter how many you close, because more arrive while you're working through the backlog. That's the mechanism behind email anxiety, and it doesn't resolve itself with willpower.",
      "It resolves with fewer decisions. Filters remove the sorting decision. Unsubscribing removes the \"do I want this\" decision for recurring senders. A bulk cleanup removes the backlog that makes the inbox feel unmanageable in the first place. Fixed check-in times remove the hundred small \"should I check now\" decisions that fragment a day.",
      'None of these fixes require more willpower than the others — they just attack a different source of the same overload. Most people need all four before the anxiety actually lifts, but even one or two make the inbox feel finite again instead of infinite.',
    ],
    related: ['post-1', 'post-11'],
  },
  {
    slug: 'post-10',
    title: 'How to Clean Up Your Outlook Inbox',
    description:
      'Clean up your Outlook inbox using Sweep, Clean Up Conversation, Focused Inbox, and auto-archive rules — the built-in tools most people never turn on.',
    publishedAt: '2025-03-10',
    paragraphs: [
      'Outlook has more built-in cleanup power than any other mail client — most people just never open the right menus.',
      'Start with Sweep. From any message, Sweep lets you delete everything from that sender, keep only the latest message, or auto-delete their mail after ten days. Applied to your top twenty noisy senders, Sweep alone can retire thousands of messages in minutes.',
      "Next, the Clean Up Conversation tool: it removes every message in a thread that's quoted inside a later reply, collapsing fifty-message chains into the handful that contain unique content.",
      'Then set your Focused Inbox honestly. Train it by moving misfiled mail for a week, and it becomes a reliable first-pass filter. Pair it with rules that route newsletters and notifications to folders that skip the inbox entirely.',
      "Finally, schedule auto-archive: anything older than six months moves to an archive folder automatically. Your searches still find everything; your inbox just stops being a museum.",
    ],
    related: ['post-7', 'post-2'],
  },
  {
    slug: 'post-11',
    title: 'Automatic Email Sorting: Set It and Forget It',
    description:
      'Automatic email sorting in four buckets — Now, Reading, Records, and Noise — with one rule per bucket so your inbox sorts itself without daily upkeep.',
    publishedAt: '2025-03-17',
    paragraphs: [
      'Manual email sorting is a job you can retire today. Every major mail client can route messages automatically by sender, subject, keywords, or list headers — the trick is designing the buckets before you build the rules.',
      "Four buckets cover almost everyone. Now: real humans writing to you directly — the only bucket that belongs in your inbox. Reading: newsletters and digests, batched for when you choose. Records: receipts, confirmations, statements — archived on arrival, searchable later. Noise: notifications and social updates, sent to a folder you check weekly or never.",
      "Build one rule per bucket, broadest match first, and let new mail train the edges: each time something lands in the wrong place, tighten the rule rather than moving the message. Within two weeks the misfiles stop.",
      "The payoff compounds quietly. Sorting five hundred weekly messages by hand costs about two hours; the rules do it in zero. That's a hundred hours a year returned for an evening of setup.",
    ],
    related: ['post-2', 'post-9'],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.related
    .map((slug) => getPost(slug))
    .filter((p): p is BlogPost => Boolean(p));
}
