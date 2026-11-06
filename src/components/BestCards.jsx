import { shoppingCards } from '../data.js'
import { ClockIcon, ShieldIcon } from './icons.jsx'
import SectionHead from './SectionHead.jsx'
import styles from './BestCards.module.css'

function Card({ card }) {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <div className={styles.brand}>
          <div className={styles.logoWrap}>
            <img
              referrerPolicy="no-referrer"
              src={card.logo}
              alt={card.name}
              className={styles.logo}
            />
          </div>
          <span className={styles.name}>{card.name}</span>
        </div>
        <div className={styles.headRight}>
          <span className={styles.end}>
            <ClockIcon size={10} />
            End in : {card.end}
          </span>
          <a href="#" className={styles.apply}>Apply Now</a>
        </div>
      </div>

      <div className={styles.body}>
        <h4 className={styles.save}>Save up to $450,00</h4>
        <p className={styles.desc}>
          Save on dining, grocery shopping, &amp; food delivery with exclusive offers.
        </p>
        <div className={styles.reward}>
          <ShieldIcon size={16} />
          <span className={styles.rewardText}>Upto 25% Rewards Cashback</span>
        </div>
      </div>

      <div className={styles.art}>
        <img
          referrerPolicy="no-referrer"
          src={card.cardImg}
          alt=""
          aria-hidden="true"
          className={styles.artImg}
        />
      </div>
    </div>
  )
}

export default function BestCards() {
  return (
    <section className={styles.section}>
      <SectionHead title="Best Cards For Shopping" linkLabel="See All Cards" />
      <div className={styles.grid}>
        {shoppingCards.map((card, i) => (
          <Card key={`${card.name}-${i}`} card={card} />
        ))}
      </div>
    </section>
  )
}
