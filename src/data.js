// Content for the Deala site.
// Extracted from the design mockup's renderVals(); swap for a real
// data source (API/CMS) when wiring the site up.

const BASE = 'https://softivus.com/wp/deala/wp-content/uploads/2025'

export const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export const categories = [
  { name: 'Travel', img: `${BASE}/06/travel_cat.webp`, bg: '#FEE2E2' },
  { name: 'Sports', img: `${BASE}/06/sports_cat.webp`, bg: '#D1FAE5' },
  { name: 'Shoe', img: `${BASE}/06/shoe_cat.webp`, bg: '#CFFAFE' },
  { name: 'Jwelry', img: `${BASE}/06/jwelry_cat.webp`, bg: '#FEF3C7' },
  { name: 'Health', img: `${BASE}/06/health_cat.webp`, bg: '#D1FAE5' },
  { name: 'Food', img: `${BASE}/06/food_cat.webp`, bg: '#DCFCE7' },
  { name: 'Fitness', img: `${BASE}/06/fitness_cat.webp`, bg: '#FCE7F3' },
  { name: 'Finance', img: `${BASE}/06/finance_cat.webp`, bg: '#EDE9FE' },
  { name: 'Fashion', img: `${BASE}/06/fashion_cat.webp`, bg: '#FEE2E2' },
  { name: 'Entertain', img: `${BASE}/06/entertainment_cat.webp`, bg: '#FEF9C3' },
  { name: 'Electronics', img: `${BASE}/06/electronics_cat.webp`, bg: '#DBEAFE' },
]

export const countdown = [
  { val: '11', label: 'Day' },
  { val: '22', label: 'Hours' },
  { val: '4', label: 'Min' },
  { val: '19', label: 'Sec' },
]

// Store logos keyed by display name (used across coupon + store views).
const STORE_LOGOS = {
  'Best Buy': `${BASE}/07/bestbuy.webp`,
  Amazon: `${BASE}/07/amazon.webp`,
  Ebay: `${BASE}/07/ebay.webp`,
  'Ali Express': `${BASE}/07/aliexpress.webp`,
  Yoox: `${BASE}/07/yoox.webp`,
  Costco: `${BASE}/07/costco.webp`,
}

// Canonical coupon list. The home deal grid, the Coupons listing page and
// the single-coupon page all read from this so links stay consistent.
export const coupons = [
  { title: 'Instant 55% Cashback', img: `${BASE}/07/Image-6.jpg`, price: '$400', orig: '$450', badge: '-11%', store: 'bestbuy.com', storeName: 'Best Buy', category: 'Electronics', date: '30 Sep, 2025', code: 'YYTT', likes: 23, dislikes: 3, comments: 0, exclusive: true, verified: true },
  { title: 'Extra 10% Off Now', img: `${BASE}/07/Image-7.jpg`, price: '$150', orig: '$155', badge: '-3%', store: 'aliexpress.com', storeName: 'Ali Express', category: 'Fashion', date: '30 Sep, 2025', code: 'TYRY', likes: 136, dislikes: 9, comments: 0, exclusive: true, verified: true },
  { title: 'Todays Cashback Now', img: `${BASE}/07/Image-18.jpg`, price: '$299', orig: '', badge: '', store: 'yoox.com', storeName: 'Yoox', category: 'Fashion', date: '30 Sep, 2025', code: 'TYRY', likes: 17, dislikes: 3, comments: 0, exclusive: false, verified: true },
  { title: 'Todays Deals On Fire', img: `${BASE}/07/Image-15.jpg`, price: '$299', orig: '', badge: '', store: 'hostinger.com', storeName: 'Hostinger', category: 'Finance', date: '30 Sep, 2025', code: 'TYRY', likes: 12, dislikes: 2, comments: 0, exclusive: false, verified: false },
  { title: 'Flat 20% OFF Today', img: `${BASE}/07/Image-22.jpg`, price: '$200', orig: '$220', badge: '-9%', store: 'amazon.com', storeName: 'Amazon', category: 'Electronics', date: '30 Sep, 2025', code: 'UUYT', likes: 10, dislikes: 0, comments: 0, exclusive: true, verified: true },
  { title: '15% Cashback Inside', img: `${BASE}/07/Image-11.jpg`, price: '$310', orig: '', badge: '', store: 'xbox.com', storeName: 'Xbox', category: 'Entertainment', date: '30 Sep, 2025', code: 'OMMF', likes: 9, dislikes: 3, comments: 0, exclusive: false, verified: true },
  { title: '35% Coupon Rush', img: `${BASE}/07/Image-20.jpg`, price: '$180', orig: '', badge: '', store: 'ebay.com', storeName: 'Ebay', category: 'Electronics', date: '30 Sep, 2025', code: 'OMMF', likes: 4, dislikes: 0, comments: 0, exclusive: false, verified: false },
  { title: '10% Save More Today', img: `${BASE}/07/Image.jpg`, price: '$220', orig: '', badge: '', store: 'crocs.com', storeName: 'Crocs', category: 'Shoe', date: '30 Sep, 2025', code: 'TTYU', likes: 0, dislikes: 0, comments: 0, exclusive: false, verified: false },
].map((c) => ({
  ...c,
  slug: slugify(c.title),
  storeLogo: STORE_LOGOS[c.storeName] || null,
  storeLocation: 'Seattle, United Kingdom',
  validUntil: '30 Sep, 2025',
  website: c.store,
  success: 88,
  dealsCount: '90911',
}))

export const getCouponBySlug = (slug) => coupons.find((c) => c.slug === slug)

