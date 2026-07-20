# Global Study Video News Portal

Public frontend for **Global Study Ltd.** — educational video news with search, categories, featured slider, and WhatsApp contact.

## Live site

After GitHub Pages deploys: **https://rifatjaker.github.io/gsl-video-portal/**

## Local development

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5174 (or the port Vite prints).

## Build

```bash
cd frontend
npm run build
npm run preview
```

Production builds use base path `/gsl-video-portal/` for GitHub Pages. Local `npm run dev` still serves from `/`.

## Stack

- React (Vite) + Tailwind CSS
- React Router
- Lucide icons
- Mock video data (PHP API later)

## Deploy

Pushing to `master` runs `.github/workflows/deploy-pages.yml` and publishes `frontend/dist` to GitHub Pages.




# Priority 1 — still required by the SRS (highest value)
Feature	Why it matters
PHP 8 REST API + MySQL
Backend for real data instead of mock videos
JWT login
Agency / University / Admin auth
Agency Portal
Submit videos (title, description, YouTube URL, thumbnail, category, tags)
University Portal
Same contributor flow for universities
Admin Dashboard
Review → Approve / Reject, manage categories & featured
Approval workflow
Pending → Review → Approved → Published
News Management
Separate news articles (SRS lists News, not only videos)
SEO
Meta titles, Open Graph, sitemap, clean URLs
Analytics
Views, top videos, submissions, agency performance
This is the core of the ৳70,000 package that isn’t built yet.

# Priority 2 — strong extras (beyond SRS, good upsell)
Feature	Why add it
Student inquiry / lead form on video pages
Capture interested students → WhatsApp/CRM
Country filter (Canada, UK, AU, NZ, KR, MY…)
Study-abroad users browse by destination
Share buttons (FB / WhatsApp / LinkedIn)
Organic reach for agencies
Watch count / “Trending”
Social proof on listing cards
Email notify on approve/reject
Agencies don’t refresh the portal blindly
Rejection reason field
Cleaner moderation
Role-based menus
Admin vs Agency vs University permissions
Draft save for incomplete submissions
Better contributor UX
Bengali / English toggle
Strong fit for BD students

# Priority 3 — later / premium
Newsletter signup
Event / Education Fair calendar
Partner agency directory on the public site
Playlist / series (e.g. “Visa series”)
Comments / Q&A under videos
Multi-office switcher (Dhaka + other branches)
PWA / “Add to Home Screen” for mobile
Suggested build order
Backend API + DB (videos, users, categories, news)
Admin moderation (approve/reject is the heart of the product)
Agency + University portals
News module (articles, not only YouTube)
SEO + Analytics
Lead form + country filter as quick public upgrades