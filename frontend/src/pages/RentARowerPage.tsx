import heroRentARower from '@/assets/hero-rent-a-rower.png'
import HeroSection from '@/components/HeroSection'
import styles from './RentARowerPage.module.scss'

// TODO: Replace with the actual Google Form embed URL.
const GOOGLE_FORM_SRC = ''

export default function RentARowerPage() {
  return (
    <div>
      <HeroSection
        image={heroRentARower}
        imageAlt="GT Crew rowers at a regatta"
        imagePosition="center 40%"
        overlayOpacity={0.4}
        contentTop="calc(50vh - 2.5rem)"
      >
        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleGold}>Rent</span>
          <span className={styles.heroTitleWhite}> a </span>
          <span className={styles.heroTitleGold}>Rower</span>
        </h1>
      </HeroSection>

      <div className={styles.content}>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>
            <span className={styles.headingBold}>Get It Done </span>
            <span className={styles.headingLight}>with Our Help</span>
          </h2>
          <p className={styles.bodyText}>
            The Georgia Tech Rowing Club's Rent-a-Rower program allows our student
            athletes to raise money for club dues, competition entry fees, and new
            equipment. With a base rate of $20/hr, hire one of our athletes to help
            you out with tutoring, yard work, babysitting, manual labor, moving,
            and more!
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Hire a Rower</h2>
          {GOOGLE_FORM_SRC ? (
            <div className={styles.formWrapper}>
              <iframe
                src={GOOGLE_FORM_SRC}
                title="Rent-a-Rower Request Form"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ) : (
            <p className={styles.formPlaceholder}>
              Form coming soon — check back later or{' '}
              <a href="/contact" className={styles.formLink}>contact us</a> directly.
            </p>
          )}
        </section>

      </div>
    </div>
  )
}
