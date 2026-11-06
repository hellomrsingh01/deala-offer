import { Link } from 'react-router-dom'
import { categories } from '../data.js'
import styles from './Categories.module.css'

export default function Categories() {
  return (
    <section className={styles.section}>
      <div className={styles.row}>
        {categories.map((cat) => (
          <Link key={cat.slug} to={`/category/${cat.slug}`} className={styles.item}>
            <div className={styles.circle} style={{ background: cat.bg }}>
              <img
                referrerPolicy="no-referrer"
                src={cat.img}
                alt={cat.name}
                className={styles.icon}
              />
            </div>
            <span className={styles.label}>{cat.name}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
