import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell.jsx'
import { ArrowRight } from '../components/icons.jsx'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <PageShell
      breadcrumb={[{ label: 'Deala', to: '/' }, { label: 'Page not found' }]}
      title="Page not found"
      intro="Sorry, the page you’re looking for doesn’t exist or may have moved."
      narrow
    >
      <Link to="/" className={styles.btn}>
        Back to home
        <ArrowRight size={14} />
      </Link>
    </PageShell>
  )
}
