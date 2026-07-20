import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Film, Search } from 'lucide-react'
import VideoCard from '../components/video/VideoCard'
import CategoryChips from '../components/video/CategoryChips'
import CountryChips from '../components/video/CountryChips'
import SearchBar from '../components/video/SearchBar'
import Pagination from '../components/video/Pagination'
import { filterVideos } from '../data/mockVideos'

const PER_PAGE = 6

export default function Videos() {
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
    () => filterVideos({ query, category, country }),
    [query, category, country],
  )

  const totalPages = Math.max(1, Math.ceil(results.length / PER_PAGE))
  const pageVideos = results.slice((page - 1) * PER_PAGE, page * PER_PAGE)

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
          <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-light shadow-lg shadow-brand/30">
            <Film size={26} className="text-white" />
            <span className="absolute -right-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-md">
              <Search size={13} className="text-white" />
            </span>
          </span>
          <div>
            <h1 className="bg-gradient-to-r from-brand-dark via-brand to-red-500 bg-clip-text font-display text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              Videos
            </h1>
            <p className="mt-1 text-sm font-medium text-muted">
              Search and filter by category &amp; country
            </p>
          </div>
        </div>
        <span className="hidden h-1.5 min-w-24 flex-1 rounded-full bg-gradient-to-r from-brand/40 via-brand-light/30 to-transparent sm:block" />
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SearchBar value={query} onChange={setQuery} className="w-full max-w-md" />
        <p className="text-sm text-muted">
          {results.length} result{results.length === 1 ? '' : 's'}
          {filterLabel ? ` in ${filterLabel}` : ''}
          {results.length > 0 ? ` · page ${page} of ${totalPages}` : ''}
        </p>
      </div>

      <div className="mb-5">
        <CountryChips active={country} category={category} />
      </div>

      <div className="mb-8">
        <CategoryChips active={category} country={country} />
      </div>

      {results.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-line bg-white px-6 py-16 text-center">
          <p className="font-display text-xl font-semibold text-ink">No videos found</p>
          <p className="mt-2 text-sm text-muted">
            Try another country, category, or clear the filters.
          </p>
        </div>
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pageVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
          <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </>
      )}
    </div>
  )
}
