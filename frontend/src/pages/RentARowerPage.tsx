import heroRentARower from '@/assets/hero-rent-a-rower.png'
import HeroSection from '@/components/HeroSection'
import styles from './RentARowerPage.module.scss'

const GOOGLE_FORM_SRC =
  'https://docs.google.com/forms/d/e/1FAIpQLSc-yco89BbehFOTYt7DcVNyRoXcWXOsyPoeFJjoADmMY_HCqg/viewform?embedded=true'

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
            <span className={styles.headingBold}>Hire </span>
            <span className={styles.headingLight}>a Rower</span>
          </h2>
          <div className={styles.formWrapper}>
            <iframe
              src={GOOGLE_FORM_SRC}
              title="Rent-a-Rower Request Form"
              width="640"
              height="2433"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
            >
              Loading…
            </iframe>
          </div>
        </section>

      </div>
    </div>
  )
}
