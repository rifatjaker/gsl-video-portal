import { useState } from 'react'
import { CheckCircle2, Mail, Send } from 'lucide-react'

export default function NewsletterSignup({ variant = 'banner' }) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) {
      setError('Email is required')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Enter a valid email address')
      return
    }
    setError('')
    console.log('Newsletter signup:', {
      name: name.trim() || null,
      email: trimmed,
      submittedAt: new Date().toISOString(),
    })
    setDone(true)
    setEmail('')
    setName('')
  }

  if (done) {
    if (variant === 'footer') {
      return (
        <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-4 text-sm text-white/85">
          <p className="flex items-center gap-2 font-semibold text-white">
            <CheckCircle2 size={18} className="text-green-400" />
            You’re subscribed
          </p>
          <p className="mt-1 text-white/60">Watch your inbox for study-abroad updates.</p>
          <button
            type="button"
            onClick={() => setDone(false)}
            className="mt-2 text-xs font-bold text-brand-light hover:underline"
          >
            Subscribe another email
          </button>
        </div>
      )
    }
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 px-6 py-8 text-center">
        <CheckCircle2 className="mx-auto text-green-600" size={40} />
        <h3 className="mt-3 font-display text-2xl font-semibold text-ink">You’re on the list</h3>
        <p className="mt-2 text-sm text-muted">
          Thanks for subscribing. We’ll send scholarship &amp; visa updates to your inbox.
        </p>
        <button
          type="button"
          onClick={() => setDone(false)}
          className="mt-4 text-sm font-bold text-brand hover:underline"
        >
          Subscribe another email
        </button>
      </div>
    )
  }

  if (variant === 'footer') {
    return (
      <form onSubmit={onSubmit} className="space-y-3" noValidate>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">Newsletter</p>
        <p className="text-sm text-white/70">Get visa, scholarship &amp; fair updates by email.</p>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setError('')
          }}
          placeholder="Your email"
          className="w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-white/40 focus:border-brand-light focus:ring-2 focus:ring-brand-light/30"
        />
        {error && <p className="text-xs text-red-300">{error}</p>}
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-light px-4 py-2.5 text-sm font-bold text-white transition hover:opacity-95"
        >
          <Send size={15} />
          Subscribe
        </button>
      </form>
    )
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-brand-dark via-brand to-brand-light p-6 text-white shadow-xl sm:p-8">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      <div className="relative grid gap-6 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider">
            <Mail size={14} />
            Newsletter
          </div>
          <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
            Never miss a scholarship or visa update
          </h2>
          <p className="mt-2 text-sm text-white/80 sm:text-base">
            Join students getting curated study-abroad news, fair invitations, and counselling tips
            from Global Study Ltd.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-3" noValidate>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name (optional)"
            className="w-full rounded-xl border border-white/25 bg-white/10 px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-white/50 focus:border-white focus:ring-2 focus:ring-white/30"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setError('')
            }}
            placeholder="Email address *"
            className="w-full rounded-xl border border-white/25 bg-white/10 px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-white/50 focus:border-white focus:ring-2 focus:ring-white/30"
          />
          {error && <p className="text-xs text-red-200">{error}</p>}
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-brand shadow-lg transition hover:-translate-y-0.5 hover:bg-soft2"
          >
            <Send size={16} />
            Subscribe free
          </button>
          <p className="text-[11px] text-white/65">No spam. Unsubscribe anytime.</p>
        </form>
      </div>
    </div>
  )
}
