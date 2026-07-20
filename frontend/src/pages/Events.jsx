import { useMemo, useState } from 'react'
import { CalendarRange } from 'lucide-react'
import EventCard from '../components/events/EventCard'
import { EVENT_CATEGORIES, filterEvents } from '../data/mockEvents'

const MONTH_FILTERS = ['Upcoming', 'This month', 'Next month', 'All']

export default function Events() {
  const [category, setCategory] = useState('All')
  const [month, setMonth] = useState('Upcoming')

  const results = useMemo(
    () => filterEvents({ category, month }),
    [category, month],
  )

  const categoryChips = ['All', ...EVENT_CATEGORIES]

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-dark to-brand shadow-lg shadow-brand/30">
            <CalendarRange size={26} className="text-white" />
            <span className="absolute -right-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-md text-[10px] font-bold text-white">
              Fair
            </span>
          </span>
          <div>
            <h1 className="bg-gradient-to-r from-brand-dark via-brand to-red-500 bg-clip-text font-display text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              Events &amp; Fairs
            </h1>
            <p className="mt-1 text-sm font-medium text-muted">
              Education fairs, open days, webinars &amp; counselling camps
            </p>
          </div>
        </div>
        <span className="hidden h-1.5 min-w-24 flex-1 rounded-full bg-gradient-to-r from-brand/40 via-brand-light/30 to-transparent sm:block" />
      </div>

      <div className="mb-4">
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted">When</p>
        <div className="flex flex-wrap gap-2">
          {MONTH_FILTERS.map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMonth(m)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                month === m
                  ? 'bg-gradient-to-r from-brand to-brand-light text-white shadow-md shadow-brand/30'
                  : 'border border-line bg-white text-ink/70 hover:border-brand/40 hover:text-brand'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted">Type</p>
        <div className="flex flex-wrap gap-2">
          {categoryChips.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                category === cat
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md shadow-red-900/20'
                  : 'border border-line bg-white text-ink/70 hover:border-brand/40 hover:text-brand'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-5 text-sm text-muted">
        {results.length} event{results.length === 1 ? '' : 's'}
      </p>

      {results.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-line bg-white px-6 py-16 text-center">
          <p className="font-display text-xl font-semibold text-ink">No events found</p>
          <p className="mt-2 text-sm text-muted">Try another month or event type filter.</p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  )
}
