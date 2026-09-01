import Footer from './Footer'
import Header from './Header'
import styles from './PageLayout.module.css'

function PageLayout({ children }) {
  return (
    <div className={styles.shell}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default PageLayout
