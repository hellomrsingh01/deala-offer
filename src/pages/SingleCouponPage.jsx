import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  getCouponBySlug,
  categoryCounts,
  couponDescription,
  couponBenefits,
  couponLovePoints,
  slugify,
} from '../data.js'
import Breadcrumb from '../components/Breadcrumb.jsx'
import {
  CheckIcon,
  ThumbsUp,
  ThumbsDown,
  StarIcon,
  ArrowRight,
  MapPinIcon,
} from '../components/icons.jsx'
import styles from './SingleCouponPage.module.css'

function StoreAvatar({ coupon, className }) {
  if (coupon.storeLogo) {
    return (
      <div className={className}>
        <img referrerPolicy="no-referrer" src={coupon.storeLogo} alt={coupon.storeName} className={styles.storeLogoImg} />
      </div>
    )
  }
  return <div className={`${className} ${styles.storeInitial}`}>{coupon.storeName.charAt(0)}</div>
}

function CodeBox({ code }) {
  const [revealed, setRevealed] = useState(false)
  const [copied, setCopied] = useState(false)

  const onClick = () => {
    if (!revealed) {
      setRevealed(true)
    } else {
      setCopied(true)
    }
    try {
      navigator.clipboard?.writeText(code)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className={styles.codeField}>
      <span className={styles.codeText}>{revealed ? code : `${code.slice(0, 2)}*****`}</span>
      <button type="button" className={styles.revealBtn} onClick={onClick}>
        {copied ? 'Copied!' : revealed ? 'Copy Code' : 'Reveal Code'}
      </button>
    </div>
  )
}

function SidebarGetCode({ code }) {
  const [copied, setCopied] = useState(false)
  const onClick = () => {
    setCopied(true)
    try {
      navigator.clipboard?.writeText(code)
    } catch {
      /* clipboard unavailable */
    }
  }
  return (
    <button type="button" className={styles.getCode} onClick={onClick}>
      <span>{copied ? 'Copied!' : 'GET CODE'}</span>
      <span className={styles.getCodeChip}>{code}</span>
    </button>
  )
}

export default function SingleCouponPage() {
  const { slug } = useParams()
  const coupon = getCouponBySlug(slug)

  if (!coupon) {
    return (
      <>
        <Breadcrumb items={[{ label: 'Deala', to: '/' }, { label: 'Coupons', to: '/coupons' }, { label: 'Not found' }]} />
        <section className={styles.missing}>
          <h1>Coupon not found</h1>
          <p>The coupon you’re looking for doesn’t exist or has expired.</p>
          <Link to="/coupons" className={styles.missingLink}>
            Browse all coupons
            <ArrowRight size={14} />
          </Link>
        </section>
      </>
    )
  }

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Deala', to: '/' },
          { label: 'Coupons', to: '/coupons' },
          { label: coupon.category, to: `/category/${slugify(coupon.category)}` },
          { label: coupon.title },
        ]}
      />

      <section className={styles.section}>
        <div className={styles.layout}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.panel}>
              <h3 className={styles.panelTitle}>Coupon Information</h3>
              <div className={styles.storeRow}>
                <StoreAvatar coupon={coupon} className={styles.storeLogo} />
                <div>
                  <div className={styles.storeName}>{coupon.storeName}</div>
                  <div className={styles.storeDeals}>
                    <CheckIcon size={12} />
                    {coupon.dealsCount} Deals
                  </div>
                </div>
              </div>

              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statLabel}>Success</span>
                  <span className={styles.statVal}>{coupon.success}</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statLabel}>Like</span>
                  <span className={styles.statVal}>{coupon.likes}</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statLabel}>Dislike</span>
                  <span className={styles.statVal}>{coupon.dislikes}</span>
                </div>
              </div>

              <SidebarGetCode code={coupon.code} />
            </div>

            <div className={styles.panel}>
              <h3 className={styles.panelTitle}>All Categories</h3>
              <ul className={styles.catList}>
                {categoryCounts.map((cat) => (
                  <li key={cat.name} className={styles.catItem}>
                    <Link to={`/category/${slugify(cat.name)}`} className={styles.catLink}>{cat.name}</Link>
                    <span className={styles.catCount}>({cat.count})</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main */}
          <div className={styles.main}>
            <div className={styles.headerRow}>
              <h1 className={styles.title}>{coupon.title}</h1>
              <div className={styles.badges}>
                {coupon.exclusive && <span className={styles.exclusive}>Exclusive</span>}
                {coupon.verified && <span className={styles.verified}>Verified</span>}
              </div>
            </div>

            <div className={styles.meta}>
              <span>{coupon.date}</span>
              <Link to={`/category/${slugify(coupon.category)}`} className={styles.metaLink}>{coupon.category}</Link>
              <Link to="/coupons" className={styles.metaLink}>{coupon.storeName}</Link>
            </div>

            <hr className={styles.divider} />

            <div className={styles.infoGrid}>
              <div className={styles.infoBox}>
                <div className={styles.infoLabel}>Coupon Code</div>
                <CodeBox code={coupon.code} />
              </div>

              <div className={styles.infoBox}>
                <div className={styles.infoLabel}>Offer Price</div>
                <div className={styles.priceRow}>
                  <span className={styles.price}>{coupon.price}</span>
                  {coupon.orig && <span className={styles.orig}>{coupon.orig}</span>}
                  {coupon.badge && <span className={styles.offBadge}>{coupon.badge.replace('-', '')} OFF</span>}
                </div>
                <div className={styles.validUntil}>Valid until: {coupon.validUntil}</div>
              </div>

              <div className={styles.infoBox}>
                <div className={styles.infoLabel}>Coupon Website</div>
                <a href="#" className={styles.visit}>Visit Website</a>
              </div>
            </div>

            <div className={styles.storeProfile}>
              <StoreAvatar coupon={coupon} className={styles.profileLogo} />
              <div>
                <div className={styles.profileLabel}>Coupon Store Profile</div>
                <div className={styles.profileName}>{coupon.storeName}</div>
                <div className={styles.profileLoc}>
                  <MapPinIcon size={13} />
                  {coupon.storeLocation}
                </div>
              </div>
            </div>

            <div className={styles.hero}>
              <img referrerPolicy="no-referrer" src={coupon.img} alt={coupon.title} className={styles.heroImg} />
            </div>

            <div className={styles.article}>
              {couponDescription.map((para, i) => (
                <p key={i} className={styles.para}>{para}</p>
              ))}

              <h2 className={styles.h2}>Why Choose This Deal?</h2>
              <ul className={styles.benefits}>
                {couponBenefits.map((b) => (
                  <li key={b.title} className={styles.benefit}>
                    <CheckIcon size={16} />
                    <span>
                      <strong>{b.title}:</strong> {b.text}
                    </span>
                  </li>
                ))}
              </ul>

              <h2 className={styles.h2}>Why Users Love This Deal</h2>
              <ul className={styles.loveList}>
                {couponLovePoints.map((point) => (
                  <li key={point} className={styles.love}>
                    <StarIcon size={14} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.feedback}>
              <span className={styles.feedbackLabel}>Was this helpful?</span>
              <button type="button" className={styles.feedbackBtn}>
                <ThumbsUp size={14} /> Yes ({coupon.likes})
              </button>
              <button type="button" className={styles.feedbackBtn}>
                <ThumbsDown size={14} /> No ({coupon.dislikes})
              </button>
            </div>

            <ReplyForm />
          </div>
        </div>
      </section>
    </>
  )
}

function ReplyForm() {
  const onSubmit = (e) => {
    e.preventDefault()
    // Hook up to a comments backend here.
  }
  return (
    <form className={styles.reply} onSubmit={onSubmit}>
      <h2 className={styles.h2}>Leave a Reply</h2>
      <p className={styles.replyNote}>Your email address will not be published. Required fields are marked *</p>
      <div className={styles.replyRow}>
        <input type="text" className={styles.replyInput} placeholder="Name *" required />
        <input type="email" className={styles.replyInput} placeholder="Email *" required />
      </div>
      <textarea className={styles.replyTextarea} placeholder="Comment" rows={5} />
      <button type="submit" className={styles.replySubmit}>
        Post Comment
        <ArrowRight size={14} />
      </button>
    </form>
  )
}
