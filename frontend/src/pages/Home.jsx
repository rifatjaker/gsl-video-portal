import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Clapperboard,
  Compass,
  LayoutGrid,
  GraduationCap,
  Newspaper,
  PlayCircle,
  Sparkles,
  Star,
} from 'lucide-react'
import FeaturedRow from '../components/video/FeaturedRow'
import HeroSlider from '../components/video/HeroSlider'
import VideoCard from '../components/video/VideoCard'
import CategoryChips from '../components/video/CategoryChips'
import Pagination from '../components/video/Pagination'
import { getFeaturedVideos, getLatestVideos } from '../data/mockVideos'

const PER_PAGE = 6

export default function Home() {
  const featured = getFeaturedVideos()
  const latest = getLatestVideos(Infinity)

  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(latest.length / PER_PAGE)
  const pageVideos = latest.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  return (
    <div>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand to-brand-light opacity-95" />
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-16 left-10 h-56 w-56 rounded-full bg-brand-light/40 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              Educational video news
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
              Global Study
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Watch curated study-abroad news, scholarship updates, visa guides, and student
              stories — reviewed before they go live.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/videos"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-red-900/40"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <PlayCircle size={19} className="transition-transform duration-300 group-hover:scale-110" />
                Browse videos
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/videos?category=Scholarship%20Updates"
                className="group inline-flex items-center gap-2.5 rounded-full border-2 border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-brand hover:shadow-lg hover:shadow-black/15"
              >
                <GraduationCap
                  size={19}
                  className="transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110"
                />
                Scholarship updates
              </Link>
            </div>
          </div>

          <HeroSlider videos={featured} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-dark to-brand shadow-lg shadow-brand/30">
              <Newspaper size={25} className="text-white" />
              <span className="absolute -right-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-md">
                <Star size={13} className="fill-white text-white" />
              </span>
            </span>
            <div>
              <h2 className="bg-gradient-to-r from-brand-dark via-brand to-red-500 bg-clip-text font-display text-3xl font-bold tracking-tight text-transparent">
                Featured
              </h2>
              <p className="mt-1 text-sm font-medium text-muted">
                Hand-picked stories for this week
              </p>
            </div>
          </div>
          <Link
            to="/videos"
            className="group inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-2 text-sm font-bold text-brand transition hover:border-brand hover:bg-brand hover:text-white"
          >
            View all
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <FeaturedRow videos={featured} />
      </section>

      <section className="border-y border-line bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-dark to-brand shadow-lg shadow-brand/30">
                <LayoutGrid size={25} className="text-white" />
                <span className="absolute -right-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-md">
                  <Compass size={13} className="text-white" />
                </span>
              </span>
              <div>
                <h2 className="bg-gradient-to-r from-brand-dark via-brand to-red-500 bg-clip-text font-display text-3xl font-bold tracking-tight text-transparent">
                  Browse by category
                </h2>
                <p className="mt-1 text-sm font-medium text-muted">
                  Find videos on the topics that matter to you
                </p>
              </div>
            </div>
            <span className="hidden h-1.5 min-w-24 flex-1 rounded-full bg-gradient-to-r from-brand/40 via-brand-light/30 to-transparent sm:block" />
          </div>
          <CategoryChips />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-light shadow-lg shadow-brand/30">
              <Clapperboard size={26} className="text-white" />
              <span className="absolute -right-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-md">
                <Sparkles size={13} className="text-white" />
              </span>
            </span>
            <div>
              <h2 className="bg-gradient-to-r from-brand-dark via-brand to-red-500 bg-clip-text font-display text-3xl font-bold tracking-tight text-transparent">
                Latest videos
              </h2>
              <p className="mt-1 flex items-center gap-2 text-sm font-medium text-muted">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
                </span>
                Recently published on the portal
              </p>
            </div>
          </div>
          <span className="hidden h-1.5 min-w-24 flex-1 rounded-full bg-gradient-to-r from-brand/40 via-brand-light/30 to-transparent sm:block" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pageVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </section>
    </div>
  )
}
