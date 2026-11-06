import { Link } from 'react-router-dom'
import { siteInfo } from '../content/site.js'
import PageShell from '../components/PageShell.jsx'
import {
  TagIcon,
  ShieldIcon,
  StarIcon,
  SearchIcon,
  BoltIcon,
  CheckIcon,
  ArrowRight,
} from '../components/icons.jsx'
import styles from './AboutPage.module.css'

const features = [
  {
    Icon: TagIcon,
    title: 'Curated Deals',
    text: 'We gather coupons, promo codes, and cashback offers from thousands of retailers in one easy place.',
  },
  {
    Icon: ShieldIcon,
    title: 'Verified Savings',
    text: 'Our team reviews and updates offers so you spend less time hunting and more time saving.',
  },
  {
    Icon: StarIcon,
    title: 'Trusted Brands',
    text: 'From everyday essentials to premium electronics, we partner with brands shoppers know and trust.',
  },
]

const steps = [
  { Icon: SearchIcon, title: 'Search', text: 'Browse categories or search for the store and product you want.' },
  { Icon: BoltIcon, title: 'Reveal', text: 'Reveal the coupon code or activate the cashback offer in one click.' },
  { Icon: CheckIcon, title: 'Save', text: 'Apply the code at checkout and enjoy your discount instantly.' },
]

export default function AboutPage() {
  return (
    <PageShell
      breadcrumb={[{ label: 'Deala', to: '/' }, { label: 'About Us' }]}
      title={`About ${siteInfo.name}`}
      intro={`${siteInfo.name} is a coupons and cashback platform on a simple mission: to help shoppers save money with confidence. We bring together verified deals from trusted retailers so you always get a fair price.`}
    >
      <div className={styles.features}>
        {features.map((f) => (
          <div key={f.title} className={styles.feature}>
            <span className={styles.featureIcon}>
              <f.Icon size={22} />
            </span>
            <h3 className={styles.featureTitle}>{f.title}</h3>
            <p className={styles.featureText}>{f.text}</p>
          </div>
        ))}
      </div>

      <div className={styles.steps}>
        <h2 className={styles.sectionTitle}>How {siteInfo.name} Works</h2>
        <div className={styles.stepGrid}>
          {steps.map((s, i) => (
            <div key={s.title} className={styles.step}>
              <span className={styles.stepNum}>{i + 1}</span>
              <span className={styles.stepIcon}>
                <s.Icon size={20} />
              </span>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepText}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.commitment}>
        <h2 className={styles.sectionTitle}>Our Commitment</h2>
        <p className={styles.commitText}>
          We believe saving money should be straightforward and honest. That is why we clearly label
          exclusive and sponsored offers, keep our listings as accurate as possible, and are upfront
          about how we earn through advertising and affiliate partnerships. Prices and availability
          are set by retailers and can change, so we always encourage you to confirm the final price
          before you buy.
        </p>
        <div className={styles.ctaRow}>
          <Link to="/coupons" className={styles.primaryBtn}>
            Browse Coupons
            <ArrowRight size={14} />
          </Link>
          <Link to="/contact" className={styles.secondaryBtn}>Contact Us</Link>
        </div>
      </div>
    </PageShell>
  )
}
