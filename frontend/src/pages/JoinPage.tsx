import { Link } from 'react-router-dom'
import heroJoin from '@/assets/hero-join.png'
import HeroSection from '@/components/HeroSection'
import styles from './JoinPage.module.scss'

export default function JoinPage() {
  return (
    <div>
      <HeroSection
        image={heroJoin}
        imageAlt="GT Crew rowers celebrating with medals"
        imagePosition="center 20%"
        overlayOpacity={0.4}
        contentTop="calc(50vh - 2.5rem)"
      >
        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleGold}>Join</span>
          {' '}
          <span className={styles.heroTitleWhite}>Us</span>
        </h1>
      </HeroSection>

      <div className={styles.content}>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>
            <span className={styles.headingBold}>Pushing You </span>
            <span className={styles.headingLight}>to the Limit</span>
          </h2>
          <p className={styles.bodyText}>
            While many of our rowers were competitive high-school athletes, more than
            90 percent of our team had no previous rowing experience prior to joining
            GT Crew. As long as you have the desire and dedication to improve your
            physical fitness and be part of a team, there can be a place for you on
            crew!
          </p>
        </section>

        <section className={styles.joinCard}>
          <p className={styles.joinPrompt}>I am a…</p>
          <div className={styles.joinBtns}>
            <Link to="/join/gt-student" className={styles.btn}>GT Student</Link>
            <Link to="/join/prospective" className={styles.btn}>Prospective GT Student</Link>
          </div>
        </section>

      </div>
    </div>
  )
}
