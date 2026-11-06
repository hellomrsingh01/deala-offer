import { useState } from 'react'
import { Link } from 'react-router-dom'
import { coupons, searchCategories } from '../data.js'
import Breadcrumb from '../components/Breadcrumb.jsx'
import CouponCard from '../components/CouponCard.jsx'
import {
  LinkIcon,
  TagIcon,
  ClockIcon,
  GridIcon,
  ListIcon,
  ChevronDown,
} from '../components/icons.jsx'
import styles from './CouponsPage.module.css'

const filterTabs = [
  { label: 'Online Codes', Icon: LinkIcon },
  { label: 'Store Codes', Icon: TagIcon },
  { label: 'Online Sales', Icon: ClockIcon },
]

const storeOptions = ['Select Store', ...new Set(coupons.map((c) => c.storeName))]

export default function CouponsPage() {
  const [view, setView] = useState('grid')
  const [activeTab, setActiveTab] = useState(0)
  const [keyword, setKeyword] = useState('')

  const onFilter = (e) => {
    e.preventDefault()
    // Hook up filtering here.
  }

  return (
    <>
      <Breadcrumb items={[{ label: 'Deala', to: '/' }, { label: 'Browse Coupon' }]} />

      <section className={styles.section}>
        <div className={styles.layout}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <form className={styles.panel} onSubmit={onFilter}>
              <h3 className={styles.panelTitle}>Search Coupons</h3>

              <div className={styles.tabs}>
                {filterTabs.map((tab, i) => (
                  <button
                    type="button"
                    key={tab.label}
                    className={`${styles.tab} ${activeTab === i ? styles.tabActive : ''}`}
                    onClick={() => setActiveTab(i)}
                  >
                    <tab.Icon size={18} />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              <label className={styles.field}>
                <span className={styles.fieldLabel}>Keyword</span>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Type Keywords"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </label>

              <label className={styles.field}>
                <span className={styles.fieldLabel}>Category</span>
                <select className={styles.select} defaultValue={searchCategories[0]}>
                  {searchCategories.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>

              <label className={styles.field}>
                <span className={styles.fieldLabel}>Store</span>
                <select className={styles.select} defaultValue={storeOptions[0]}>
                  {storeOptions.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </label>

              <button type="submit" className={styles.filterBtn}>Filter</button>
            </form>

            <div className={styles.panel}>
              <h3 className={styles.panelTitle}>Hand Picked</h3>
              <div className={styles.picks}>
                {coupons.slice(0, 3).map((c) => (
                  <Link key={c.slug} to={`/coupon/${c.slug}`} className={styles.pick}>
                    <div className={styles.pickImgWrap}>
                      <img referrerPolicy="no-referrer" src={c.img} alt={c.title} className={styles.pickImg} />
                    </div>
                    <div>
                      <div className={styles.pickTitle}>{c.title}</div>
                      <div className={styles.pickPrice}>
                        <span className={styles.price}>{c.price}</span>
                        {c.orig && <span className={styles.orig}>{c.orig}</span>}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className={styles.content}>
            <div className={styles.toolbar}>
              <span className={styles.count}>Found {coupons.length} coupons</span>
              <div className={styles.toolbarRight}>
                <div className={styles.viewToggle}>
                  <button
                    type="button"
                    aria-label="Grid view"
                    className={`${styles.viewBtn} ${view === 'grid' ? styles.viewBtnActive : ''}`}
                    onClick={() => setView('grid')}
                  >
                    <GridIcon size={16} />
                  </button>
                  <button
                    type="button"
                    aria-label="List view"
                    className={`${styles.viewBtn} ${view === 'list' ? styles.viewBtnActive : ''}`}
                    onClick={() => setView('list')}
                  >
                    <ListIcon size={16} />
                  </button>
                </div>
                <div className={styles.sortWrap}>
                  <select className={styles.sort} aria-label="Sort coupons">
                    <option>Ending Soon</option>
                    <option>Newest</option>
                    <option>Most Popular</option>
                  </select>
                  <ChevronDown size={14} />
                </div>
              </div>
            </div>

            <div className={`${styles.grid} ${view === 'list' ? styles.listView : ''}`}>
              {coupons.map((coupon) => (
                <CouponCard key={coupon.slug} coupon={coupon} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
