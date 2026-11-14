// Central place for all outbound / affiliate deal links.
//
// ▸ ONE-LINE GO-LIVE per platform: when an affiliate partnership is approved,
//   paste the id/link into the matching config below and every deal for that
//   brand instantly starts using the tracking link — no other file changes.
//   Until then, deals link to the correct public page so the site works today.
//
//   • Booking.com (CJ): set BOOKING.aid once your CJ partnership is approved
//     (Dashboard → "Create a Deep Link" or Content Hub → Text Link → GET CODE).
//   • Airbnb (Creators / impact.com): set AIRBNB.trackingUrl to the tracking
//     link your Airbnb Creators dashboard generates once you're approved.

import { slugify } from './data.js'

// ── Affiliate programs you're onboarding (fill the id/link to go live) ──────
export const BOOKING = {
  aid: '', // e.g. '304142'  ← paste your Booking affiliate id here to go live
  label: '', // e.g. 'deala-coupons'  ← optional tracking label
  pages: {
    hotels: 'https://www.booking.com/index.html',
    'vacation-rentals': 'https://www.booking.com/vacation-rentals.html',
    flights: 'https://www.booking.com/flights/index.html',
    'car-rentals': 'https://www.booking.com/cars/index.html',
    attractions: 'https://www.booking.com/attractions/index.html',
    'airport-taxis': 'https://www.booking.com/taxi/index.html',
    travel: 'https://www.booking.com/index.html',
  },
  defaultPage: 'https://www.booking.com/index.html',
}

export const AIRBNB = {
  // Airbnb Creators runs on impact.com. Once approved, paste the tracking link
  // from your Creators dashboard here (it redirects to airbnb.com). When set,
  // it is used for every Airbnb deal.
  trackingUrl: '',
  pages: {
    hotels: 'https://www.airbnb.com/',
    'vacation-rentals': 'https://www.airbnb.com/',
    attractions: 'https://www.airbnb.com/s/experiences',
    travel: 'https://www.airbnb.com/',
  },
  defaultPage: 'https://www.airbnb.com/',
}

// Best landing page per travel platform (category-aware) for brands that don't
// yet have affiliate tracking — so every travel deal still opens somewhere sensible.
const PLATFORM_PAGES = {
  'expedia.com': {
    hotels: 'https://www.expedia.com/Hotels',
    'vacation-rentals': 'https://www.expedia.com/Vacation-Rentals',
    flights: 'https://www.expedia.com/Flights',
    'car-rentals': 'https://www.expedia.com/Cars',
    travel: 'https://www.expedia.com/',
    _default: 'https://www.expedia.com/',
  },
  'hotels.com': { _default: 'https://www.hotels.com/' },
  'hertz.com': { _default: 'https://www.hertz.com/' },
  'getyourguide.com': { _default: 'https://www.getyourguide.com/' },
  'welcomepickups.com': { _default: 'https://www.welcomepickups.com/' },
  'vrbo.com': { _default: 'https://www.vrbo.com/' },
}

// Affiliate / sponsored outbound links must carry these rel values for
// SEO + FTC compliance. Use on every outbound <a> and window.open.
export const OUTBOUND_REL = 'sponsored nofollow noopener noreferrer'

const host = (coupon) => (coupon?.store || coupon?.website || '').trim().toLowerCase()
const catSlug = (coupon) => slugify(coupon?.category || '')

export const isBookingDeal = (coupon) =>
  /booking\.com/.test(host(coupon)) || /booking\.com/i.test(coupon?.storeName || '')

export const isAirbnbDeal = (coupon) =>
  /airbnb\.com/.test(host(coupon)) || /airbnb/i.test(coupon?.storeName || '')

// Wrap a booking.com destination URL with your affiliate tracking params.
// Returns the URL unchanged until BOOKING.aid is set — the single switch.
export const bookingAffiliateUrl = (destUrl = BOOKING.defaultPage) => {
  if (!BOOKING.aid) return destUrl
  try {
    const u = new URL(destUrl)
    u.searchParams.set('aid', BOOKING.aid)
    if (BOOKING.label) u.searchParams.set('label', BOOKING.label)
    return u.toString()
  } catch {
    return destUrl
  }
}

// Airbnb uses an impact.com tracking link (carries its own params). When
// configured it is used as-is; otherwise fall back to the public page.
export const airbnbAffiliateUrl = (destUrl = AIRBNB.defaultPage) =>
  AIRBNB.trackingUrl || destUrl

// Best matching public page for a non-tracked travel platform, or null.
const platformPage = (coupon) => {
  const pages = PLATFORM_PAGES[host(coupon)]
  if (!pages) return null
  return pages[catSlug(coupon)] || pages._default
}

// The outbound URL for ANY deal card / coupon:
//   • Booking deals   → tracked Booking deep link (once BOOKING.aid is set)
//   • Airbnb deals    → tracked Airbnb link (once AIRBNB.trackingUrl is set)
//   • other travel    → the best page on that platform (category-aware)
//   • everything else → the retailer's own site
export const dealOutboundUrl = (coupon) => {
  if (!coupon) return '#'
  if (isBookingDeal(coupon)) {
    return bookingAffiliateUrl(BOOKING.pages[catSlug(coupon)] || BOOKING.defaultPage)
  }
  if (isAirbnbDeal(coupon)) {
    return airbnbAffiliateUrl(AIRBNB.pages[catSlug(coupon)] || AIRBNB.defaultPage)
  }
  const page = platformPage(coupon)
  if (page) return page
  const site = host(coupon)
  if (!site) return '#'
  return /^https?:\/\//.test(site) ? site : `https://${site}`
}

// Open a deal's outbound link in a new tab, safely.
export const openDeal = (coupon) => {
  const url = dealOutboundUrl(coupon)
  if (url && url !== '#') window.open(url, '_blank', 'noopener,noreferrer')
}
