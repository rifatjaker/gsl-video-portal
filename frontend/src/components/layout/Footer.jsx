import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react'

const Facebook = ({ size = 19 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H8.5v3H11v7h2.5Z" />
  </svg>
)

const Youtube = ({ size = 19 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26.2 26.2 0 0 0 2 12c0 1.6.1 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8c1.5.4 7.8.4 7.8.4s6.3 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.3-1.6.4-3.2.4-4.8s-.1-3.2-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
  </svg>
)

const Instagram = ({ size = 19 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" stroke="none" />
  </svg>
)

const Linkedin = ({ size = 19 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M6.5 8.8H3.6V21h2.9V8.8ZM5 7.4a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4ZM20.5 14.3c0-3.3-1.8-4.8-4.1-4.8a3.5 3.5 0 0 0-3.2 1.7V8.8H10.3V21h2.9v-6.3c0-1.7.8-2.7 2.2-2.7 1.3 0 2.1.9 2.1 2.7V21h3V14.3Z" />
  </svg>
)

const SOCIALS = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/',
    icon: Facebook,
    hover: 'hover:bg-[#1877f2] hover:border-[#1877f2]',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/',
    icon: Youtube,
    hover: 'hover:bg-[#ff0000] hover:border-[#ff0000]',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/',
    icon: Instagram,
    hover: 'hover:bg-gradient-to-br hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] hover:border-[#dd2a7b]',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/',
    icon: Linkedin,
    hover: 'hover:bg-[#0a66c2] hover:border-[#0a66c2]',
  },
]

const EXPLORE_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/videos', label: 'All Videos' },
  { to: '/videos?category=Scholarship%20Updates', label: 'Scholarship Updates' },
  { to: '/videos?category=Visa%20News', label: 'Visa News' },
  { to: '/videos?category=Education%20Fair', label: 'Education Fairs' },
]

export default function Footer() {
  return (
    <footer className="mt-auto">
      {/* Accent strip */}
      <div className="h-1 bg-gradient-to-r from-brand-dark via-brand-light to-red-500" />

      <div className="relative overflow-hidden bg-gradient-to-br from-ink via-[#243447] to-brand-dark text-white">
        {/* Decorative glows */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-red-500/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12">
          {/* Brand + socials */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img
                src="/gsl.png"
                alt="Global Study logo"
                className="h-12 w-12 rounded-xl bg-white object-contain p-0.5 shadow-lg shadow-black/30"
              />
              <div className="leading-tight">
                <p className="font-display text-xl font-semibold">Global Study Ltd.</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/50">
                  Video News Portal
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Educational news and YouTube videos on study abroad, scholarships, visas, and student
              life — curated for aspiring students.
            </p>

            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ label, href, icon: Icon, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={`grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/5 text-white/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-lg hover:shadow-black/30 ${hover}`}
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">Explore</p>
            <div className="mt-4 flex flex-col gap-2.5">
              {EXPLORE_LINKS.map(({ to, label }) => (
                <Link
                  key={label}
                  to={to}
                  className="group inline-flex items-center gap-1.5 text-sm text-white/75 transition hover:text-white"
                >
                  <ChevronRight
                    size={14}
                    className="text-brand-light transition-transform duration-200 group-hover:translate-x-1"
                  />
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact + map */}
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
              Contact Us
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <p className="flex items-start gap-3 text-white/80">
                <MapPin size={17} className="mt-0.5 shrink-0 text-brand-light" />
                3rd floor, BSL Office Complex, Hotel Intercontinental, 1 Minto Road, Dhaka 1000,
                Bangladesh
              </p>
              <a
                href="tel:+8801913300025"
                className="flex items-center gap-3 text-white/80 transition hover:text-white"
              >
                <Phone size={17} className="shrink-0 text-brand-light" />
                01913-300025
              </a>
              <a
                href="tel:+8801822220147"
                className="flex items-center gap-3 text-white/80 transition hover:text-white"
              >
                <Phone size={17} className="shrink-0 text-brand-light" />
                01822-220147
              </a>
              <a
                href="mailto:info@globalstudy.example"
                className="flex items-center gap-3 text-white/80 transition hover:text-white"
              >
                <Mail size={17} className="shrink-0 text-brand-light" />
                info@globalstudy.example
              </a>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-white/15 shadow-xl shadow-black/30 transition duration-300 hover:border-brand-light/50">
              <iframe
                title="Global Study Ltd. office location"
                src="https://www.google.com/maps?q=BSL+Office+Complex,+Hotel+Intercontinental,+1+Minto+Road,+Dhaka+1000,+Bangladesh&output=embed"
                className="h-44 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/45 sm:flex-row sm:px-6">
            <p>© {new Date().getFullYear()} Global Study Ltd. All rights reserved.</p>
            <p>
              Developed by{' '}
              <a
                href="https://a2technologiesbd.com/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-white/70 transition hover:text-brand-light"
              >
                A2 Technologies
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
