import { useSearchParams } from 'react-router-dom'
import { MessageSquareHeart, Phone, ShieldCheck } from 'lucide-react'
import InquiryForm from '../components/inquiry/InquiryForm'
import { getVideoById } from '../data/mockVideos'
import { getEventById } from '../data/mockEvents'

export default function Inquiry() {
  const [params] = useSearchParams()
  const videoId = params.get('video') || ''
  const eventId = params.get('event') || ''
  const video = videoId ? getVideoById(videoId) : null
  const event = eventId ? getEventById(eventId) : null
  const videoTitle = params.get('title') && !eventId ? params.get('title') : video?.title || ''
  const eventTitle = eventId ? params.get('title') || event?.title || '' : ''

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-dark to-brand shadow-lg shadow-brand/30">
            <MessageSquareHeart size={26} className="text-white" />
            <span className="absolute -right-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-md">
              <Phone size={12} className="text-white" />
            </span>
          </span>
          <div>
            <h1 className="bg-gradient-to-r from-brand-dark via-brand to-red-500 bg-clip-text font-display text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              Student Inquiry
            </h1>
            <p className="mt-1 text-sm font-medium text-muted">
              Free counselling — tell us your study-abroad goals
            </p>
          </div>
        </div>
        <span className="hidden h-1.5 min-w-24 flex-1 rounded-full bg-gradient-to-r from-brand/40 via-brand-light/30 to-transparent sm:block" />
      </div>

      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-line bg-white p-5 shadow-sm sm:p-8">
            <InquiryForm
              videoId={videoId}
              videoTitle={videoTitle}
              eventId={eventId}
              eventTitle={eventTitle}
            />
          </div>
        </div>

        <aside className="space-y-4 lg:col-span-2">
          <div className="rounded-2xl border border-line bg-gradient-to-br from-brand-dark via-brand to-brand-light p-6 text-white shadow-lg">
            <h2 className="font-display text-xl font-semibold">Why inquire with us?</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/90">
              <li className="flex gap-2">
                <ShieldCheck size={18} className="mt-0.5 shrink-0" />
                Expert counselling for Canada, UK, Australia, NZ &amp; more
              </li>
              <li className="flex gap-2">
                <ShieldCheck size={18} className="mt-0.5 shrink-0" />
                Scholarship &amp; visa document guidance
              </li>
              <li className="flex gap-2">
                <ShieldCheck size={18} className="mt-0.5 shrink-0" />
                Fast WhatsApp response from Global Study Ltd.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-white p-5 text-sm text-muted">
            <p className="font-semibold text-ink">Prefer to call?</p>
            <p className="mt-2">
              <a href="tel:+8801913300025" className="font-bold text-brand hover:underline">
                01913-300025
              </a>
              {' · '}
              <a href="tel:+8801822220147" className="font-bold text-brand hover:underline">
                01822-220147
              </a>
            </p>
            <p className="mt-3">
              3rd floor, BSL Office Complex, Hotel Intercontinental, 1 Minto Road, Dhaka 1000
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
