import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { blogPosts } from '../data/blog'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-neutral-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-neutral-900">{question}</span>
        <svg
          className={`h-5 w-5 shrink-0 text-indigo-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <p className="pb-5 text-base leading-relaxed text-neutral-600">{answer}</p>
      )}
    </div>
  )
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  const articleSchema = post
    ? JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        author: {
          '@type': 'Person',
          name: post.author,
          affiliation: { '@type': 'Organization', name: 'TnT Studio' },
        },
        publisher: {
          '@type': 'Organization',
          name: 'TnT Studio',
          url: 'https://tnt-studio.de/',
        },
        datePublished: post.date,
        dateModified: post.date,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://tnt-studio.de/blog/${post.slug}/`,
        },
      })
    : null

  const faqSchema = post?.faqs?.length
    ? JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      })
    : null

  const breadcrumbSchema = post
    ? JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://tnt-studio.de/' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://tnt-studio.de/blog/' },
          { '@type': 'ListItem', position: 3, name: post.title, item: `https://tnt-studio.de/blog/${post.slug}/` },
        ],
      })
    : null

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-neutral-900">404</h1>
          <p className="mt-4 text-neutral-500">Beitrag nicht gefunden.</p>
          <Link to="/blog/" className="mt-6 inline-block rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white">
            Zum Blog
          </Link>
        </div>
      </div>
    )
  }

  const related = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3)
  const fallbackRelated = blogPosts.filter((p) => p.slug !== slug && !related.includes(p)).slice(0, 3 - related.length)
  const allRelated = [...related, ...fallbackRelated]
  const canonical = `https://tnt-studio.de/blog/${post.slug}/`

  return (
    <div className="pt-32 pb-24">
      <Helmet>
        <title>{`${post.title} — TnT Studio Blog`}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={`${post.title} — TnT Studio Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta name="twitter:title" content={`${post.title} — TnT Studio Blog`} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta property="og:image" content="https://tnt-studio.de/og-image.webp" />
        <meta name="twitter:image" content="https://tnt-studio.de/og-image.webp" />
      </Helmet>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: articleSchema }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqSchema }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
        />
      )}
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Link to="/blog/" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Alle Beiträge
        </Link>

        <div className="mb-6 flex items-center gap-3">
          <span className="text-4xl">{post.emoji}</span>
          <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
            {post.category}
          </span>
        </div>

        <h1 className="text-balance text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl">
          {post.title}
        </h1>

        <div className="mt-6 flex items-center gap-4 text-sm text-neutral-400">
          <span className="font-medium text-neutral-700">{post.author}</span>
          <span>·</span>
          <span>{new Date(post.date).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          <span>·</span>
          <span>{post.readingTime} Lesezeit</span>
        </div>

        <p className="mt-8 text-xl leading-relaxed text-neutral-600 border-l-4 border-indigo-500 pl-6 italic">
          {post.excerpt}
        </p>

        <article className="mt-12 space-y-12">
          {post.sections.map((section, i) => (
            <div key={i}>
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-neutral-900">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, j) => (
                <p key={j} className="mb-4 text-base leading-relaxed text-neutral-600">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="mt-4 space-y-3">
                  {section.list.map((item, k) => (
                    <li key={k} className="flex items-start gap-3 text-base text-neutral-600">
                      <svg className="mt-1 h-5 w-5 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </article>

        {/* FAQs */}
        {post.faqs && post.faqs.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-neutral-900">
              Häufige Fragen
            </h2>
            <p className="mb-6 text-sm text-neutral-500">
              Antworten auf die wichtigsten Fragen zu diesem Thema.
            </p>
            <div className="rounded-2xl border border-neutral-200 bg-white px-6">
              {post.faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </section>
        )}

        {/* Author box */}
        <div className="mt-16 flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-900 text-lg font-bold text-white">
            {post.author.split(' ').map((n) => n[0]).join('')}
          </div>
          <div>
            <p className="font-bold text-neutral-900">{post.author}</p>
            <p className="text-sm text-neutral-500">
              {post.author === 'Tiago Esteves'
                ? 'Founder & CEO'
                : post.author === 'Theo Spingys'
                  ? 'Co-Founder & Marketing Lead'
                  : 'TnT Studio'} · Medienagentur · Wuppertal
            </p>
          </div>
        </div>

        {/* Related posts */}
        {allRelated.length > 0 && (
          <div className="mt-16">
            <h3 className="mb-6 text-xl font-bold text-neutral-900">Weiterlesen</h3>
            <div className="grid gap-6 sm:grid-cols-3">
              {allRelated.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}/`}
                  className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:shadow-lg"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-2xl">{r.emoji}</span>
                    <span className="text-xs font-semibold text-neutral-500">{r.category}</span>
                  </div>
                  <h4 className="text-base font-bold text-neutral-900 group-hover:text-indigo-600 transition-colors">
                    {r.title}
                  </h4>
                  <p className="mt-2 text-sm text-neutral-500">{r.readingTime} Lesezeit</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
