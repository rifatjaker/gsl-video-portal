import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CATEGORIES } from '../../data/mockVideos'

function buildTo(cat, country, basePath) {
  const params = new URLSearchParams()
  if (cat && cat !== 'All') params.set('category', cat)
  if (country && country !== 'All') params.set('country', country)
  const qs = params.toString()
  return qs ? `${basePath}?${qs}` : basePath
}

export default function CategoryChips({
  active = 'All',
  country = 'All',
  basePath = '/videos',
}) {
  const items = ['All', ...CATEGORIES]
  const trackRef = useRef(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(false)

  const updateArrows = () => {
    const el = trackRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 4)
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }

  useEffect(() => {
    updateArrows()
    window.addEventListener('resize', updateArrows)
    return () => window.removeEventListener('resize', updateArrows)
  }, [])

  const slide = (dir) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.7), behavior: 'smooth' })
  }

  return (
    <div>
      <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted">Category</p>
      <div className="relative">
        <button
          type="button"
          aria-label="Scroll categories left"
          onClick={() => slide(-1)}
          className={`absolute -left-2 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-line bg-white text-ink shadow-md shadow-ink/10 transition-all duration-200 hover:border-brand hover:text-brand ${
            canLeft ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <ChevronLeft size={18} />
        </button>

        {canLeft && (
          <span className="pointer-events-none absolute inset-y-0 left-6 z-[5] w-10 bg-gradient-to-r from-white/90 to-transparent" />
        )}
        {canRight && (
          <span className="pointer-events-none absolute inset-y-0 right-6 z-[5] w-10 bg-gradient-to-l from-white/90 to-transparent" />
        )}

        <div
          ref={trackRef}
          onScroll={updateArrows}
          className="no-scrollbar flex gap-2 overflow-x-auto scroll-smooth px-8 py-1"
        >
          {items.map((cat) => {
            const isActive = active === cat
            return (
              <Link
                key={cat}
                to={buildTo(cat, country, basePath)}
                className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition ${
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

        <button
          type="button"
          aria-label="Scroll categories right"
          onClick={() => slide(1)}
          className={`absolute -right-2 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-line bg-white text-ink shadow-md shadow-ink/10 transition-all duration-200 hover:border-brand hover:text-brand ${
            canRight ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}
