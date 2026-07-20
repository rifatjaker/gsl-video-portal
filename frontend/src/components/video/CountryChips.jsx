import { Link } from 'react-router-dom'
import { COUNTRIES } from '../../data/mockVideos'

const SHORT = {
  Canada: 'CA',
  UK: 'UK',
  Australia: 'AU',
  USA: 'US',
  'New Zealand': 'NZ',
  Malaysia: 'MY',
  'South Korea': 'KR',
}

function buildTo(country, category, basePath) {
  const params = new URLSearchParams()
  if (category && category !== 'All') params.set('category', category)
  if (country && country !== 'All') params.set('country', country)
  const qs = params.toString()
  return qs ? `${basePath}?${qs}` : basePath
}

export default function CountryChips({
  active = 'All',
  category = 'All',
  basePath = '/videos',
}) {
  const items = ['All', ...COUNTRIES]

  return (
    <div>
      <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted">Country</p>
      <div className="flex flex-wrap gap-2">
        {items.map((country) => {
          const isActive = active === country
          return (
            <Link
              key={country}
              to={buildTo(country, category, basePath)}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                isActive
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md shadow-red-900/20'
                  : 'border border-line bg-white text-ink/70 hover:border-brand/40 hover:text-brand'
              }`}
            >
              {country !== 'All' && (
                <span
                  className={`rounded px-1 py-0.5 text-[9px] font-extrabold tracking-wide ${
                    isActive ? 'bg-white/20 text-white' : 'bg-soft2 text-brand'
                  }`}
                >
                  {SHORT[country] || country.slice(0, 2).toUpperCase()}
                </span>
              )}
              {country === 'All' ? 'All countries' : country}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
