import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null

  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        aria-label="Previous page"
        className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-white text-ink transition enabled:hover:border-brand enabled:hover:text-brand disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft size={18} />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          aria-label={`Page ${n}`}
          aria-current={page === n ? 'page' : undefined}
          className={`h-10 min-w-10 rounded-xl px-3 text-sm font-bold transition ${
            page === n
              ? 'bg-gradient-to-r from-brand to-brand-light text-white shadow-md shadow-brand/30'
              : 'border border-line bg-white text-ink/70 hover:border-brand hover:text-brand'
          }`}
        >
          {n}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        aria-label="Next page"
        className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-white text-ink transition enabled:hover:border-brand enabled:hover:text-brand disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  )
}
