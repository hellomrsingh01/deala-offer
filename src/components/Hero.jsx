import { heroSlides } from '../data.js'
import { ChevronLeft, ChevronRight } from './icons.jsx'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      {heroSlides.map((slide) => (
        <div key={slide.alt} className={styles.slide}>
          <img
            referrerPolicy="no-referrer"
            src={slide.img}
            alt={slide.alt}
            className={styles.image}
          />
          <button type="button" aria-label="Previous" className={`${styles.arrow} ${styles.prev}`}>
            <ChevronLeft size={16} />
          </button>
          <button type="button" aria-label="Next" className={`${styles.arrow} ${styles.next}`}>
            <ChevronRight size={16} />
          </button>
        </div>
      ))}
    </section>
  )
}
