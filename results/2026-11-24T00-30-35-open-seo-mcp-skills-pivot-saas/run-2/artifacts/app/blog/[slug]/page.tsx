import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { posts, getPost } from '../posts';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

function renderBlock(block: string, index: number) {
  if (block.startsWith('## ')) {
    return <h2 key={index}>{block.slice(3)}</h2>;
  }
  if (/^\d+\.\s/.test(block)) {
    const items = block.split('\n');
    return (
      <ol key={index}>
        {items.map((item, i) => (
          <li key={i}>{item.replace(/^\d+\.\s/, '')}</li>
        ))}
      </ol>
    );
  }
  return <p key={index}>{block}</p>;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'Lumina' },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article>
        <h1>{post.title}</h1>
        <p className="post-date">{post.date}</p>
        {post.content.map(renderBlock)}
      </article>
      <p>
        <a href="/pricing">Try Lumina free</a>
      </p>
    </main>
  );
}
