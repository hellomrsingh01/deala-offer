import { tickerItems } from '../data.js'
import { StarIcon } from './icons.jsx'
import styles from './Ticker.module.css'

function Group({ hidden }) {
  return (
    <div className={styles.group} aria-hidden={hidden || undefined}>
      {tickerItems.map((item, i) => (
        <span key={`${item}-${i}`} className={styles.item}>
          <StarIcon size={12} />
          {item}
        </span>
      ))}
    </div>
  )
}

export default function Ticker() {
  return (
    <div className={styles.bar}>
      {/* Two identical groups let the track loop seamlessly. */}
      <div className={styles.track}>
        <Group />
        <Group hidden />
      </div>
    </div>
  )
}
