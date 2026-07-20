import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'

const DESTINATIONS = [
  'Canada',
  'UK',
  'Australia',
  'USA',
  'New Zealand',
  'Malaysia',
  'South Korea',
  'Other',
]

const INTERESTS = [
  'Study Abroad Counselling',
  'Scholarship Guidance',
  'Visa Support',
  'University Application',
  'IELTS / English Prep',
  'Education Fair Info',
]

const empty = {
  fullName: '',
  phone: '',
  email: '',
  destination: '',
  interest: '',
  message: '',
}

export default function InquiryForm({
  videoTitle = '',
  videoId = '',
  eventTitle = '',
  eventId = '',
  compact = false,
}) {
  const contextTitle = eventTitle || videoTitle
  const contextLabel = eventTitle ? 'Regarding event: ' : videoTitle ? 'Regarding video: ' : ''
  const defaultMessage = eventTitle
    ? `I want to register for “${eventTitle}”.`
    : videoTitle
      ? `I watched “${videoTitle}” and would like more information.`
      : ''

  const [form, setForm] = useState({
    ...empty,
    interest: eventTitle ? 'Education Fair Info' : '',
    message: defaultMessage,
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    setErrors((err) => ({ ...err, [key]: '' }))
  }

  const validate = () => {
    const next = {}
    if (!form.fullName.trim()) next.fullName = 'Name is required'
    if (!form.phone.trim()) next.phone = 'Phone is required'
    else if (!/^[\d+\-\s()]{8,}$/.test(form.phone.trim())) next.phone = 'Enter a valid phone number'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email'
    }
    if (!form.destination) next.destination = 'Select a destination'
    if (!form.interest) next.interest = 'Select an interest'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    // Frontend-only for now — ready to POST to PHP API later
    const payload = {
      ...form,
      videoId: videoId || null,
      videoTitle: videoTitle || null,
      eventId: eventId || null,
      eventTitle: eventTitle || null,
      submittedAt: new Date().toISOString(),
    }
    console.log('Student inquiry lead:', payload)
    setSubmitted(true)
    setForm({ ...empty, message: '' })
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 px-6 py-10 text-center">
        <CheckCircle2 className="mx-auto text-green-600" size={42} />
        <h3 className="mt-3 font-display text-2xl font-semibold text-ink">Inquiry received</h3>
        <p className="mt-2 text-sm text-muted">
          Thank you. Our counsellor will contact you shortly on WhatsApp or phone.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-5 text-sm font-bold text-brand hover:underline"
        >
          Submit another inquiry
        </button>
      </div>
    )
  }

  const field =
    'w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20'
  const label = 'mb-1.5 block text-xs font-bold uppercase tracking-wide text-muted'

  return (
    <form onSubmit={onSubmit} className={`space-y-4 ${compact ? '' : ''}`} noValidate>
      {contextTitle && (
        <div className="rounded-xl border border-brand/20 bg-brand/5 px-4 py-3 text-sm">
          <span className="font-semibold text-brand">{contextLabel}</span>
          <span className="text-ink/80">{contextTitle}</span>
        </div>
      )}

      <div className={compact ? 'grid gap-4 sm:grid-cols-2' : 'grid gap-4 sm:grid-cols-2'}>
        <div>
          <label className={label} htmlFor="fullName">
            Full name *
          </label>
          <input
            id="fullName"
            value={form.fullName}
            onChange={set('fullName')}
            className={field}
            placeholder="Your full name"
          />
          {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone / WhatsApp *
          </label>
          <input
            id="phone"
            value={form.phone}
            onChange={set('phone')}
            className={field}
            placeholder="01XXXXXXXXX"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className={label} htmlFor="email">
          Email (optional)
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={set('email')}
          className={field}
          placeholder="you@example.com"
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="destination">
            Preferred destination *
          </label>
          <select
            id="destination"
            value={form.destination}
            onChange={set('destination')}
            className={field}
          >
            <option value="">Select country</option>
            {DESTINATIONS.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          {errors.destination && <p className="mt-1 text-xs text-red-600">{errors.destination}</p>}
        </div>
        <div>
          <label className={label} htmlFor="interest">
            I’m interested in *
          </label>
          <select id="interest" value={form.interest} onChange={set('interest')} className={field}>
            <option value="">Select interest</option>
            {INTERESTS.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          {errors.interest && <p className="mt-1 text-xs text-red-600">{errors.interest}</p>}
        </div>
      </div>

      <div>
        <label className={label} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          rows={compact ? 3 : 4}
          value={form.message}
          onChange={set('message')}
          className={`${field} resize-y`}
          placeholder="Tell us briefly what you need help with…"
        />
      </div>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-light px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand/25 transition hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
      >
        <Send size={16} className="transition group-hover:translate-x-0.5" />
        Submit inquiry
      </button>
      <p className="text-xs text-muted">
        By submitting, you agree to be contacted by Global Study Ltd. via phone or WhatsApp.
      </p>
    </form>
  )
}
