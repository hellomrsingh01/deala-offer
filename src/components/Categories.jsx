import { categories } from '../data.js'
import styles from './Categories.module.css'

export default function Categories() {
  return (
    <section className={styles.section}>
      <div className={styles.row}>
        {categories.map((cat) => (
          <a key={cat.name} href="#" className={styles.item}>
            <div className={styles.circle} style={{ background: cat.bg }}>
              <img
                referrerPolicy="no-referrer"
                src={cat.img}
                alt={cat.name}
                className={styles.icon}
              />
            </div>
            <span className={styles.label}>{cat.name}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
