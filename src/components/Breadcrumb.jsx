import { Link } from 'react-router-dom'
import styles from './Breadcrumb.module.css'

// items: [{ label, to? }] — the last item renders as the current page.
export default function Breadcrumb({ items }) {
  return (
    <nav className={styles.bar} aria-label="Breadcrumb">
      <ol className={styles.list}>
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={`${item.label}-${i}`} className={styles.item}>
              {item.to && !last ? (
                <Link to={item.to} className={styles.link}>{item.label}</Link>
              ) : (
                <span className={last ? styles.current : styles.link}>{item.label}</span>
              )}
              {!last && <span className={styles.sep} aria-hidden="true">•</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
