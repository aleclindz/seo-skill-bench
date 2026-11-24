import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPost, posts } from '../../../lib/posts';
import { OG_IMAGE, SITE_URL } from '../../../lib/site';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: `${post.title} — Lumina Blog`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      images: [OG_IMAGE],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [OG_IMAGE],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <main>
      <article>
        <h1>{post.title}</h1>
        {post.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </article>

      {post.legacy && (
        <aside className="pivot-note">
          <p>
            This article is from when Lumina was InboxZap, an email-cleanup tool. We&apos;ve
            since turned our focus to meeting overload —{' '}
            <Link href="/">see how Lumina&apos;s AI meeting assistant</Link> saves teams
            hours every week.
          </p>
        </aside>
      )}

      <p>
        <Link href="/blog">&larr; Back to the blog</Link>
      </p>
    </main>
  );
}
