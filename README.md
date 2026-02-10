# Puget Digital Website

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

**Note:** Next.js 16 requires **Node.js >= 20.9.0**. If `npm run build` fails, upgrade Node (e.g. via [nvm](https://github.com/nvm-sh/nvm): `nvm install 20`).

## Deploy on Vercel

1. Push to GitHub and import the repo in [Vercel](https://vercel.com).
2. (Optional) Add env vars for email: `RESEND_API_KEY` or your provider.
3. Deploy.

## Project structure

- `src/app/` — Pages: `/`, `/about`, `/services`, `/contact`, `/projects`, `/projects/[slug]`
- `src/components/` — Header, Footer, Section (animated), ContactCTA, ContactForm
- `src/data/` — Content: projects, services, process, testimonials, FAQ
- `src/app/api/contact/` — POST handler for contact form (log only; add Resend/SendGrid to send email)

## Adding real images

Replace placeholder blocks with `<Image>` from `next/image` using URLs from your Framer export or uploads. `next.config.ts` allows images from `puget.digital`.
