import { Link } from 'react-router-dom'
import { categoriesWithCounts } from '../data.js'
import PageShell from '../components/PageShell.jsx'
import styles from './CategoriesPage.module.css'

export default function CategoriesPage() {
  return (
    <PageShell
      breadcrumb={[{ label: 'Deala', to: '/' }, { label: 'Categories' }]}
      title="Browse Categories"
      intro="Explore deals by category and jump straight to the coupons that matter to you."
    >
      <div className={styles.grid}>
        {categoriesWithCounts.map((cat) => (
          <Link key={cat.slug} to={`/category/${cat.slug}`} className={styles.card}>
            <span className={styles.circle} style={{ background: cat.bg }}>
              <img referrerPolicy="no-referrer" src={cat.img} alt={cat.name} className={styles.icon} />
            </span>
            <span className={styles.name}>{cat.name}</span>
            <span className={styles.count}>
              {cat.count} {cat.count === 1 ? 'coupon' : 'coupons'}
            </span>
          </Link>
        ))}
      </div>
    </PageShell>
  )
}