// Home-page views derived from the canonical list.
export const dealCards = coupons
export const sideDeals = coupons.slice(0, 3)

// Shared editorial copy reused on single-coupon pages (mirrors the demo).
export const couponDescription = [
  'Transform your space with stunning lighting solutions, now available at an unbeatable price! For a limited time, enjoy 50% off all lighting fixtures by design, offering a perfect blend of style and functionality for every room. Whether you’re upgrading your home, office, or any space that needs a touch of elegance, our curated collection has something for every taste.',
  'Save on everyday essentials with exclusive offers from trusted partner brands. Stack this coupon with ongoing promotions to maximize your savings, and track every deal from one simple dashboard.',
]

export const couponBenefits = [
  { title: 'Innovative Designs', text: 'Contemporary, vintage, and modern styles to complement any decor.' },
  { title: 'Energy-Efficient Options', text: 'Beautiful, eco-friendly lighting with energy-efficient LED options.' },
  { title: 'High-Quality Craftsmanship', text: 'Premium materials for longevity and superior performance.' },
  { title: 'Wide Selection', text: 'From chandeliers to wall sconces, a solution for every room.' },
]

export const couponLovePoints = [
  'Huge savings on everyday purchases',
  'Quick cashback process',
  'Trusted partner brands and stores',
  'Seamless experience with easy deal tracking',
]

// "All Categories" sidebar widget on coupon pages.
export const categoryCounts = [
  { name: 'Beauty', count: 1 },
  { name: 'Dining', count: 2 },
  { name: 'Education', count: 0 },
  { name: 'Electronics', count: 1 },
  { name: 'Entertainment', count: 1 },
  { name: 'Fashion', count: 2 },
  { name: 'Finance', count: 0 },
  { name: 'Fitness', count: 1 },
  { name: 'Food', count: 0 },
  { name: 'Health', count: 1 },
  { name: 'Jwelry', count: 0 },
  { name: 'Shoe', count: 1 },
  { name: 'Sports', count: 1 },
  { name: 'Travel', count: 1 },
]

export const storeDeals = [
  { logo: `${BASE}/07/aliex.webp`, name: 'Ali Express', url: 'demo.com', deal: 'Get 30% Off Today!', deals: '574', avail: '125' },
  { logo: `${BASE}/07/Image31.png`, name: 'Ali Express', url: 'demo.com', deal: 'Instant 15% Off', deals: '574', avail: '125' },
  { logo: `${BASE}/07/Image24.png`, name: 'Ali Express', url: 'demo.com', deal: 'Save 20% Today', deals: '574', avail: '125' },
  { logo: `${BASE}/07/image36.png`, name: 'Ali Express', url: 'demo.com', deal: '9% Cashback Now', deals: '574', avail: '125' },
]

export const shoppingCards = [
  { logo: `${BASE}/07/amazon.webp`, name: 'Amazon', end: '20:25:45', cardImg: `${BASE}/07/card_image1.webp` },
  { logo: `${BASE}/07/bestbuy.webp`, name: 'Best Buy', end: '20:25:45', cardImg: `${BASE}/07/card_image_2.webp` },
  { logo: `${BASE}/07/costco.webp`, name: 'Costco', end: '20:25:45', cardImg: `${BASE}/07/card_image_3.webp` },
  { logo: `${BASE}/07/yoox.webp`, name: 'Yoox', end: '20:25:45', cardImg: `${BASE}/07/card_image1.webp` },
  { logo: `${BASE}/07/ebay.webp`, name: 'Ebay', end: '20:25:45', cardImg: `${BASE}/07/card_image_2.webp` },
  { logo: `${BASE}/07/aliexpress.webp`, name: 'Ali Express', end: '20:25:45', cardImg: `${BASE}/07/card_image_3.webp` },
]

export const tickerItems = [
  'Savings', 'Coupons', 'Deals', 'Cashback', 'Discount', 'Daily Deals', 'Promo Code',
]

export const reviews = [
  { initials: 'KA', name: 'Kende Attila', role: 'Teacher' },
  { initials: 'JD', name: 'Jhone Doe', role: 'Instructor' },
  { initials: 'AS', name: 'Adam Smith', role: 'Specialist' },
]

// Shared quote used by every testimonial card in the mockup.
export const reviewQuote =
  "I've saved so much money using this platform! From groceries to electronics, the cashback offers are legit and timely. What I love most is how easy it is to request money after making a purchase."

export const searchCategories = [
  'Select Category', 'Beauty', 'Electronics', 'Fashion', 'Food', 'Travel',
]

// Hero + sub-banner artwork.
export const heroSlides = [
  { img: `${BASE}/07/banner_5_1.webp`, alt: 'Style Drop – Up to 50% Off' },
  { img: `${BASE}/07/banner_6_1.webp`, alt: '45% Off' },
]

export const subBanners = [
  { img: `${BASE}/07/banner_7_1.webp`, alt: 'Sale Up to 50%' },
  { img: `${BASE}/07/banner_7_2.webp`, alt: 'Extra 40% Off' },
  { img: `${BASE}/07/banner_7_3.webp`, alt: 'Sale Up to 50%' },
]

export const featuredBanner = `${BASE}/07/banner-1.webp`
export const flashDealArt = `${BASE}/07/layer_1.webp`

// Brand assets.
export const logo = 'https://softivus.com/wp/deala/wp-content/uploads/2025/06/logo.png'
export const logoWhite = 'https://softivus.com/wp/deala/wp-content/uploads/2025/08/logo-white.png'
export const quoteMark = 'https://softivus.com/wp/deala/wp-content/uploads/2025/06/quotes.png'
