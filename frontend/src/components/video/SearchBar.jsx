import { useEffect, useId, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Film, Hash, LayoutGrid, Search } from 'lucide-react'
import { getSearchSuggestions } from '../../data/mockVideos'

const TYPE_ICON = {
  video: Film,
  category: LayoutGrid,
  tag: Hash,
}

export default function SearchBar({
  value,
  onChange,
  placeholder = 'Search videos…',
  variant = 'default',
  onSubmit,
  autoNavigate = true,
  className = '',
  inputClassName = '',
}) {
  const navigate = useNavigate()
  const listId = useId()
  const rootRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(-1)

  const suggestions = getSearchSuggestions(value, 8)
  const showList = open && value.trim().length > 0 && suggestions.length > 0

  useEffect(() => {
    setActive(-1)
  }, [value])

  useEffect(() => {
    const onDocClick = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  const goSuggestion = (item) => {
    setOpen(false)
    if (item.type === 'video') {
      onChange(item.label)
      if (autoNavigate) navigate(`/videos/${item.id}`)
      return
    }
    if (item.type === 'category') {
      onChange('')
      if (autoNavigate) navigate(`/videos?category=${encodeURIComponent(item.label)}`)
      return
    }
    onChange(item.label)
    if (autoNavigate) navigate(`/videos?q=${encodeURIComponent(item.label)}`)
  }

  const submit = (e) => {
    e?.preventDefault?.()
    setOpen(false)
    if (active >= 0 && suggestions[active]) {
      goSuggestion(suggestions[active])
      return
    }
    if (onSubmit) {
      onSubmit(value)
      return
    }
    if (autoNavigate) {
      const q = value.trim()
      navigate(q ? `/videos?q=${encodeURIComponent(q)}` : '/videos')
    }
  }

  const onKeyDown = (e) => {
    if (!showList) {
      if (e.key === 'Enter') submit(e)
      return
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((i) => (i + 1) % suggestions.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((i) => (i <= 0 ? suggestions.length - 1 : i - 1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      submit(e)
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  const isNav = variant === 'nav'
  const isNavWide = variant === 'nav-wide'

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <label className="relative block w-full">
        <span className="sr-only">Search</span>
        <Search
          size={isNav ? 15 : 16}
          className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-muted ${
            isNav || isNavWide ? 'left-3' : 'left-3.5'
          }`}
        />
        <input
          type="search"
          role="combobox"
          aria-expanded={showList}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={active >= 0 ? `${listId}-opt-${active}` : undefined}
          value={value}
          onChange={(e) => {
            onChange(e.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          autoComplete="off"
          className={
            inputClassName ||
            (isNav
              ? 'w-36 rounded-full border border-line bg-soft py-2 pl-9 pr-3 text-sm outline-none transition-all duration-300 placeholder:text-muted/70 focus:w-56 focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20'
              : isNavWide
                ? 'w-full rounded-xl border border-line bg-soft py-2.5 pl-10 pr-4 text-sm outline-none focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20'
                : 'w-full rounded-xl border border-line bg-white py-2.5 pl-10 pr-4 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-brand focus:ring-2 focus:ring-brand/20')
          }
        />
      </label>

      {showList && (
        <ul
          id={listId}
          role="listbox"
          className={`absolute z-50 mt-2 max-h-80 w-full overflow-auto rounded-2xl border border-line bg-white py-2 shadow-xl shadow-ink/10 ${
            isNav ? 'right-0 min-w-[20rem]' : ''
          }`}
        >
          {suggestions.map((item, index) => {
            const Icon = TYPE_ICON[item.type] || Search
            const isActive = index === active
            return (
              <li key={`${item.type}-${item.id}`} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  id={`${listId}-opt-${index}`}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => goSuggestion(item)}
                  className={`flex w-full items-center gap-3 px-3 py-2.5 text-left transition ${
                    isActive ? 'bg-soft2' : 'hover:bg-soft'
                  }`}
                >
                  {item.type === 'video' && item.thumbnail ? (
                    <img
                      src={item.thumbnail}
                      alt=""
                      className="h-10 w-14 shrink-0 rounded-lg object-cover"
                    />
                  ) : (
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-soft2 text-brand">
                      <Icon size={16} />
                    </span>
                  )}
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-ink">{item.label}</span>
                    <span className="block text-[11px] font-medium uppercase tracking-wide text-muted">
                      {item.meta}
                    </span>
                  </span>
                </button>
              </li>
            )
          })}
          <li className="border-t border-line px-3 pt-2">
            <button
              type="button"
              onClick={submit}
              className="w-full rounded-xl px-2 py-2 text-left text-xs font-bold text-brand hover:bg-soft2"
            >
              Search all for “{value.trim()}”
            </button>
          </li>
        </ul>
      )}
    </div>
  )
}
