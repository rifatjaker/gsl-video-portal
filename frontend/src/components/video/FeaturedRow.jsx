import { Link } from 'react-router-dom'
import { formatDate } from '../../data/mockVideos'

export default function FeaturedRow({ videos }) {
  if (!videos.length) return null

  const [hero, ...rest] = videos

  return (
    <div className="grid gap-4 lg:grid-cols-12">
      <Link
        to={`/videos/${hero.id}`}
        className="group relative overflow-hidden rounded-2xl lg:col-span-7"
      >
        <div className="aspect-[16/10] overflow-hidden bg-ink sm:aspect-[16/9]">
          <img
            src={hero.thumbnail}
            alt=""
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-light">
            Featured · {hero.category}
          </p>
          <h2 className="mt-2 max-w-xl font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">
            {hero.title}
          </h2>
          <p className="mt-2 max-w-lg text-sm text-white/75 line-clamp-2">{hero.description}</p>
          <p className="mt-3 text-xs text-white/55">
            {hero.agency} · {formatDate(hero.publishedAt)}
          </p>
        </div>
      </Link>

      <div className="flex flex-col gap-3 lg:col-span-5">
        {rest.slice(0, 3).map((video) => (
          <Link
            key={video.id}
            to={`/videos/${video.id}`}
            className="group flex gap-3 overflow-hidden rounded-xl border border-line bg-white p-2.5 transition hover:border-brand/35 hover:shadow-md"
          >
            <div className="h-20 w-32 shrink-0 overflow-hidden rounded-lg bg-soft2 sm:h-24 sm:w-36">
              <img
                src={video.thumbnail}
                alt=""
                className="h-full w-full object-cover transition group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="min-w-0 py-0.5">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand">
                {video.category}
              </p>
              <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-ink group-hover:text-brand">
                {video.title}
              </h3>
              <p className="mt-1 text-[11px] text-muted">{formatDate(video.publishedAt)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
