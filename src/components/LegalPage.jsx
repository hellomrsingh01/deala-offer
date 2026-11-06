import PageShell from './PageShell.jsx'
import styles from './LegalPage.module.css'

// Renders a block: a string becomes a paragraph, { list } becomes a list.
function Block({ block }) {
  if (typeof block === 'string') {
    return <p className={styles.para}>{block}</p>
  }
  if (block?.list) {
    return (
      <ul className={styles.list}>
        {block.list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    )
  }
  return null
}

// doc: { title, updated, intro, sections: [{ heading, body: [...] }] }
export default function LegalPage({ doc, breadcrumb }) {
  return (
    <PageShell breadcrumb={breadcrumb} title={doc.title} intro={doc.intro} narrow>
      {doc.updated && <p className={styles.updated}>Last updated: {doc.updated}</p>}
      <div className={styles.body}>
        {doc.sections.map((section) => (
          <section key={section.heading} className={styles.block}>
            <h2 className={styles.h2}>{section.heading}</h2>
            {section.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </section>
        ))}
      </div>
    </PageShell>
  )
}
