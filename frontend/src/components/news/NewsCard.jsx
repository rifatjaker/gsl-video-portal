import { Link } from 'react-router-dom'
import { formatDate } from '../../data/mockVideos'

export default function NewsCard({ article }) {
  return (
    <Link
      to={`/news/${article.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-soft2">
        <img
          src={article.cover}
          alt=""
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand shadow-sm">
          Article
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand">
          {article.category}
        </p>
        {(article.countries || []).length > 0 && (
          <div className="mt-1.5 flex flex-wrap items-center gap-1">
            {(article.countries || []).slice(0, 2).map((c) => (
              <span
                key={c}
                className="rounded-full bg-soft2 px-2 py-0.5 text-[10px] font-bold text-ink/70"
              >
                {c}
              </span>
            ))}
            {(article.countries || []).length > 2 && (
              <span className="text-[10px] font-bold text-muted">
                +{article.countries.length - 2}
              </span>
            )}
          </div>
        )}
        <h3 className="mt-1.5 line-clamp-2 font-display text-[17px] font-semibold leading-snug text-ink group-hover:text-brand">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted">{article.summary}</p>
        <div className="mt-3 flex items-center justify-between gap-2 text-xs text-muted">
          <span className="truncate">{article.agency}</span>
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
        </div>
      </div>
    </Link>
  )
}
