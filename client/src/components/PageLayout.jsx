import Footer from './Footer'
import Header from './Header'
import styles from './PageLayout.module.css'

function PageLayout({ children, confirmLeave }) {
  return (
    <div className={styles.shell}>
      <Header confirmLeave={confirmLeave} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default PageLayout
