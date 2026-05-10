import { createPortal } from 'react-dom'
import { Link, NavLink } from 'react-router-dom' // Link kept for logo
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
                {l.external ? (
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className={styles.link}>{l.label}</a>
                ) : (
                  <NavLink
                    to={l.href}
                    className={({ isActive }) => `${styles.link}${isActive ? ` ${styles.linkActive}` : ''}`}
                  >
                    {l.label}
                  </NavLink>
                )}
              </li>
            ))}
            <li>
              <NavLink
                to="/donate"
                className={({ isActive }) => `${styles.link}${isActive ? ` ${styles.linkActive}` : ''}`}
              >
                Donate
              </NavLink>
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
            {NAV_LINKS.map((l) =>
              l.external ? (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.menuNavLink}
                  onClick={onToggle}
                >
                  {l.label}
                </a>
              ) : (
                <NavLink
                  key={l.href}
                  to={l.href}
                  className={({ isActive }) => `${styles.menuNavLink}${isActive ? ` ${styles.menuNavLinkActive}` : ''}`}
                  onClick={onToggle}
                >
                  {l.label}
                </NavLink>
              )
            )}
            <NavLink
              to="/donate"
              className={({ isActive }) => `${styles.menuNavLink}${isActive ? ` ${styles.menuNavLinkActive}` : ''}`}
              onClick={onToggle}
            >
              Donate
            </NavLink>
          </nav>
        </div>,
        document.body
      )}
    </>
  )
}
