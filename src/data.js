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
  { name: 'Entertainment', img: `${BASE}/06/entertainment_cat.webp`, bg: '#FEF9C3' },
  { name: 'Electronics', img: `${BASE}/06/electronics_cat.webp`, bg: '#DBEAFE' },
].map((c) => ({ ...c, slug: slugify(c.name) }))

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
  // Travel
  { title: 'Flat 30% Off Hotels', img: `${BASE}/07/Image-3.jpg`, price: '$120', orig: '$180', badge: '-33%', store: 'expedia.com', storeName: 'Expedia', category: 'Travel', date: '30 Sep, 2025', code: 'TRVL30', likes: 44, dislikes: 2, comments: 0, exclusive: true, verified: true },
  { title: 'Weekend Getaway Deal', img: `${BASE}/07/Image-5.jpg`, price: '$89', orig: '', badge: '', store: 'booking.com', storeName: 'Booking', category: 'Travel', date: '30 Sep, 2025', code: 'BOOK15', likes: 31, dislikes: 1, comments: 0, exclusive: false, verified: true },
  // Sports
  { title: 'Gear Up 25% Off', img: `${BASE}/07/Image-10.jpg`, price: '$75', orig: '$100', badge: '-25%', store: 'nike.com', storeName: 'Nike', category: 'Sports', date: '30 Sep, 2025', code: 'SPRT25', likes: 58, dislikes: 4, comments: 0, exclusive: true, verified: true },
  { title: 'Team Jersey Offer', img: `${BASE}/07/Image-20.jpg`, price: '$40', orig: '$55', badge: '-27%', store: 'adidas.com', storeName: 'Adidas', category: 'Sports', date: '30 Sep, 2025', code: 'SPORT10', likes: 22, dislikes: 2, comments: 0, exclusive: false, verified: false },
  // Jwelry
  { title: 'Diamond Studs 40% Off', img: `${BASE}/07/Image-18.jpg`, price: '$250', orig: '$420', badge: '-40%', store: 'pandora.com', storeName: 'Pandora', category: 'Jwelry', date: '30 Sep, 2025', code: 'GEM40', likes: 67, dislikes: 3, comments: 0, exclusive: true, verified: true },
  { title: 'Gold Chain Deal', img: `${BASE}/07/Image-22.jpg`, price: '$399', orig: '', badge: '', store: 'tiffany.com', storeName: 'Tiffany', category: 'Jwelry', date: '30 Sep, 2025', code: 'JWL20', likes: 29, dislikes: 1, comments: 0, exclusive: false, verified: true },
  // Health
  { title: 'Vitamins BOGO Free', img: `${BASE}/07/Image-6.jpg`, price: '$25', orig: '$50', badge: '-50%', store: 'iherb.com', storeName: 'iHerb', category: 'Health', date: '30 Sep, 2025', code: 'HLTH50', likes: 41, dislikes: 2, comments: 0, exclusive: false, verified: true },
  { title: 'Wellness Box 30% Off', img: `${BASE}/07/Image-7.jpg`, price: '$60', orig: '$85', badge: '-29%', store: 'cvs.com', storeName: 'CVS', category: 'Health', date: '30 Sep, 2025', code: 'WELL30', likes: 35, dislikes: 3, comments: 0, exclusive: true, verified: false },
  // Food
  { title: 'Grocery $20 Off', img: `${BASE}/07/Image-11.jpg`, price: '$80', orig: '$100', badge: '-20%', store: 'instacart.com', storeName: 'Instacart', category: 'Food', date: '30 Sep, 2025', code: 'FOOD20', likes: 52, dislikes: 5, comments: 0, exclusive: false, verified: true },
  { title: 'Meal Kit Half Price', img: `${BASE}/07/Image-15.jpg`, price: '$45', orig: '$90', badge: '-50%', store: 'hellofresh.com', storeName: 'HelloFresh', category: 'Food', date: '30 Sep, 2025', code: 'MEAL50', likes: 73, dislikes: 4, comments: 0, exclusive: true, verified: true },
  // Fitness
  { title: 'Gym Pass 20% Off', img: `${BASE}/07/Image-3.jpg`, price: '$39', orig: '$49', badge: '-20%', store: 'classpass.com', storeName: 'ClassPass', category: 'Fitness', date: '30 Sep, 2025', code: 'FIT20', likes: 28, dislikes: 1, comments: 0, exclusive: false, verified: true },
  { title: 'Protein Stack Deal', img: `${BASE}/07/Image-5.jpg`, price: '$55', orig: '$70', badge: '-21%', store: 'myprotein.com', storeName: 'MyProtein', category: 'Fitness', date: '30 Sep, 2025', code: 'PRO21', likes: 19, dislikes: 2, comments: 0, exclusive: false, verified: false },
  // Finance (2nd)
  { title: 'Premium Plan 3 Months Free', img: `${BASE}/07/Image-10.jpg`, price: '$30', orig: '$90', badge: '-66%', store: 'mint.com', storeName: 'Mint', category: 'Finance', date: '30 Sep, 2025', code: 'FIN66', likes: 15, dislikes: 1, comments: 0, exclusive: true, verified: true },
  // Entertainment (2nd)
  { title: 'Stream 2 Months Free', img: `${BASE}/07/Image-20.jpg`, price: '$20', orig: '$30', badge: '-33%', store: 'netflix.com', storeName: 'Netflix', category: 'Entertainment', date: '30 Sep, 2025', code: 'PLAY20', likes: 88, dislikes: 6, comments: 0, exclusive: true, verified: true },
  // Shoe (2nd)
  { title: 'Sneaker Drop 35% Off', img: `${BASE}/07/Image-18.jpg`, price: '$89', orig: '$140', badge: '-36%', store: 'nike.com', storeName: 'Nike', category: 'Shoe', date: '30 Sep, 2025', code: 'SHOE35', likes: 61, dislikes: 3, comments: 0, exclusive: true, verified: true },
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

export const getCategoryBySlug = (slug) => categories.find((c) => c.slug === slug)

export const getCouponsByCategory = (slug) =>
  coupons.filter((c) => slugify(c.category) === slug)

// Category list with how many coupons each currently has.
export const categoriesWithCounts = categories.map((c) => ({
  ...c,
  count: coupons.filter((x) => slugify(x.category) === c.slug).length,
}))

// Home-page views derived from the canonical list.
export const dealCards = coupons.slice(0, 8)
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
