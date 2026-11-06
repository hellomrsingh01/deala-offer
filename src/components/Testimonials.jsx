import { reviews, reviewQuote, quoteMark } from '../data.js'
import { StarIcon } from './icons.jsx'
import SectionHead from './SectionHead.jsx'
import styles from './Testimonials.module.css'

function Review({ review }) {
  return (
    <div className={styles.card}>
      <img
        referrerPolicy="no-referrer"
        src={quoteMark}
        alt=""
        aria-hidden="true"
        className={styles.quoteMark}
      />
      <p className={styles.quote}>"{reviewQuote}"</p>
      <div className={styles.person}>
        <div className={styles.avatar}>{review.initials}</div>
        <div>
          <div className={styles.name}>{review.name}</div>
          <div className={styles.role}>{review.role}</div>
        </div>
        <div className={styles.stars}>
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} size={13} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <SectionHead title="Customers Feedback with Stories" centered />
      <div className={styles.grid}>
        {reviews.map((review) => (
          <Review key={review.name} review={review} />
        ))}
      </div>
    </section>
  )
}
