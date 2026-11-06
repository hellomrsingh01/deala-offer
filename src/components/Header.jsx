import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { logo, searchCategories } from '../data.js'
import {
  PhoneIcon,
  UserIcon,
  ChevronDown,
} from './icons.jsx'
import styles from './Header.module.css'

const navLinks = [
  { label: 'Home', caret: true, to: '/' },
  { label: 'Coupons', caret: true, to: '/coupons' },
  { label: 'Stores', caret: true },
  { label: 'Categories', caret: true },
  { label: 'Pages', caret: true },
  { label: 'Contact' },
]

export default function Header() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(searchCategories[0])
  const { pathname } = useLocation()

  const isActive = (link) => {
    if (link.to === '/') return pathname === '/'
    if (link.to === '/coupons') return pathname.startsWith('/coupon')
    return false
  }

  const onSearch = (e) => {
    e.preventDefault()
    // Hook up to real search here.
  }

  return (
    <header className={styles.header}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <Link to="/" className={styles.logoLink}>
          <img referrerPolicy="no-referrer" src={logo} alt="Deala" className={styles.logo} />
        </Link>

        <form className={styles.search} onSubmit={onSearch}>
          <select
            className={styles.searchSelect}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label="Select category"
          >
            {searchCategories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Find Coupon..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className={styles.searchBtn}>Search</button>
        </form>

        <div className={styles.actions}>
          <div className={styles.hotline}>
            <span className={styles.hotlineIcon}>
              <PhoneIcon size={16} />
            </span>
            <div>
              <div className={styles.hotlineNum}>Hotline: 196475</div>
              <div className={styles.hotlineSub}>Call us for free</div>
            </div>
          </div>

          <div className={styles.auth}>
            <a href="#" className={styles.authLink}>
              <UserIcon size={15} />
              Login
            </a>
            <a href="#" className={styles.authLink}>
              <UserIcon size={15} />
              Register
            </a>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className={styles.nav}>
        <div className={styles.navLinks}>
          {navLinks.map((link) => {
            const className = `${styles.navLink} ${isActive(link) ? styles.navLinkActive : ''}`
            return link.to ? (
              <Link key={link.label} to={link.to} className={className}>
                {link.label}
                {link.caret && <ChevronDown size={12} />}
              </Link>
            ) : (
              <a key={link.label} href="#" className={className}>
                {link.label}
                {link.caret && <ChevronDown size={12} />}
              </a>
            )
          })}
        </div>
        <div className={styles.navExtra}>
          <a href="#" className={styles.submitCoupon}>Submit Coupon</a>
          <a href="#" className={styles.support}>Support &amp; FAQs</a>
        </div>
      </nav>
    </header>
  )
}
