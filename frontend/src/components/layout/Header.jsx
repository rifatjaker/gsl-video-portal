import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {
  Home,
  PlaySquare,
  GraduationCap,
  Stamp,
  Newspaper,
  Menu,
  X,
} from 'lucide-react'
import SearchBar from '../video/SearchBar'

const NAV_ITEMS = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/videos', label: 'Videos', icon: PlaySquare },
  { to: '/videos?category=Scholarship%20Updates', label: 'Scholarships', icon: GraduationCap },
  { to: '/videos?category=Visa%20News', label: 'Visa News', icon: Stamp },
  { to: '/videos?category=University%20News', label: 'University', icon: Newspaper },
]

const linkClass = (isActive) =>
  `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
    isActive
      ? 'bg-gradient-to-r from-brand to-brand-light text-white shadow-md shadow-brand/30'
      : 'text-ink/70 hover:bg-soft2 hover:text-brand'
  }`

export default function Header() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const isItemActive = (to) => {
    const [path, search = ''] = to.split('?')
    if (location.pathname !== path) return false
    const currentCategory = new URLSearchParams(location.search).get('category')
    const itemCategory = new URLSearchParams(search).get('category')
    return currentCategory === itemCategory
  }

  const finishSearch = (q = query) => {
    const trimmed = q.trim()
    navigate(trimmed ? `/videos?q=${encodeURIComponent(trimmed)}` : '/videos')
    setQuery('')
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-40">
      <div className="h-1 bg-gradient-to-r from-brand-dark via-brand-light to-red-500" />

      <div className="border-b border-line/80 bg-white/85 shadow-sm shadow-ink/5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link to="/" className="group flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
            <span className="relative">
              <img
                src={`${import.meta.env.BASE_URL}gsl.png`}
                alt="Global Study logo"
                className="h-11 w-11 rounded-xl object-contain transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105"
              />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-gradient-to-br from-brand to-red-500" />
            </span>
            <span className="leading-tight">
              <span className="block bg-gradient-to-r from-brand-dark via-brand to-red-500 bg-clip-text font-display text-lg font-bold tracking-tight text-transparent">
                Global Study
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-muted">
                Video News Portal
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
              <Link key={to} to={to} className={linkClass(isItemActive(to))}>
                <Icon size={16} strokeWidth={2.4} />
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder="Search…"
              variant="nav"
              onSubmit={finishSearch}
            />
          </div>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-white text-ink transition hover:border-brand/40 hover:text-brand lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <nav className="border-t border-line bg-white px-4 pb-5 pt-3 lg:hidden">
            <div className="mb-3">
              <SearchBar
                value={query}
                onChange={setQuery}
                placeholder="Search videos…"
                variant="nav-wide"
                onSubmit={finishSearch}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  className={linkClass(isItemActive(to))}
                  onClick={() => setOpen(false)}
                >
                  <Icon size={17} strokeWidth={2.4} />
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
