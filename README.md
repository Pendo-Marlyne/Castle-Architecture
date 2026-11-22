# Castle Architectural Firm website

React + Vite + Tailwind. Deployed on Vercel. The enquiry form uses a Vercel serverless function.

## Run locally
```bash
npm install
npm run dev          # site only; the contact form's /api route will not exist
```
To test the form locally: `npm i -g vercel`, copy `.env.example` to `.env.local` and fill it in, then run `vercel dev`.

## Where to edit
| Task | File |
|---|---|
| Contact details, social links, domain | `src/config/site.js` |
| Photos and alt text | `src/data/images.js` (files go in `public/images/`, WebP) |
| Projects | `src/data/projects.js` (set `demo: false` for real ones) |
| Articles | `src/data/articles.js` (same rule) |
| Services, process stages, team | `src/data/services.js`, `approach.js`, `team.js` |
| Privacy policy text | `src/pages/Privacy.jsx` (needs professional review) |

Search for "placeholder", "demonstration" and "to be confirmed" before launch.

## Contact form setup
1. Create an account at resend.com, verify your sending domain, create an API key.
2. In Vercel: Settings > Environment Variables, add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (and optionally `ALLOWED_ORIGIN`).
3. Redeploy. Send a real test enquiry and confirm it arrives.
Until the variables exist, the form tells visitors the message was not sent.

## Deploy to Vercel
1. Push to GitHub.
2. vercel.com > Add New > Project > import the repository. Framework: Vite (auto-detected). Build command `npm run build`, output `dist`.
3. Add the environment variables above. Deploy.
4. Settings > Domains: add your domain and follow the DNS instructions. HTTPS is automatic.
5. Set `site.url` in `src/config/site.js` to the real domain and redeploy (sitemap, canonical URLs and share images depend on it).
6. Submit `/sitemap.xml` in Google Search Console.

## Before launch checklist
- Replace demo projects, articles, team, imagery; add real contact details.
- Have the privacy policy reviewed; add a cookie notice if analytics are added.
- Add `public/og-default.jpg` (1200x630) and pass it as `image` in `SEO` for sharing previews.
- Add LocalBusiness/ProfessionalService structured data only once name, address and phone are verified.
- Run Lighthouse in Chrome DevTools on the deployed site and record the real scores.