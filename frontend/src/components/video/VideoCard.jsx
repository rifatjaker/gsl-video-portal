import { Link } from 'react-router-dom'
import { formatDate } from '../../data/mockVideos'

export default function VideoCard({ video }) {
  return (
    <Link
      to={`/videos/${video.id}`}
      className="group block overflow-hidden rounded-2xl border border-line bg-white transition duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10"
    >
      <div className="relative aspect-video overflow-hidden bg-soft2">
        <img
          src={video.thumbnail}
          alt=""
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <span className="absolute bottom-2 right-2 rounded bg-black/70 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
          ▶ Watch
        </span>
      </div>
      <div className="p-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand">{video.category}</p>
        <h3 className="mt-1.5 line-clamp-2 font-display text-[17px] font-semibold leading-snug text-ink group-hover:text-brand">
          {video.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted">{video.description}</p>
        <div className="mt-3 flex items-center justify-between gap-2 text-xs text-muted">
          <span>{video.agency}</span>
          <time dateTime={video.publishedAt}>{formatDate(video.publishedAt)}</time>
        </div>
      </div>
    </Link>
  )
}
