import { Link } from 'react-router-dom'
import { Radio } from 'lucide-react'
import { getLatestVideos } from '../../data/mockVideos'

export default function NewsTicker() {
  const items = getLatestVideos(8)
  // Duplicate for a seamless infinite loop
  const loop = [...items, ...items]

  return (
    <div className="relative z-10 border-t border-white/20 bg-[#12233a]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-stretch px-0 sm:px-6">
        {/* Label */}
        <div className="relative z-10 flex shrink-0 items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 px-4 py-2.5 text-white shadow-lg shadow-red-900/30">
          <Radio size={15} className="animate-pulse" />
          <span className="text-xs font-extrabold uppercase tracking-wider">Latest News</span>
          {/* Pointed edge */}
          <span className="absolute -right-2 top-0 h-full w-2 bg-red-500 [clip-path:polygon(0_0,100%_50%,0_100%)]" />
        </div>

        {/* Marquee */}
        <div className="news-ticker group relative flex-1 overflow-hidden">
          <div className="news-ticker-track flex items-center gap-10 py-2.5 pl-6">
            {loop.map((video, i) => (
              <Link
                key={`${video.id}-${i}`}
                to={`/videos/${video.id}`}
                className="flex shrink-0 items-center gap-2.5 text-[15px] font-semibold text-white transition hover:text-brand-light"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-red-500 ring-2 ring-red-500/40" />
                <span className="whitespace-nowrap drop-shadow-sm">{video.title}</span>
                <span className="whitespace-nowrap rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                  {video.category}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
