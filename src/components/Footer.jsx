import { Link } from 'react-router-dom'
import { logoWhite } from '../data.js'
import { FacebookIcon, TwitterIcon, InstagramIcon } from './icons.jsx'
import styles from './Footer.module.css'

// Footer labels that map to real routes; others stay as placeholders.
const ROUTES = { Home: '/', Coupons: '/coupons' }

const columns = [
  { title: 'Quick Links', links: ['Home', 'Coupons', 'Stores', 'Categories', 'Contact'] },
  { title: 'Top Stores', links: ['Amazon', 'Best Buy', 'AliExpress', 'eBay', 'Costco'] },
  { title: 'Support', links: ['FAQs', 'Submit Coupon', 'Privacy Policy', 'Terms of Use'] },
]

const socials = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Instagram', Icon: InstagramIcon },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <img
            referrerPolicy="no-referrer"
            src={logoWhite}
            alt="Deala"
            className={styles.logo}
          />
          <p className={styles.about}>
            Your one-stop destination for the best coupons, cashback deals, and promo codes
            from top brands.
          </p>
          <div className={styles.socials}>
            {socials.map(({ label, Icon }) => (
              <a key={label} href="#" aria-label={label} className={styles.social}>
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className={styles.colTitle}>{col.title}</h4>
            <div className={styles.colLinks}>
              {col.links.map((link) =>
                ROUTES[link] ? (
                  <Link key={link} to={ROUTES[link]} className={styles.link}>{link}</Link>
                ) : (
                  <a key={link} href="#" className={styles.link}>{link}</a>
                ),
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.copyright}>© 2025 Deala. All rights reserved.</div>
    </footer>
  )
}
