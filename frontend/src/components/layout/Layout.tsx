import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from './Layout.module.scss'

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const toggle = () => setMenuOpen(v => !v)

  return (
    <div className={styles.root}>
      <div className={`${styles.pageWrapper}${menuOpen ? ` ${styles.shifted}` : ''}`}>
        <Navbar menuOpen={menuOpen} onToggle={toggle} />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
