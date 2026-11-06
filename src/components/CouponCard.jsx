import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShareIcon } from './icons.jsx'
import styles from './CouponCard.module.css'

const CARD_BLURB =
  'Transform your space with stunning lighting solutions, now available at an unbeatable price for a limited time.'

// Listing-style coupon card used on the Coupons and Category pages.
export default function CouponCard({ coupon }) {
  const [copied, setCopied] = useState(false)
  const to = `/coupon/${coupon.slug}`

  const copy = (e) => {
    e.preventDefault()
    setCopied(true)
    try {
      navigator.clipboard?.writeText(coupon.code)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <article className={styles.card}>
      <Link to={to} className={styles.cardMedia}>
        <span className={styles.tagBadge}>{coupon.exclusive ? 'Exclusive' : 'Verified'}</span>
        <img referrerPolicy="no-referrer" src={coupon.img} alt={coupon.title} className={styles.cardImg} />
      </Link>
      <div className={styles.cardBody}>
        <Link to={to} className={styles.cardTitle}>{coupon.title}</Link>
        <div className={styles.priceRow}>
          <span className={styles.price}>{coupon.price}</span>
          {coupon.orig && <span className={styles.orig}>{coupon.orig}</span>}
          {coupon.badge && <span className={styles.badge}>{coupon.badge}</span>}
        </div>
        <p className={styles.blurb}>{CARD_BLURB}</p>
      </div>
      <div className={styles.cardFoot}>
        <button type="button" className={styles.getCode} onClick={copy}>
          {copied ? 'Copied!' : 'GET CODE'}
          <span className={styles.code}>{coupon.code}</span>
        </button>
        <span className={styles.share}>
          <ShareIcon size={13} />
          Share &amp; Earn
        </span>
      </div>
    </article>
  )
}
