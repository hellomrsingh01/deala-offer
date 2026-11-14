import { Link } from 'react-router-dom'
import { ArrowRight } from './icons.jsx'
import styles from './SectionHead.module.css'

// Title + optional "See All" link used atop most sections.
export default function SectionHead({ title, linkLabel, linkTo = '/coupons', centered = false }) {
  if (centered) {
    return <h2 className={styles.centeredTitle}>{title}</h2>
  }

  return (
    <div className={styles.head}>
      <h2 className={styles.title}>{title}</h2>
      {linkLabel && (
        <Link to={linkTo} className={styles.link}>
          {linkLabel}
          <ArrowRight size={14} />
        </Link>
      )}
    </div>
  )
}
