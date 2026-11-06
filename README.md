# Deala — Coupons & Deals (React)

A React implementation of the "Home 4" Deala coupons/deals site, converted from
the static design mockup into a componentized, multi-page Vite + React app with
the trust and policy pages needed to run Google Ads.

## Stack

- [Vite](https://vite.dev/) — dev server & build
- React 18 + [React Router](https://reactrouter.com/) for multi-page routing
- CSS Modules for component-scoped styling, with shared design tokens
  (colors, radii, shadows, spacing) defined as CSS variables in
  [`src/index.css`](src/index.css)

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/coupons` | Coupons listing (search, filters, grid/list) |
| `/coupon/:slug` | Single coupon detail |
| `/about` | About Us |
| `/contact` | Contact Us (form + business details) |
| `/privacy-policy` | Privacy Policy |
| `/terms` | Terms & Conditions |
| `/cookie-policy` | Cookie Policy |
| `/disclaimer` | Affiliate Disclosure |
| `*` | 404 Not Found |

## Structure

```
src/
  main.jsx              # entry point
  App.jsx               # router + routes
  index.css             # reset + design tokens (CSS variables)
  data.js               # coupon/catalog content + helpers
  content/
    site.js             # business details (name, email, address) — REPLACE
    legal.js            # privacy/terms/cookie/disclosure copy
  components/           # shared UI (Header, Footer, Layout, Breadcrumb,
                        # CookieConsent, PageShell, LegalPage, icons, sections)
  pages/                # Home, Coupons, SingleCoupon, About, Contact,
                        # Privacy/Terms/Cookie/Disclaimer, NotFound
```

## Before running Google Ads

This build ships the pages ad reviewers look for — Privacy Policy, Terms,
Cookie Policy, Affiliate Disclosure, About, and Contact — plus a cookie-consent
banner and newsletter consent copy. Before launching campaigns:

1. **Replace the placeholder business details** in
   [`src/content/site.js`](src/content/site.js) (legal name, email, phone,
   address) with your real, verifiable information. Ad review requires accurate
   contact and ownership details.
2. **Have the policy text reviewed by legal counsel** and tailored to your
   jurisdiction and actual data practices. The copy in
   [`src/content/legal.js`](src/content/legal.js) is a professional template.
3. **Wire the forms and cookie consent** to your real email/consent backend;
   the consent choice is currently stored in `localStorage` only.
4. For static hosting, add an SPA fallback so deep links (e.g.
   `/coupon/instant-55-cashback`) resolve, since the app uses `BrowserRouter`.

## Notes

- Content lives in [`src/data.js`](src/data.js) and
  [`src/content/`](src/content); replace with a real data source/CMS to go live.
- Images reference the original CDN URLs — swap for your own asset host.
- Forms use local state with `preventDefault` handlers ready to connect.
