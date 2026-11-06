import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { logo, searchCategories, categories } from '../data.js'
import {
  PhoneIcon,
  UserIcon,
  ChevronDown,
  ArrowRight,
} from './icons.jsx'
import styles from './Header.module.css'

const navLinks = [
  { label: 'Home', caret: true, to: '/' },
  { label: 'Coupons', caret: true, to: '/coupons' },
  { label: 'Categories', caret: true, to: '/categories', dropdown: true },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(searchCategories[0])
  const { pathname } = useLocation()

  const isActive = (link) => {
    if (link.to === '/') return pathname === '/'
    if (link.label === 'Coupons') return pathname === '/coupons' || pathname.startsWith('/coupon/')
    if (link.label === 'Categories') return pathname === '/categories' || pathname.startsWith('/category/')
    if (link.label === 'Contact') return pathname === '/contact'
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

            if (link.dropdown) {
              return (
                <div key={link.label} className={styles.navItem}>
                  <Link to={link.to} className={className}>
                    {link.label}
                    <ChevronDown size={12} />
                  </Link>
                  <div className={styles.dropdown}>
                    <div className={styles.dropdownGrid}>
                      {categories.map((cat) => (
                        <Link
                          key={cat.slug}
                          to={`/category/${cat.slug}`}
                          className={styles.dropdownItem}
                        >
                          <img
                            referrerPolicy="no-referrer"
                            src={cat.img}
                            alt=""
                            aria-hidden="true"
                            className={styles.dropdownImg}
                          />
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                    <Link to="/categories" className={styles.dropdownAll}>
                      View all categories
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              )
            }

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
          <Link to="/contact" className={styles.submitCoupon}>Submit Coupon</Link>
          <Link to="/contact" className={styles.support}>Support &amp; FAQs</Link>
        </div>
      </nav>
    </header>
  )
}
