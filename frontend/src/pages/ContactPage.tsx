import heroContact from '@/assets/hero-contact.png'
import HeroSection from '@/components/HeroSection'
import { SOCIAL_LINKS } from '@/shared/socialLinks'
import styles from './ContactPage.module.scss'

const EMAIL_CONTACTS = [
  {
    question: 'For rowing program questions:',
    name: 'Head Coach: Beth Thomas',
    email: 'coach.beth@gtcrew.com',
  },
  {
    question: 'For alumni questions or how to support us:',
    name: 'GTCA President: Shelly Holdren',
    email: 'example@gtcrew.com',
  },
  {
    question: 'For questions, comments, or problems related to this website:',
    name: 'Webmaster: ?',
    email: 'example@gtcrew.com',
  },
]

export default function ContactPage() {
  return (
    <div>
      <HeroSection
        image={heroContact}
        imageAlt="GT Crew team"
        imagePosition="center 60%"
        overlayOpacity={0.45}
        contentTop="calc(50vh - 2.5rem)"
      >
        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleGold}>Contact</span>
          {' '}
          <span className={styles.heroTitleWhite}>Us</span>
        </h1>
      </HeroSection>

      <div className={styles.content}>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Email Us</h2>
          <div className={styles.emailGrid}>
            {EMAIL_CONTACTS.map((c) => (
              <div key={c.email + c.name} className={styles.emailCol}>
                <p className={styles.emailQuestion}>{c.question}</p>
                <p className={styles.emailName}>{c.name}</p>
                <a href={`mailto:${c.email}`} className={styles.emailLink}>{c.email}</a>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Mailing List</h2>
          <p className={styles.bodyText}>
            Stay up to date with GT Crew news, events, and results. Join our
            mailing list to get the latest updates from our coaches and officers
            delivered directly to your inbox.
          </p>
          <button className={styles.btn}>Join Mailing List</button>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Follow Us</h2>
          <div className={styles.socialList}>
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialRow}
                aria-label={s.label}
              >
                <span className={styles.socialIcon}>{s.icon}</span>
                <span className={styles.socialHandle}>{s.handle}</span>
              </a>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Visit Us</h2>
          <p className={styles.bodyText}>
            Come watch us practice on the Chattahoochee! We row out of the
            GT Crew boathouse at 675 Riverside Rd, Roswell, GA 30075.
            Visitors are always welcome on the dock.
          </p>
          <div className={styles.mapWrapper}>
            <iframe
              title="GT Crew location — 675 Riverside Rd, Roswell, GA 30075"
              src="https://maps.google.com/maps?q=675+Riverside+Rd,+Roswell,+GA+30075&t=&z=15&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

      </div>
    </div>
  )
}
