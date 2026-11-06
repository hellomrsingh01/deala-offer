import { useState } from 'react'
import { Link } from 'react-router-dom'
import { siteInfo } from '../content/site.js'
import PageShell from '../components/PageShell.jsx'
import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon } from '../components/icons.jsx'
import styles from './ContactPage.module.css'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [agree, setAgree] = useState(false)

  const details = [
    { Icon: MailIcon, label: 'Email', value: siteInfo.email, href: `mailto:${siteInfo.email}` },
    { Icon: PhoneIcon, label: 'Phone', value: siteInfo.phone, href: `tel:${siteInfo.phone.replace(/[^+\d]/g, '')}` },
    { Icon: MapPinIcon, label: 'Address', value: siteInfo.address },
    { Icon: ClockIcon, label: 'Hours', value: siteInfo.hours },
  ]

  const onSubmit = (e) => {
    e.preventDefault()
    // Hook up to your contact/email backend here.
    setSubmitted(true)
  }

  return (
    <PageShell
      breadcrumb={[{ label: 'Deala', to: '/' }, { label: 'Contact Us' }]}
      title="Contact Us"
      intro="Have a question, partnership idea, or found an issue with a deal? We’d love to hear from you. Reach out using the details below or send us a message."
    >
      <div className={styles.layout}>
        <aside className={styles.info}>
          {details.map((d) => (
            <div key={d.label} className={styles.infoCard}>
              <span className={styles.infoIcon}>
                <d.Icon size={18} />
              </span>
              <div>
                <div className={styles.infoLabel}>{d.label}</div>
                {d.href ? (
                  <a href={d.href} className={styles.infoValue}>{d.value}</a>
                ) : (
                  <div className={styles.infoValue}>{d.value}</div>
                )}
              </div>
            </div>
          ))}
        </aside>

        <div className={styles.formWrap}>
          {submitted ? (
            <div className={styles.success} role="status">
              <h2 className={styles.successTitle}>Thanks for reaching out!</h2>
              <p className={styles.successText}>
                Your message has been received. Our team typically replies within one business day.
              </p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={onSubmit}>
              <div className={styles.row}>
                <label className={styles.field}>
                  <span className={styles.label}>Name *</span>
                  <input type="text" className={styles.input} placeholder="Your name" required />
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>Email *</span>
                  <input type="email" className={styles.input} placeholder="you@example.com" required />
                </label>
              </div>
              <label className={styles.field}>
                <span className={styles.label}>Subject</span>
                <input type="text" className={styles.input} placeholder="How can we help?" />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>Message *</span>
                <textarea className={styles.textarea} rows={6} placeholder="Write your message..." required />
              </label>
              <label className={styles.consent}>
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  required
                />
                <span>
                  I agree to the <Link to="/privacy-policy" className={styles.consentLink}>Privacy Policy</Link> and consent
                  to my data being used to respond to my enquiry.
                </span>
              </label>
              <button type="submit" className={styles.submit} disabled={!agree}>
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </PageShell>
  )
}
