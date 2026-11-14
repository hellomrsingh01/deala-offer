// Central place for all outbound / affiliate deal links.
//
// ▸ ONE-LINE GO-LIVE: when Booking.com activates your CJ partnership, paste your
//   affiliate id into BOOKING.aid below (and optionally a label). Every Booking
//   deal across the whole site instantly starts using the tracking link — no
//   other file needs to change. Until then, Booking deals link to booking.com
//   normally (untracked), so nothing breaks while you wait for approval.
//
// Where to get these (once your application is approved in the Booking partner
// portal at booking.cj.com):
//   • Dashboard → "Create a Deep Link", or
//   • Content Hub → filter "Text Link" → GET CODE
// The tracking URL looks like:  https://www.booking.com/index.html?aid=XXXXXX&label=YYYY
//   - aid   = Booking affiliate id for your account  (the number after aid=)
//   - label = your tracking label (often your CJ property id / PID)

import { slugify } from './data.js'

export const BOOKING = {
  aid: '', // e.g. '304142'  ← paste your Booking affiliate id here to go live
  label: '', // e.g. 'deala-coupons'  ← optional tracking label

  // Best-matching Booking destination page per travel category slug.
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

// Affiliate / sponsored outbound links must carry these rel values for
// SEO + FTC compliance. Use on every outbound <a> and window.open.
export const OUTBOUND_REL = 'sponsored nofollow noopener noreferrer'

// Is this deal a Booking.com offer?
export const isBookingDeal = (coupon) =>
  /booking\.com/i.test(coupon?.store || '') ||
  /booking\.com/i.test(coupon?.storeName || '')

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

// The Booking destination page that best matches a deal's category.
const bookingPageFor = (coupon) =>
  BOOKING.pages[slugify(coupon?.category || '')] || BOOKING.defaultPage

// The outbound URL for ANY deal card / coupon:
//   • Booking deals   → tracked Booking deep link (once BOOKING.aid is set)
//   • everything else → the retailer's own site
export const dealOutboundUrl = (coupon) => {
  if (!coupon) return '#'
  if (isBookingDeal(coupon)) return bookingAffiliateUrl(bookingPageFor(coupon))
  const site = (coupon.website || coupon.store || '').trim()
  if (!site) return '#'
  return /^https?:\/\//i.test(site) ? site : `https://${site}`
}

// Open a deal's outbound link in a new tab, safely.
export const openDeal = (coupon) => {
  const url = dealOutboundUrl(coupon)
  if (url && url !== '#') window.open(url, '_blank', 'noopener,noreferrer')
}
