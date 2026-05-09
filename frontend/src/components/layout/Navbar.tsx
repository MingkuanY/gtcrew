import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import gtLogo from '@/assets/gt-logo.png'
import { NAV_LINKS } from '@/shared/navLinks'
import styles from './Navbar.module.scss'

interface Props {
  menuOpen: boolean
  onToggle: () => void
}

export default function Navbar({ menuOpen, onToggle }: Props) {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.inner}>
          <Link to="/">
            <img src={gtLogo} alt="Georgia Tech Rowing" className={styles.logo} />
          </Link>

          <ul className={styles.links}>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className={styles.link}>{l.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/donate" className={styles.linkDonate}>Donate</Link>
            </li>
          </ul>

          <button
            className={`${styles.mobileToggle}${menuOpen ? ` ${styles.open}` : ''}`}
            onClick={onToggle}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </nav>

      {createPortal(
        <div
          className={`${styles.menuPanel}${menuOpen ? ` ${styles.panelOpen}` : ''}`}
          aria-hidden={!menuOpen}
        >
          <nav className={styles.menuNav}>
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={styles.menuNavLink}
                onClick={onToggle}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/donate"
              className={`${styles.menuNavLink} ${styles.menuNavLinkDonate}`}
              onClick={onToggle}
            >
              Donate
            </Link>
          </nav>
        </div>,
        document.body
      )}
    </>
  )
}
