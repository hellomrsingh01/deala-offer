import { Link } from 'react-router-dom'
import { storeDeals, featuredBanner } from '../data.js'
import { OUTBOUND_REL } from '../affiliate.js'
import { ArrowRight, BoltIcon } from './icons.jsx'
import SectionHead from './SectionHead.jsx'
import styles from './PopularDeals.module.css'

function StoreRow({ store }) {
  return (
    <div className={styles.store}>
      <div className={styles.logoWrap}>
        <img
          referrerPolicy="no-referrer"
          src={store.logo}
          alt={store.name}
          className={styles.logo}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.url}>{store.url}</div>
        <div className={styles.deal}>{store.deal}</div>
        <div className={styles.counts}>
          <span className={styles.dealsCount}>✓ {store.deals} Deals</span>
          <span className={styles.availCount}>≡ {store.avail} Available</span>
        </div>
      </div>
      <div className={styles.aside}>
        <div className={styles.chips}>
          <span className={styles.featureChip}>
            <BoltIcon size={10} />
            Features
          </span>
          <span className={styles.offChip}>🏷 55% OFF</span>
        </div>
        <a href={store.site} target="_blank" rel={OUTBOUND_REL} className={styles.revealShop}>Reveal Shop</a>
        <a href={store.site} target="_blank" rel={OUTBOUND_REL} className={styles.viewDetails}>View Details</a>
      </div>
    </div>
  )
}

export default function PopularDeals() {
  return (
    <section className={styles.section}>
      <SectionHead title="Most Popular Deals" />
      <div className={styles.layout}>
        <div className={styles.list}>
          {storeDeals.map((store, i) => (
            <StoreRow key={`${store.deal}-${i}`} store={store} />
          ))}
          <Link to="/coupons" className={styles.seeAll}>
            See All Stores
            <ArrowRight size={14} />
          </Link>
        </div>
        <div className={styles.banner}>
          <img
            referrerPolicy="no-referrer"
            src={featuredBanner}
            alt="Featured Deal"
            className={styles.bannerImg}
          />
        </div>
      </div>
    </section>
  )
}
