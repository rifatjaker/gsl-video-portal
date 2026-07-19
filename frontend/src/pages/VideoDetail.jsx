import { Link, useParams } from 'react-router-dom'
import VideoCard from '../components/video/VideoCard'
import { formatDate, getLatestVideos, getVideoById } from '../data/mockVideos'

export default function VideoDetail() {
  const { id } = useParams()
  const video = getVideoById(id)

  if (!video) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="font-display text-2xl font-semibold text-ink">Video not found</h1>
        <Link to="/videos" className="mt-4 inline-block text-sm font-semibold text-brand hover:underline">
          ← Back to videos
        </Link>
      </div>
    )
  }

  const related = getLatestVideos(10)
    .filter((v) => v.id !== video.id && v.category === video.category)
    .slice(0, 3)

  const fallbackRelated =
    related.length > 0
      ? related
      : getLatestVideos(4).filter((v) => v.id !== video.id).slice(0, 3)

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <Link to="/videos" className="text-sm font-semibold text-brand hover:underline">
        ← All videos
      </Link>

      <div className="mt-5 overflow-hidden rounded-2xl border border-line bg-black shadow-lg shadow-ink/10">
        <div className="aspect-video">
          <iframe
            title={video.title}
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <article className="mt-6 max-w-3xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand">{video.category}</p>
        <h1 className="mt-2 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          {video.title}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
          <span>{video.agency}</span>
          <span aria-hidden>·</span>
          <time dateTime={video.publishedAt}>{formatDate(video.publishedAt)}</time>
        </div>
        <p className="mt-5 text-base leading-relaxed text-ink/85">{video.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {video.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-muted"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {fallbackRelated.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-5 font-display text-2xl font-semibold text-ink">Related videos</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {fallbackRelated.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
