import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPost, posts, type Section } from '../../../lib/posts';

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
      type: 'article',
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
    },
  };
}

function renderSection(section: Section, i: number) {
  switch (section.type) {
    case 'p':
      return <p key={i}>{section.text}</p>;
    case 'h2':
      return <h2 key={i}>{section.text}</h2>;
    case 'ul':
      return (
        <ul key={i}>
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol key={i}>
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
    case 'table':
      return (
        <table key={i}>
          <thead>
            <tr>
              {section.headers.map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row) => (
              <tr key={row.join('|')}>
                {row.map((cell, ci) => (
                  <td key={ci}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    default:
      return null;
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <main>
      <article>
        <h1>{post.title}</h1>
        <p className="meta">
          Published {post.publishedAt}
          {post.updatedAt !== post.publishedAt ? ` · Updated ${post.updatedAt}` : ''}
        </p>
        {post.sections.map((s, i) => renderSection(s, i))}

        {post.faq ? (
          <section className="faq">
            <h2>FAQ</h2>
            {post.faq.map((item) => (
              <div key={item.q} className="faq-item">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </section>
        ) : null}
      </article>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.description,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt,
            author: { '@type': 'Organization', name: 'Lumina' },
            publisher: { '@type': 'Organization', name: 'Lumina' },
          }),
        }}
      />
      {post.faq ? (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: post.faq.map((item) => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: { '@type': 'Answer', text: item.a },
              })),
            }),
          }}
        />
      ) : null}
    </main>
  );
}
