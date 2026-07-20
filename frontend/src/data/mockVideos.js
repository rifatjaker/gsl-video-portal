export const CATEGORIES = [
  'Study Abroad News',
  'Scholarship Updates',
  'University News',
  'Visa News',
  'Immigration News',
  'Student Experiences',
  'Education Fair',
  'IELTS & English Prep',
  'SOP & Application Tips',
  'Accommodation & Living',
  'Part-time Jobs',
  'Alumni Stories',
  'Country Guides',
  'Document Checklist',
  'Pre-Departure Briefing',
  'Career Pathways',
]

export const COUNTRIES = [
  'Canada',
  'UK',
  'Australia',
  'USA',
  'New Zealand',
  'Malaysia',
  'South Korea',
]

export const videos = [
  {
    id: 'v1',
    title: 'Canada Study Permit Changes in 2026 — What Students Must Know',
    description:
      'A clear breakdown of the latest IRCC study permit updates, caps, and how they affect Bangladeshi applicants this year.',
    youtubeId: 'aqz-KE-bpKQ',
    thumbnail: 'https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg',
    category: 'Visa News',
    countries: ['Canada'],
    tags: ['Canada', 'Study Permit', 'IRCC'],
    featured: true,
    publishedAt: '2026-07-12',
    agency: 'Global Study Link',
  },
  {
    id: 'v2',
    title: 'Top Scholarships for Malaysian Universities in 2026',
    description:
      'Explore tuition waivers and merit scholarships available at leading Malaysian public and private universities.',
    youtubeId: 'ScMzIvxBSi4',
    thumbnail: 'https://i.ytimg.com/vi/ScMzIvxBSi4/hqdefault.jpg',
    category: 'Scholarship Updates',
    countries: ['Malaysia'],
    tags: ['Malaysia', 'Scholarship', 'Tuition'],
    featured: true,
    publishedAt: '2026-07-10',
    agency: 'Asia Edu Care',
  },
  {
    id: 'v3',
    title: 'Student Life in Seoul — A Day on Campus',
    description:
      'Follow an international student through lectures, food courts, and weekend plans in South Korea.',
    youtubeId: 'jNQXAC9IVRw',
    thumbnail: 'https://i.ytimg.com/vi/jNQXAC9IVRw/hqdefault.jpg',
    category: 'Student Experiences',
    countries: ['South Korea'],
    tags: ['Korea', 'Campus Life', 'Seoul'],
    featured: true,
    publishedAt: '2026-07-08',
    agency: 'Korea Pathway',
  },
  {
    id: 'v4',
    title: 'UK University Open Days — July Education Fair Highlights',
    description:
      'Highlights from the July education fair featuring UK university representatives and application tips.',
    youtubeId: 'M7lc1UVf-VE',
    thumbnail: 'https://i.ytimg.com/vi/M7lc1UVf-VE/hqdefault.jpg',
    category: 'Education Fair',
    countries: ['UK'],
    tags: ['UK', 'Education Fair', 'Open Day'],
    featured: false,
    publishedAt: '2026-07-05',
    agency: 'Global Study Link',
  },
  {
    id: 'v5',
    title: 'Australia Immigration Pathway After Graduation',
    description:
      'How Temporary Graduate visas and skilled migration pathways work for international students.',
    youtubeId: 'LXb3EKWsInQ',
    thumbnail: 'https://i.ytimg.com/vi/LXb3EKWsInQ/hqdefault.jpg',
    category: 'Immigration News',
    countries: ['Australia'],
    tags: ['Australia', 'PR', 'Graduate Visa'],
    featured: false,
    publishedAt: '2026-07-02',
    agency: 'Down Under Advisors',
  },
  {
    id: 'v6',
    title: 'New Zealand University Rankings & Course Picks',
    description:
      'A practical guide to choosing courses across Auckland, Otago, and Wellington-based institutions.',
    youtubeId: '9bZkp7q19f0',
    thumbnail: 'https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg',
    category: 'University News',
    countries: ['New Zealand'],
    tags: ['New Zealand', 'Rankings', 'Courses'],
    featured: false,
    publishedAt: '2026-06-28',
    agency: 'NZUAC Desk',
  },
  {
    id: 'v7',
    title: 'Scholarship Interview Tips That Actually Work',
    description:
      'Common interview questions, how to structure answers, and mistakes that cost students awards.',
    youtubeId: 'kJQP7kiw5Fk',
    thumbnail: 'https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg',
    category: 'Scholarship Updates',
    countries: ['Canada', 'UK', 'Australia', 'Malaysia'],
    tags: ['Interview', 'Scholarship', 'Tips'],
    featured: false,
    publishedAt: '2026-06-22',
    agency: 'Asia Edu Care',
  },
  {
    id: 'v8',
    title: 'Study Abroad Timeline — From Offer Letter to Departure',
    description:
      'Month-by-month checklist covering deposits, visas, accommodation, and pre-departure briefs.',
    youtubeId: 'e-ORhEE9VVg',
    thumbnail: 'https://i.ytimg.com/vi/e-ORhEE9VVg/hqdefault.jpg',
    category: 'Study Abroad News',
    countries: ['Canada', 'UK', 'Australia', 'USA', 'New Zealand'],
    tags: ['Timeline', 'Checklist', 'Departure'],
    featured: true,
    publishedAt: '2026-06-18',
    agency: 'Global Study Link',
  },
  {
    id: 'v9',
    title: 'US F-1 Visa Interview — Sample Answers',
    description:
      'Realistic sample answers for common US embassy questions on funding, ties, and program choice.',
    youtubeId: 'RgKAFK5djSk',
    thumbnail: 'https://i.ytimg.com/vi/RgKAFK5djSk/hqdefault.jpg',
    category: 'Visa News',
    countries: ['USA'],
    tags: ['USA', 'F-1', 'Embassy'],
    featured: false,
    publishedAt: '2026-06-12',
    agency: 'North Star Consultants',
  },
  {
    id: 'v10',
    title: 'Living Costs Comparison: Canada vs UK vs Australia',
    description:
      'Rent, groceries, transport, and part-time work limits compared across three popular destinations.',
    youtubeId: 'fJ9rUzIMcZQ',
    thumbnail: 'https://i.ytimg.com/vi/fJ9rUzIMcZQ/hqdefault.jpg',
    category: 'Study Abroad News',
    countries: ['Canada', 'UK', 'Australia'],
    tags: ['Living Cost', 'Canada', 'UK', 'Australia'],
    featured: false,
    publishedAt: '2026-06-05',
    agency: 'Global Study Link',
  },
]

