import { Link, useParams } from 'react-router-dom'
import NewsCard from '../components/news/NewsCard'
import { formatDate } from '../data/mockVideos'
import { getArticleById, getLatestArticles } from '../data/mockNews'

export default function NewsDetail() {
  const { id } = useParams()
  const article = getArticleById(id)

  if (!article) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="font-display text-2xl font-semibold text-ink">Article not found</h1>
        <Link to="/news" className="mt-4 inline-block text-sm font-semibold text-brand hover:underline">
          ← Back to news
        </Link>
      </div>
    )
  }

  const related = getLatestArticles(8)
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3)

  const fallbackRelated =
    related.length > 0
      ? related
      : getLatestArticles(4).filter((a) => a.id !== article.id).slice(0, 3)

  const paragraphs = article.content
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean)

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <Link to="/news" className="text-sm font-semibold text-brand hover:underline">
        ← All news
      </Link>

      <article className="mt-5 overflow-hidden rounded-2xl border border-line bg-white shadow-lg shadow-ink/5">
        <div className="aspect-[21/9] overflow-hidden bg-soft2 sm:aspect-[2.4/1]">
          <img src={article.cover} alt="" className="h-full w-full object-cover" />
        </div>

        <div className="mx-auto max-w-3xl px-5 py-8 sm:px-10 sm:py-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand">
            {article.category}
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            {article.title}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
            <span>{article.author}</span>
            <span aria-hidden>·</span>
            <span>{article.agency}</span>
            <span aria-hidden>·</span>
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
          </div>
          <p className="mt-5 text-base font-medium leading-relaxed text-ink/80">{article.summary}</p>

          <div className="prose-news mt-8 space-y-4 text-[15px] leading-relaxed text-ink/90">
            {paragraphs.map((block) =>
              block.startsWith('•') || block.startsWith('Key takeaways') ? (
                <div key={block.slice(0, 40)} className="rounded-xl bg-soft2 px-4 py-3">
                  {block.split('\n').map((line) => (
                    <p key={line} className="py-0.5">
                      {line}
                    </p>
                  ))}
                </div>
              ) : (
                <p key={block.slice(0, 40)}>{block}</p>
              ),
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-2 border-t border-line pt-6">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-soft px-3 py-1 text-xs font-semibold text-muted"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {fallbackRelated.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-5 font-display text-2xl font-semibold text-ink">Related articles</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {fallbackRelated.map((a) => (
              <NewsCard key={a.id} article={a} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
