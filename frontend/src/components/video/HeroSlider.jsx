import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { formatDate } from '../../data/mockVideos'

const AUTOPLAY_MS = 4500

export default function HeroSlider({ videos }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = videos.length

  useEffect(() => {
    if (paused || count <= 1) return
    const t = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS)
    return () => clearInterval(t)
  }, [paused, count])

  if (!count) return null

  const go = (dir) => setIndex((i) => (i + dir + count) % count)

  return (
    <div
      className="relative w-full select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Glow behind the slider */}
      <div className="absolute -inset-3 rounded-3xl bg-white/10 blur-xl" />

      <div className="relative overflow-hidden rounded-2xl border border-white/25 bg-black/20 shadow-2xl shadow-black/30 backdrop-blur">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {videos.map((video) => (
            <Link
              key={video.id}
              to={`/videos/${video.id}`}
              className="group relative block w-full shrink-0"
            >
              <div className="aspect-video w-full overflow-hidden bg-ink">
                <img
                  src={video.thumbnail}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Play button */}
              <span className="absolute left-1/2 top-[38%] grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/20 backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:bg-red-600">
                <Play size={22} className="ml-0.5 fill-white text-white" />
              </span>

              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <span className="inline-block rounded-full bg-red-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                  {video.category}
                </span>
                <h3 className="mt-2 line-clamp-2 font-display text-lg font-semibold leading-snug text-white">
                  {video.title}
                </h3>
                <p className="mt-1 text-xs text-white/70">
                  {video.agency} · {formatDate(video.publishedAt)}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Arrows */}
        {count > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => go(-1)}
              className="absolute left-3 top-[38%] grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/35 text-white backdrop-blur transition hover:bg-black/60"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => go(1)}
              className="absolute right-3 top-[38%] grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/35 text-white backdrop-blur transition hover:bg-black/60"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      {/* Dots */}
      {count > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {videos.map((v, i) => (
            <button
              key={v.id}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-7 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
