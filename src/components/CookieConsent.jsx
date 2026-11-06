import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './CookieConsent.module.css'

const STORAGE_KEY = 'deala_cookie_consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Show the banner only if the visitor hasn't made a choice yet.
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true)
      }
    } catch {
      setVisible(true)
    }
  }, [])

  const choose = (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      /* storage unavailable */
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className={styles.banner} role="dialog" aria-label="Cookie consent">
      <p className={styles.text}>
        We use cookies to improve your experience, analyse traffic, and deliver relevant ads. See our{' '}
        <Link to="/cookie-policy" className={styles.link}>Cookie Policy</Link> for details.
      </p>
      <div className={styles.actions}>
        <button type="button" className={styles.decline} onClick={() => choose('declined')}>
          Decline
        </button>
        <button type="button" className={styles.accept} onClick={() => choose('accepted')}>
          Accept All
        </button>
      </div>
    </div>
  )
}
