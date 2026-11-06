# Deala — Home (React)

A React implementation of the "Home 4" Deala coupons/deals landing page,
converted from the static design mockup into a componentized Vite + React app.

## Stack

- [Vite](https://vite.dev/) — dev server & build
- React 18
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

## Structure

```
src/
  main.jsx              # entry point
  App.jsx               # page composition
  index.css            # reset + design tokens (CSS variables)
  data.js              # all page content (swap for an API/CMS)
  components/
    icons.jsx          # shared inline SVG icons
    SectionHead.jsx    # reusable "Title / See All →" heading
    Header.jsx         # top bar (search, hotline, auth) + nav
    Hero.jsx           # dual banner slider
    SubBanner.jsx      # 3-up promo banners
    Categories.jsx     # category circles
    TopTrendingDeals.jsx
    TrendingGrid.jsx   # 4×2 deal cards
    PopularDeals.jsx   # store list + featured banner
    BestCards.jsx      # shopping cards
    Ticker.jsx         # animated marquee
    Testimonials.jsx   # customer reviews
    Footer.jsx
```

## Notes

- Content lives in [`src/data.js`](src/data.js); it was lifted from the
  mockup's `renderVals()`. Replace it with a real data source to go live.
- Images currently reference the original CDN URLs. Swap these for your own
  asset host or local files in `src/data.js` and the hero/banner components.
- Search and subscribe forms have local state and `preventDefault` handlers
  ready to be wired to real endpoints.
