import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { BookOpen, Search } from 'lucide-react'
import NewsCard from '../components/news/NewsCard'
import CountryChips from '../components/video/CountryChips'
import Pagination from '../components/video/Pagination'
import { NEWS_CATEGORIES, filterArticles } from '../data/mockNews'

const PER_PAGE = 3

function categoryTo(cat, country) {
  const params = new URLSearchParams()
  if (cat && cat !== 'All') params.set('category', cat)
  if (country && country !== 'All') params.set('country', country)
  const qs = params.toString()
  return qs ? `/news?${qs}` : '/news'
}

export default function News() {
  const [params] = useSearchParams()
  const category = params.get('category') || 'All'
  const country = params.get('country') || 'All'
  const urlQuery = params.get('q') || ''
  const [query, setQuery] = useState(urlQuery)
  const [page, setPage] = useState(1)

  useEffect(() => {
    setQuery(urlQuery)
  }, [urlQuery])

  useEffect(() => {
    setPage(1)
  }, [query, category, country])

  const results = useMemo(
    () => filterArticles({ query, category, country }),
    [query, category, country],
  )

  const totalPages = Math.max(1, Math.ceil(results.length / PER_PAGE))
  const pageArticles = results.slice((page - 1) * PER_PAGE, page * PER_PAGE)
  const chips = ['All', ...NEWS_CATEGORIES]

  const filterLabel = [
    category !== 'All' ? category : null,
    country !== 'All' ? country : null,
  ]
    .filter(Boolean)
    .join(' · ')

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-dark to-brand shadow-lg shadow-brand/30">
            <BookOpen size={26} className="text-white" />
            <span className="absolute -right-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-md">
              <Search size={13} className="text-white" />
            </span>
          </span>
          <div>
            <h1 className="bg-gradient-to-r from-brand-dark via-brand to-red-500 bg-clip-text font-display text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              News Articles
            </h1>
            <p className="mt-1 text-sm font-medium text-muted">
              Filter by country, category &amp; keyword
            </p>
          </div>
        </div>
        <span className="hidden h-1.5 min-w-24 flex-1 rounded-full bg-gradient-to-r from-brand/40 via-brand-light/30 to-transparent sm:block" />
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="relative block w-full max-w-md">
          <span className="sr-only">Search articles</span>
          <Search
            size={16}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles…"
            className="w-full rounded-xl border border-line bg-white py-2.5 pl-10 pr-4 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </label>
        <p className="text-sm text-muted">
          {results.length} article{results.length === 1 ? '' : 's'}
          {filterLabel ? ` in ${filterLabel}` : ''}
          {results.length > 0 ? ` · page ${page} of ${totalPages}` : ''}
        </p>
      </div>

      <div className="mb-5">
        <CountryChips active={country} category={category} basePath="/news" />
      </div>

      <div className="mb-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted">Category</p>
        <div className="flex flex-wrap gap-2">
          {chips.map((cat) => {
            const isActive = category === cat
            return (
              <Link
                key={cat}
                to={categoryTo(cat, country)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                  isActive
                    ? 'bg-gradient-to-r from-brand to-brand-light text-white shadow-md shadow-brand/30'
                    : 'border border-line bg-white text-ink/70 hover:border-brand/40 hover:text-brand'
                }`}
              >
                {cat}
              </Link>
            )
          })}
        </div>
      </div>

      {results.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-line bg-white px-6 py-16 text-center">
          <p className="font-display text-xl font-semibold text-ink">No articles found</p>
          <p className="mt-2 text-sm text-muted">
            Try another country, category, or clear the filters.
          </p>
        </div>
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pageArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
          <Pagination
            page={page}
            totalPages={totalPages}
            onChange={(n) => {
              setPage(n)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          />
        </>
      )}
    </div>
  )
}
