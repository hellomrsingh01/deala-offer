import { Link, useParams } from 'react-router-dom'
import { getCategoryBySlug, getCouponsByCategory, coupons } from '../data.js'
import PageShell from '../components/PageShell.jsx'
import CouponCard from '../components/CouponCard.jsx'
import { ArrowRight } from '../components/icons.jsx'
import styles from './SingleCategoryPage.module.css'

export default function SingleCategoryPage() {
  const { slug } = useParams()
  const category = getCategoryBySlug(slug)

  if (!category) {
    return (
      <PageShell
        breadcrumb={[{ label: 'Deala', to: '/' }, { label: 'Categories', to: '/categories' }, { label: 'Not found' }]}
        title="Category not found"
        intro="We couldn’t find that category. Browse all categories instead."
        narrow
      >
        <Link to="/categories" className={styles.backLink}>
          View all categories
          <ArrowRight size={14} />
        </Link>
      </PageShell>
    )
  }

  const matches = getCouponsByCategory(slug)
  const featured = coupons.slice(0, 4)

  return (
    <PageShell
      breadcrumb={[
        { label: 'Deala', to: '/' },
        { label: 'Categories', to: '/categories' },
        { label: category.name },
      ]}
      title={`${category.name} Coupons & Deals`}
      intro={`Discover the latest ${category.name.toLowerCase()} coupons, promo codes, and cashback offers from trusted brands, updated regularly.`}
    >
      <div className={styles.banner} style={{ background: category.bg }}>
        <img referrerPolicy="no-referrer" src={category.img} alt={category.name} className={styles.bannerIcon} />
        <div>
          <div className={styles.bannerName}>{category.name}</div>
          <div className={styles.bannerCount}>
            {matches.length} {matches.length === 1 ? 'deal' : 'deals'} available
          </div>
        </div>
      </div>

      {matches.length > 0 ? (
        <div className={styles.grid}>
          {matches.map((coupon) => (
            <CouponCard key={coupon.slug} coupon={coupon} />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <h2 className={styles.emptyTitle}>No active {category.name} coupons right now</h2>
          <p className={styles.emptyText}>
            We’re adding new offers all the time. In the meantime, check out some of our trending deals.
          </p>
          <Link to="/coupons" className={styles.emptyLink}>
            Browse all coupons
            <ArrowRight size={14} />
          </Link>
        </div>
      )}

      {matches.length === 0 && (
        <>
          <h2 className={styles.featuredHeading}>Trending Deals</h2>
          <div className={styles.grid}>
            {featured.map((coupon) => (
              <CouponCard key={coupon.slug} coupon={coupon} />
            ))}
          </div>
        </>
      )}
    </PageShell>
  )
}
