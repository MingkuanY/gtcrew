import heroBg from '@/assets/hero-bg.jpg'
import photo1 from '@/assets/photo-1.jpg'
import photo2 from '@/assets/photo-2.jpg'
import photo3 from '@/assets/photo-3.jpg'
import insta1 from '@/assets/insta-1.jpg'
import insta2 from '@/assets/insta-2.jpg'
import insta3 from '@/assets/insta-3.jpg'
import insta4 from '@/assets/insta-4.jpg'
import insta5 from '@/assets/insta-5.jpg'
import insta6 from '@/assets/insta-6.jpg'
import insta7 from '@/assets/insta-7.jpg'
import insta8 from '@/assets/insta-8.jpg'
import HeroSection from '@/components/HeroSection'
import styles from './HomePage.module.scss'

const INSTA_POSTS = [insta1, insta2, insta3, insta4, insta5, insta6, insta7, insta8]

export default function HomePage() {
  return (
    <div>
      <HeroSection image={heroBg} imageAlt="" imagePosition="center 60%">
        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleGold}>Georgia Tech</span>
          {' '}
          <span className={styles.heroTitleWhite}>Rowing</span>
        </h1>
        <button className={styles.btn}>Learn More</button>
      </HeroSection>

      <div className={styles.body}>

        <div className={styles.sections}>

          <div className={styles.joinCard}>
            <h2 className={styles.sectionHeading}>No Experience Necessary</h2>
            <p className={styles.sectionBody}>
              Our experienced coaching staff will build you to become national
              champions as you make lifelong friendships, push yourself to new
              limits, and represent Georgia Tech.
            </p>
            <button className={styles.btn}>Join Today</button>
          </div>

          <div className={styles.photo}>
            <img src={photo1} alt="GT Rowing team" />
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionHeading}>Rent-a-Rower</h2>
            <p className={styles.sectionBody}>
              Need help with tutoring, yard work, babysitting, moving, or
              something else?
            </p>
            <p className={styles.sectionBody}>
              Hire our student athletes starting at $20/hr per rower to help
              them raise money for club dues, competition entry fees, and new
              equipment.
            </p>
            <button className={styles.btn}>Rent a Rower</button>
          </div>

          <div className={styles.photo}>
            <img src={photo2} alt="GT Rowing team" />
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionHeading}>The Regulator</h2>
            <p className={styles.sectionBody}>
              From regatta wins to new equipment, catch up with what the team
              is up to!
            </p>
            <button className={styles.btn}>Read Regulator</button>
          </div>

          <div className={styles.photo}>
            <img src={photo3} alt="GT Rowing team" />
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionHeading}>Get on Our Mailing List</h2>
            <button className={styles.btn}>Join Mailing List</button>
          </div>

        </div>

        <aside className={styles.instaColumn}>
          <h2 className={styles.instaHeading}>Check Out Our Team Instagram</h2>
          <div className={styles.instaGrid}>
            {INSTA_POSTS.map((src, i) => (
              <div key={i} className={styles.instaPost}>
                <img src={src} alt={`GT Crew Instagram post ${i + 1}`} />
              </div>
            ))}
          </div>
        </aside>

      </div>
    </div>
  )
}
