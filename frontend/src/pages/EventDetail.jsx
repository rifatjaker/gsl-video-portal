import { Link, useParams } from 'react-router-dom'
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Clock3,
  MapPin,
  MessageSquareHeart,
  Ticket,
} from 'lucide-react'
import EventCard from '../components/events/EventCard'
import {
  formatEventDate,
  formatEventTime,
  getEventById,
  getUpcomingEvents,
} from '../data/mockEvents'

export default function EventDetail() {
  const { id } = useParams()
  const event = getEventById(id)

  if (!event) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="font-display text-2xl font-semibold text-ink">Event not found</h1>
        <Link to="/events" className="mt-4 inline-block text-sm font-semibold text-brand hover:underline">
          ← Back to events
        </Link>
      </div>
    )
  }

  const related = getUpcomingEvents(6)
    .filter((e) => e.id !== event.id)
    .slice(0, 3)

  const paragraphs = event.description
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean)

  const inquiryUrl = `/inquiry?event=${encodeURIComponent(event.id)}&title=${encodeURIComponent(event.title)}`

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <Link to="/events" className="text-sm font-semibold text-brand hover:underline">
        ← All events
      </Link>

      <div className="mt-5 overflow-hidden rounded-2xl border border-line bg-white shadow-lg shadow-ink/5">
        <div className="aspect-[21/9] overflow-hidden bg-soft2 sm:aspect-[2.4/1]">
          <img src={event.cover} alt="" className="h-full w-full object-cover" />
        </div>

        <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand">
              {event.category}
            </p>
            <h1 className="mt-2 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              {event.title}
            </h1>
            <p className="mt-4 text-base font-medium leading-relaxed text-ink/80">{event.summary}</p>

            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink/90">
              {paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="font-display text-xl font-semibold text-ink">Participating universities</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {event.universities.map((u) => (
                  <span
                    key={u}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-soft px-3 py-1.5 text-xs font-semibold text-ink/80"
                  >
                    <Building2 size={13} className="text-brand" />
                    {u}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-2">
            <div className="sticky top-24 rounded-2xl border border-line bg-soft2/80 p-5">
              <h2 className="font-display text-lg font-semibold text-ink">Event details</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink/85">
                <li className="flex gap-3">
                  <CalendarDays size={18} className="mt-0.5 shrink-0 text-brand" />
                  <span>{formatEventDate(event.eventDate)}</span>
                </li>
                <li className="flex gap-3">
                  <Clock3 size={18} className="mt-0.5 shrink-0 text-brand" />
                  <span>{formatEventTime(event.startTime, event.endTime)}</span>
                </li>
                <li className="flex gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-brand" />
                  <span>
                    {event.venue}
                    <br />
                    {event.address}
                    <br />
                    {event.city}, {event.country}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Ticket size={18} className="mt-0.5 shrink-0 text-brand" />
                  <span>{event.seats}</span>
                </li>
              </ul>

              <Link
                to={inquiryUrl}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-red-900/25 transition hover:-translate-y-0.5"
              >
                <MessageSquareHeart size={16} />
                Register / Book a seat
                <ArrowRight size={15} />
              </Link>
              <p className="mt-3 text-center text-xs text-muted">
                Opens Student Inquiry with this event pre-filled
              </p>
            </div>
          </aside>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-5 font-display text-2xl font-semibold text-ink">More upcoming events</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
