import aboutHero from '@/assets/about-hero.jpg'
import boathouse from '@/assets/about-boathouse.jpg'
import history1 from '@/assets/about-history-1.jpg'
import history2 from '@/assets/about-history-2.jpg'
import history3 from '@/assets/about-history-3.jpg'
import HeroSection from '@/components/HeroSection'
import styles from './AboutPage.module.scss'

export default function AboutPage() {
  return (
    <div>
      <HeroSection image={aboutHero} imageAlt="GT Rowing team" imagePosition="center 40%">
        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleGold}>About</span>
          {' '}
          <span className={styles.heroTitleWhite}>Us</span>
        </h1>
      </HeroSection>

      <div className={styles.content}>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Our Crew</h2>
          <p className={styles.sectionBody}>
            Georgia Tech Rowing is one of the largest and most successful sports clubs on campus.
            It&apos;s one of the only sports you can pick up your freshman year with no prior
            experience and potentially become a national champion the next. We travel and compete,
            consistently beating seasoned rowers with scholarships. It&apos;s an opportunity to be
            a part of a team, make the closest friends you&apos;ll have here at Tech, get in
            amazing shape, and experience something new.
          </p>
          <button className={styles.btn}>Join Today</button>
        </section>

        <hr className={styles.divider} />

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Our Boathouse</h2>
          <p className={styles.sectionBody}>
            The Georgia Tech Rowing Club shares the Monsignor E. Peter Ludden Rowing Center with
            the Saint Andrew Rowing Club. This boathouse is located at 675 Riverside Road behind
            the Saint Andrew Catholic Church on the Chattahoochee River in Roswell.
          </p>
          <div className={styles.boathouseImg}>
            <img src={boathouse} alt="GT Crew boathouse on the Chattahoochee River" />
          </div>
        </section>

        <hr className={styles.divider} />

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Our History</h2>
          <p className={styles.sectionBody}>
            Georgia Tech Crew was founded in 1985 and has been growing ever since. We invite you
            to read about how it all began and the events along the way that got us to where we
            are now. All of the historical information was gathered and compiled by Slim Jim Price
            in the year 2001. Hopefully, we&apos;ll be adding to this history soon&hellip;
          </p>
          <div className={styles.historyGrid}>
            <div className={styles.historyLeft}>
              <img src={history1} alt="GT Crew historical photo" />
              <img src={history3} alt="GT Crew historical photo" />
            </div>
            <div className={styles.historyRight}>
              <img src={history2} alt="GT Crew historical photo" />
            </div>
          </div>
          <a
            href="https://www.gtcrewalumni.org/history-of-gt-crew"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            Read More
          </a>
        </section>

      </div>
    </div>
  )
}
