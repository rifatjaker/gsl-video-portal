import { Link, useParams } from 'react-router-dom'
import { ArrowRight, MessageSquareHeart } from 'lucide-react'
import VideoCard from '../components/video/VideoCard'
import InquiryForm from '../components/inquiry/InquiryForm'
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

      <div className="mt-8 grid gap-8 lg:grid-cols-5">
        <article className="lg:col-span-3">
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

          <Link
            to={`/inquiry?video=${encodeURIComponent(video.id)}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-red-900/20 transition hover:-translate-y-0.5"
          >
            <MessageSquareHeart size={16} />
            Ask about this video
            <ArrowRight size={15} />
          </Link>
        </article>

        <aside className="lg:col-span-2">
          <div className="sticky top-24 rounded-2xl border border-line bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand">
                <MessageSquareHeart size={20} />
              </span>
              <div>
                <h2 className="font-display text-lg font-semibold text-ink">Student inquiry</h2>
                <p className="text-xs text-muted">Get free counselling on this topic</p>
              </div>
            </div>
            <InquiryForm videoId={video.id} videoTitle={video.title} compact />
          </div>
        </aside>
      </div>

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