export function getVideoById(id) {
  return videos.find((v) => v.id === id) ?? null
}

export function getFeaturedVideos() {
  return videos.filter((v) => v.featured)
}

export function getLatestVideos(limit = 8) {
  return [...videos]
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, limit)
}

export function filterVideos({ query = '', category = 'All', country = 'All' } = {}) {
  const q = query.trim().toLowerCase()
  return videos.filter((v) => {
    const matchCategory = category === 'All' || v.category === category
    const matchCountry =
      country === 'All' || (v.countries || []).includes(country)
    const matchQuery =
      !q ||
      v.title.toLowerCase().includes(q) ||
      v.description.toLowerCase().includes(q) ||
      v.tags.some((t) => t.toLowerCase().includes(q)) ||
      v.category.toLowerCase().includes(q) ||
      (v.countries || []).some((c) => c.toLowerCase().includes(q))
    return matchCategory && matchCountry && matchQuery
  })
}

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function getSearchSuggestions(query, limit = 8) {
  const q = query.trim().toLowerCase()
  if (q.length < 1) return []

  const suggestions = []
  const seen = new Set()

  for (const video of videos) {
    if (video.title.toLowerCase().includes(q) || video.agency.toLowerCase().includes(q)) {
      const key = `video:${video.id}`
      if (!seen.has(key)) {
        seen.add(key)
        suggestions.push({
          type: 'video',
          id: video.id,
          label: video.title,
          meta: video.category,
          thumbnail: video.thumbnail,
        })
      }
    }
  }

  for (const category of CATEGORIES) {
    if (category.toLowerCase().includes(q)) {
      const key = `category:${category}`
      if (!seen.has(key)) {
        seen.add(key)
        suggestions.push({
          type: 'category',
          id: category,
          label: category,
          meta: 'Category',
        })
      }
    }
  }

  for (const video of videos) {
    for (const tag of video.tags) {
      if (tag.toLowerCase().includes(q)) {
        const key = `tag:${tag.toLowerCase()}`
        if (!seen.has(key)) {
          seen.add(key)
          suggestions.push({
            type: 'tag',
            id: tag,
            label: tag,
            meta: 'Tag',
          })
        }
      }
    }
  }

  return suggestions.slice(0, limit)
}
