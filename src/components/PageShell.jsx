import Breadcrumb from './Breadcrumb.jsx'
import styles from './PageShell.module.css'

// Shared wrapper for inner content pages: breadcrumb + page title + body.
export default function PageShell({ breadcrumb, title, intro, children, narrow = false }) {
  return (
    <>
      <Breadcrumb items={breadcrumb} />
      <section className={styles.section}>
        <div className={`${styles.inner} ${narrow ? styles.narrow : ''}`}>
          <header className={styles.head}>
            <h1 className={styles.title}>{title}</h1>
            {intro && <p className={styles.intro}>{intro}</p>}
          </header>
          {children}
        </div>
      </section>
    </>
  )
}
