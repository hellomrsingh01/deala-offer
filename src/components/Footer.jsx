import { Link } from 'react-router-dom'
import { logoWhite } from '../data.js'
import { siteInfo } from '../content/site.js'
import { FacebookIcon, TwitterIcon, InstagramIcon } from './icons.jsx'
import styles from './Footer.module.css'

const columns = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Coupons', to: '/coupons' },
      { label: 'Categories', to: '/categories' },
      { label: 'All Deals', to: '/coupons' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Contact Us', to: '/contact' },
      { label: 'Submit Coupon', to: '/contact' },
      { label: 'Support & FAQs', to: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms & Conditions', to: '/terms' },
      { label: 'Cookie Policy', to: '/cookie-policy' },
      { label: 'Affiliate Disclosure', to: '/disclaimer' },
    ],
  },
]

const socials = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Instagram', Icon: InstagramIcon },
]

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms', to: '/terms' },
  { label: 'Cookie Policy', to: '/cookie-policy' },
  { label: 'Affiliate Disclosure', to: '/disclaimer' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <img referrerPolicy="no-referrer" src={logoWhite} alt={siteInfo.name} className={styles.logo} />
          <p className={styles.about}>{siteInfo.tagline}</p>
          <p className={styles.disclosure}>
            {siteInfo.name} is reader-supported. We may earn a commission from qualifying purchases
            made through links on our site, at no extra cost to you.
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
              {col.links.map((link) => (
                <Link key={link.label} to={link.to} className={styles.link}>{link.label}</Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
        </div>
        <div className={styles.legalRow}>
          {legalLinks.map((link) => (
            <Link key={link.label} to={link.to} className={styles.legalLink}>{link.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
