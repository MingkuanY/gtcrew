import heroJoin from '@/assets/hero-join.png'
import HeroSection from '@/components/HeroSection'
import RadioGroup from '@/components/RadioGroup'
import styles from './JoinGTStudentPage.module.scss'

const EXPERIENCE_OPTIONS = ['Rowing', 'Coxing', 'Other sport(s)', 'None']
const INTEREST_OPTIONS    = ['Rowing (male)', 'Rowing (female)', 'Coxing']
const YEAR_OPTIONS        = ['Second Year', 'Third Year', 'Fourth Year', 'Fifth Year / Graduate']

export default function JoinGTStudentPage() {
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
          <h2 className={styles.sectionHeading}>Pushing You to the Limit</h2>
          <p className={styles.bodyText}>
            While many of our rowers were competitive high-school athletes, more than
            90 percent of our team had no previous rowing experience prior to joining
            GT Crew. As long as you have the desire and dedication to improve your
            physical fitness and be part of a team, there can be a place for you on
            crew!
          </p>
        </section>

        <form
          className={styles.form}
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
          <div className={styles.inputRow}>
            <input className={styles.input} type="text" placeholder="First Name" autoComplete="given-name" />
            <input className={styles.input} type="text" placeholder="Last Name"  autoComplete="family-name" />
          </div>

          <input className={styles.input} type="email" placeholder="Email Address" autoComplete="email" />

          <RadioGroup label="Prior athletic experience" name="experience" options={EXPERIENCE_OPTIONS} />
          <RadioGroup label="Interest"                  name="interest"   options={INTEREST_OPTIONS} />
          <RadioGroup label="Year at GT (this upcoming Fall)" name="year" options={YEAR_OPTIONS} />

          <textarea className={styles.textarea} placeholder="Message" rows={6} />

          <div className={styles.submitRow}>
            <button type="submit" className={styles.btn}>Submit</button>
          </div>
        </form>

      </div>
    </div>
  )
}
