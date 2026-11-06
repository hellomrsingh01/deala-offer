import { dealCards } from '../data.js'
import { HeartIcon, ThumbsUp, ThumbsDown, CommentIcon } from './icons.jsx'
import SectionHead from './SectionHead.jsx'
import styles from './TrendingGrid.module.css'

function DealCard({ card }) {
  return (
    <div className={styles.card}>
      <div className={styles.media}>
        <span className={styles.exclusive}>Exclusive</span>
        <button type="button" aria-label="Save deal" className={styles.save}>
          <HeartIcon size={18} />
        </button>
        <img
          referrerPolicy="no-referrer"
          src={card.img}
          alt={card.title}
          className={styles.mediaImg}
        />
      </div>

      <div className={styles.body}>
        <h4 className={styles.title}>{card.title}</h4>
        <div className={styles.priceRow}>
          <span className={styles.price}>{card.price}</span>
          {card.orig && <span className={styles.orig}>{card.orig}</span>}
          {card.badge && <span className={styles.badge}>{card.badge}</span>}
        </div>
        <div className={styles.meta}>
          <span>🌐 {card.store}</span>
          <span>🕐 {card.date}</span>
        </div>
      </div>

      <div className={styles.couponRow}>
        <a href="#" className={styles.reveal}>
          Reveal Coupon
          <span className={styles.code}>{card.code}</span>
        </a>
      </div>

      <div className={styles.stats}>
        <span className={styles.stat}>
          <ThumbsUp size={12} />
          {card.likes}
        </span>
        <span className={styles.stat}>
          <ThumbsDown size={12} />
          {card.dislikes}
        </span>
        <span className={`${styles.stat} ${styles.comments}`}>
          <CommentIcon size={12} />
          {card.comments}
        </span>
      </div>
    </div>
  )
}

export default function TrendingGrid() {
  return (
    <section className={styles.section}>
      <SectionHead title="Top Trending Deals" linkLabel="See All Deals" />
      <div className={styles.grid}>
        {dealCards.map((card, i) => (
          <DealCard key={`${card.title}-${i}`} card={card} />
        ))}
      </div>
    </section>
  )
}
