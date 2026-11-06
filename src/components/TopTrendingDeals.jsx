import { useState } from 'react'
import { Link } from 'react-router-dom'
import { countdown, sideDeals, flashDealArt } from '../data.js'
import { ArrowRight, MailIcon, SendIcon, ShareIcon } from './icons.jsx'
import SectionHead from './SectionHead.jsx'
import styles from './TopTrendingDeals.module.css'

const SIDE_DEAL_BLURB =
  'Transform your space with stunning lighting solutions, now available at an unbeatable price! For a limited time, enjoy 50% off...'

function FlashDeal() {
  return (
    <div className={styles.flash}>
      <div>
        <div className={styles.flashBadge}>
          <span>🔥</span>
          <span className={styles.flashBadgeText}>Flash Deal</span>
        </div>
        <h3 className={styles.flashTitle}>75% OFF</h3>
        <p className={styles.flashText}>
          Enjoy a discount of up to 35% on all Coupons using the code "FG6556KD"!
        </p>
        <div className={styles.countdown}>
          {countdown.map((unit) => (
            <div key={unit.label} className={styles.unit}>
              <div className={styles.unitBox}>
                <div className={styles.unitVal}>{unit.val}</div>
              </div>
              <div className={styles.unitLabel}>{unit.label}</div>
            </div>
          ))}
        </div>
      </div>
      <a href="#" className={styles.flashCta}>
        Reveal coupon
        <ArrowRight size={14} />
      </a>
      <img
        referrerPolicy="no-referrer"
        src={flashDealArt}
        alt=""
        aria-hidden="true"
        className={styles.flashArt}
      />
    </div>
  )
}

function Subscribe() {
  const [email, setEmail] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    // Hook up to a mailing list here.
  }

  return (
    <form className={styles.subscribe} onSubmit={onSubmit}>
      <div className={styles.subscribeHead}>
        <span className={styles.subscribeIcon}>
          <MailIcon size={17} />
        </span>
        <h4 className={styles.subscribeTitle}>Subscribe to our list</h4>
      </div>
      <input
        type="email"
        className={styles.subscribeInput}
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className={styles.subscribeBtn}>
        Subscribe
        <SendIcon size={14} />
      </button>
      <p className={styles.subscribeNote}>Don't worry, we don't spam</p>
    </form>
  )
}

function SideDeal({ deal }) {
  const to = `/coupon/${deal.slug}`
  return (
    <div className={styles.deal}>
      <Link to={to} className={styles.dealImgWrap}>
        <img
          referrerPolicy="no-referrer"
          src={deal.img}
          alt={deal.title}
          className={styles.dealImg}
        />
      </Link>
      <div className={styles.dealBody}>
        <Link to={to} className={styles.dealTitle}>{deal.title}</Link>
        <div className={styles.priceRow}>
          <span className={styles.price}>{deal.price}</span>
          {deal.orig && <span className={styles.orig}>{deal.orig}</span>}
          {deal.badge && <span className={styles.badge}>{deal.badge}</span>}
        </div>
        <p className={styles.dealBlurb}>{SIDE_DEAL_BLURB}</p>
      </div>
      <div className={styles.dealAside}>
        <Link to={to} className={styles.reveal}>
          Reveal Coupon
          <span className={styles.revealCode}>{deal.code}</span>
        </Link>
        <span className={styles.share}>
          <ShareIcon size={12} />
          Share &amp; Earn
        </span>
      </div>
    </div>
  )
}

export default function TopTrendingDeals() {
  return (
    <section className={styles.section}>
      <SectionHead title="Top Trending Deals" linkLabel="See All Deals" />
      <div className={styles.layout}>
        <div className={styles.left}>
          <FlashDeal />
          <Subscribe />
        </div>
        <div className={styles.right}>
          {sideDeals.map((deal) => (
            <SideDeal key={deal.title} deal={deal} />
          ))}
          <a href="#" className={styles.seeAll}>
            See All Deals
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
