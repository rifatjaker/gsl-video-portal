export const EVENT_CATEGORIES = [
  'Education Fair',
  'Open Day',
  'Webinar',
  'Counselling Camp',
]

export const events = [
  {
    id: 'e1',
    title: 'UK University Open Day — Dhaka',
    summary:
      'Meet admissions teams from leading UK universities. On-the-spot eligibility checks and scholarship guidance.',
    description: `Join Global Study Ltd. for a full-day UK education fair at Hotel Intercontinental, Dhaka.

Visitors can speak directly with university representatives, review course options, and get SOP feedback from our counsellors.

Please bring academic transcripts and a valid ID. Pre-registration is recommended to skip the queue.`,
    eventDate: '2026-08-15',
    startTime: '10:00',
    endTime: '17:00',
    venue: 'BSL Office Complex, Hotel Intercontinental',
    address: '1 Minto Road, Shahbag, Dhaka 1000',
    city: 'Dhaka',
    country: 'Bangladesh',
    countries: ['UK'],
    category: 'Education Fair',
    cover:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
    universities: ['University of Manchester', 'University of Leeds', 'Coventry University'],
    featured: true,
    seats: 'Limited seats',
  },
  {
    id: 'e2',
    title: 'Canada Study Permit Counselling Camp',
    summary:
      'Free one-to-one sessions on study permits, proof of funds, and September 2026 intakes.',
    description: `Our Canada desk will run a counselling camp for students targeting the next major intake.

Topics include IRCC document checklists, GIC/proof-of-funds updates, and common refusal reasons.

Walk-ins welcome; priority given to pre-registered students.`,
    eventDate: '2026-08-22',
    startTime: '11:00',
    endTime: '16:00',
    venue: 'Global Study Ltd. Office',
    address: '3rd floor, BSL Office Complex, 1 Minto Road',
    city: 'Dhaka',
    country: 'Bangladesh',
    countries: ['Canada'],
    category: 'Counselling Camp',
    cover:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80',
    universities: ['University of Toronto', 'York University', 'University of Manitoba'],
    featured: true,
    seats: 'Open registration',
  },
  {
    id: 'e3',
    title: 'Australia & New Zealand Education Fair',
    summary:
      'Explore undergraduate and postgraduate options across Australia and New Zealand campuses.',
    description: `A joint fair covering popular programmes in business, IT, nursing, and engineering.

University partners will share scholarship updates and post-study work pathway overviews.

Parents are welcome to attend with students.`,
    eventDate: '2026-09-05',
    startTime: '10:30',
    endTime: '18:00',
    venue: 'Hotel Intercontinental Ballroom',
    address: '1 Minto Road, Dhaka 1000',
    city: 'Dhaka',
    country: 'Bangladesh',
    countries: ['Australia', 'New Zealand'],
    category: 'Education Fair',
    cover:
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&q=80',
    universities: ['Monash University', 'University of Auckland', 'Deakin University'],
    featured: true,
    seats: 'Pre-register preferred',
  },
  {
    id: 'e4',
    title: 'Malaysia University Open Day (Online)',
    summary:
      'Live webinar with Malaysian university partners — tuition, scholarships, and living costs.',
    description: `Join from home for an interactive webinar with admissions officers from leading Malaysian universities.

Q&A will cover English requirements, application deadlines, and accommodation options.

Zoom link will be sent after registration.`,
    eventDate: '2026-08-28',
    startTime: '19:00',
    endTime: '20:30',
    venue: 'Online — Zoom',
    address: 'Link sent by WhatsApp / email',
    city: 'Online',
    country: 'Malaysia',
    countries: ['Malaysia'],
    category: 'Webinar',
    cover:
      'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=1200&q=80',
    universities: ['University of Malaya', 'Taylor’s University', 'Sunway University'],
    featured: false,
    seats: 'Unlimited online',
  },
  {
    id: 'e5',
    title: 'Scholarship Interview Masterclass',
    summary:
      'Practice common scholarship interview questions with feedback from senior counsellors.',
    description: `A focused workshop for students shortlisted for merit scholarships.

Includes mock interviews, body language tips, and how to present funding stories clearly.

Bring a printed CV and draft SOP.`,
    eventDate: '2026-09-12',
    startTime: '14:00',
    endTime: '17:00',
    venue: 'Global Study Ltd. Training Room',
    address: '3rd floor, BSL Office Complex',
    city: 'Dhaka',
    country: 'Bangladesh',
    countries: ['Canada', 'UK', 'Australia', 'USA', 'New Zealand', 'Malaysia', 'South Korea'],
    category: 'Open Day',
    cover:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
    universities: ['Multiple partners'],
    featured: false,
    seats: '40 seats',
  },
  {
    id: 'e6',
    title: 'Korea & Japan Pathway Fair',
    summary:
      'Language programmes, undergraduate pathways, and scholarship options for East Asia.',
    description: `Discover study pathways in South Korea and Japan, including language institutes and degree programmes.

Counsellors will explain visa timelines and living-cost expectations.

Registration required for seating.`,
    eventDate: '2026-09-20',
    startTime: '11:00',
    endTime: '16:30',
    venue: 'BSL Office Complex Conference Hall',
    address: '1 Minto Road, Dhaka 1000',
    city: 'Dhaka',
    country: 'Bangladesh',
    countries: ['South Korea'],
    category: 'Education Fair',
    cover:
      'https://images.unsplash.com/photo-1517154423619-4abcb605db0d?w=1200&q=80',
    universities: ['Korea University', 'Yonsei University', 'Waseda University'],
    featured: false,
    seats: 'Limited seats',
  },
]

export function getEventById(id) {
  return events.find((e) => e.id === id) ?? null
}

export function getUpcomingEvents(limit = 6) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return [...events]
    .filter((e) => new Date(e.eventDate) >= today)
    .sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate))
    .slice(0, limit)
}

export function filterEvents({ category = 'All', month = 'All', country = 'All' } = {}) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return [...events]
    .filter((e) => {
      const d = new Date(e.eventDate)
      const matchCategory = category === 'All' || e.category === category
      const matchCountry =
        country === 'All' || (e.countries || []).includes(country)
      let matchMonth = true
      if (month === 'This month') {
        matchMonth =
          d.getMonth() === today.getMonth() && d.getFullYear() === today.getFullYear()
      } else if (month === 'Next month') {
        const next = new Date(today.getFullYear(), today.getMonth() + 1, 1)
        matchMonth =
          d.getMonth() === next.getMonth() && d.getFullYear() === next.getFullYear()
      } else if (month === 'Upcoming') {
        matchMonth = d >= today
      }
      return matchCategory && matchCountry && matchMonth
    })
    .sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate))
}

export function formatEventDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function formatEventTime(start, end) {
  return `${start} – ${end}`
}
