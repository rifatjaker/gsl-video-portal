import { Link } from 'react-router-dom'
import { CalendarDays, MapPin } from 'lucide-react'
import { formatEventDate, formatEventTime } from '../../data/mockEvents'

export default function EventCard({ event }) {
  const day = new Date(event.eventDate).getDate()
  const month = new Date(event.eventDate).toLocaleDateString('en-GB', { month: 'short' })

  return (
    <Link
      to={`/events/${event.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-soft2">
        <img
          src={event.cover}
          alt=""
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute left-3 top-3 overflow-hidden rounded-xl bg-white text-center shadow-md">
          <div className="bg-red-600 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
            {month}
          </div>
          <div className="px-3 py-1.5 font-display text-xl font-bold leading-none text-ink">{day}</div>
        </div>
        <span className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand shadow-sm">
          {event.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 font-display text-[17px] font-semibold leading-snug text-ink group-hover:text-brand">
          {event.title}
        </h3>
        {(event.countries || []).length > 0 && (
          <div className="mt-1.5 flex flex-wrap items-center gap-1">
            {(event.countries || []).slice(0, 2).map((c) => (
              <span
                key={c}
                className="rounded-full bg-soft2 px-2 py-0.5 text-[10px] font-bold text-ink/70"
              >
                {c}
              </span>
            ))}
            {(event.countries || []).length > 2 && (
              <span className="text-[10px] font-bold text-muted">
                +{event.countries.length - 2}
              </span>
            )}
          </div>
        )}
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted">{event.summary}</p>
        <div className="mt-3 space-y-1.5 text-xs text-muted">
          <p className="flex items-center gap-1.5">
            <CalendarDays size={13} className="text-brand" />
            {formatEventDate(event.eventDate)} · {formatEventTime(event.startTime, event.endTime)}
          </p>
          <p className="flex items-center gap-1.5">
            <MapPin size={13} className="text-brand" />
            <span className="truncate">
              {event.venue}, {event.city}
            </span>
          </p>
        </div>
      </div>
    </Link>
  )
}
