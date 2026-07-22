import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'

export default function BlogTeaser() {
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3)

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold tracking-widest text-indigo-600 uppercase">Blog</p>
            <h2 className="text-balance text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl">
              Wissen, das wir teilen.
            </h2>
            <p className="mt-4 max-w-md text-sm text-neutral-500">
              Insights zu Web Design, Social Media, SEO, Content Creation und AI-Suchmaschinen — aus der Praxis einer Medienagentur in Wuppertal.
            </p>
          </div>
          <Link
            to="/blog/"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition-all hover:border-neutral-900 hover:bg-neutral-50"
          >
            Alle Beiträge
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}/`}
              className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-8 transition-all hover:shadow-xl hover:border-neutral-900"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-3xl">{post.emoji}</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-600">
                  {post.category}
                </span>
              </div>
              <h3 className="mb-3 text-lg font-bold tracking-tight text-neutral-900 group-hover:text-indigo-600 transition-colors">
                {post.title}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-neutral-500">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span className="font-medium text-neutral-700">{post.author}</span>
                <span>{post.readingTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
