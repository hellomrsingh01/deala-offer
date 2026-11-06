import { subBanners } from '../data.js'
import styles from './SubBanner.module.css'

export default function SubBanner() {
  return (
    <section className={styles.grid}>
      {subBanners.map((banner) => (
        <div key={banner.alt + banner.img} className={styles.cell}>
          <img
            referrerPolicy="no-referrer"
            src={banner.img}
            alt={banner.alt}
            className={styles.image}
          />
        </div>
      ))}
    </section>
  )
}
