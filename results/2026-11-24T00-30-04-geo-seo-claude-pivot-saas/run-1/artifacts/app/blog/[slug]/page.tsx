import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { posts, getPost } from '../posts';

const BASE = 'https://lumina.example';

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} — InboxZap`,
    description: post.description,
    alternates: { canonical: `${BASE}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${BASE}/blog/${post.slug}`,
      type: 'article',
      images: ['/img/og-inboxzap.png'],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const otherPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    mainEntityOfPage: `${BASE}/blog/${post.slug}`,
    author: { '@type': 'Organization', name: 'InboxZap' },
    publisher: { '@type': 'Organization', name: 'InboxZap' },
  };

  return (
    <main>
      <article>
        <h1>{post.title}</h1>
        {post.paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </article>

      <aside>
        <h2>Keep reading</h2>
        <ul>
          {otherPosts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
      </aside>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
