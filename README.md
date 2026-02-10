# Puget Digital Website

**Repo:** [github.com/ykpd/pd-website](https://github.com/ykpd/pd-website)

Next.js site for [Puget Digital](https://puget.digital) — e-commerce agency (Acumatica, Shopify, BigCommerce, ERP integration).

## Stack

- **Next.js** (App Router), **TypeScript**, **Tailwind CSS**
- **Framer Motion** for scroll and entrance animations
- Contact form submitted to `/api/contact` (wire Resend/SendGrid via env for email)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Note:** This project uses Next.js 14 (Node 18+). For the latest Next.js 16 use Node >= 20.9.

## Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. **Import** the repo: [github.com/ykpd/pd-website](https://github.com/ykpd/pd-website) (or search `pd-website`).
3. Leave **Framework Preset** as Next.js and **Root Directory** as `.` → **Deploy**.
4. (Optional) In Project **Settings → Environment Variables**, add `RESEND_API_KEY` if you wire the contact form to Resend.

## Project structure

- `src/app/` — Pages: `/`, `/about`, `/services`, `/contact`, `/projects`, `/projects/[slug]`
- `src/components/` — Header, Footer, Section (animated), ContactCTA, ContactForm
- `src/data/` — Content: projects, services, process, testimonials, FAQ
- `src/app/api/contact/` — POST handler for contact form (log only; add Resend/SendGrid to send email)

## Adding real images

Replace placeholder blocks with `<Image>` from `next/image` using URLs from your Framer export or uploads. `next.config.ts` allows images from `puget.digital`.
