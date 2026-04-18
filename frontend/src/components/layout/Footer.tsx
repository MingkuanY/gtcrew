import { SOCIAL_LINKS } from '@/lib/socialLinks'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        {SOCIAL_LINKS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className={styles.socialLink}
          >
            {s.icon}
          </a>
        ))}
      </div>
      <p className={styles.copyright}>Copyright © GTCrew {new Date().getFullYear()}</p>
    </footer>
  )
}
