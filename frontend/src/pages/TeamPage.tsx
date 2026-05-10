import heroTeam from '@/assets/hero-team.png'
import coachBeth from '@/assets/coach-beth.png'
import coachTim from '@/assets/coach-tim.png'
import coachSarah from '@/assets/coach-sarah.png'
import coachSophie from '@/assets/coach-sophie.png'
import coachKarthik from '@/assets/coach-karthik.png'
import coachLauren from '@/assets/coach-lauren.png'
import coachAlli from '@/assets/coach-alli.png'
import coachTBD from '@/assets/coach-tbd.png'
import officerBoard from '@/assets/officer-board1.png'
import HeroSection from '@/components/HeroSection'
import styles from './TeamPage.module.scss'

const COACHES = [
  { name: 'Beth Thomas', title: "Varsity Women's Head Coach", photo: coachBeth },
  { name: 'Tim Pierce', title: "Varsity Men's Head Coach", photo: coachTim },
  { name: 'Sarah Nastasi', title: "Varsity Women's Assistant Coach", photo: coachSarah },
  { name: 'Karthik Krishnan', title: "Varsity Men's Assistant Coach", photo: coachKarthik },
  { name: 'Sophie Klessel', title: "Varsity Women's Assistant Coach", photo: coachSophie },
  { name: 'TBD', title: "Novice Men's Head Coach", photo: coachTBD },
  { name: 'Lauren Sabo', title: "Novice Women's Head Coach", photo: coachLauren },
  { name: 'TBD', title: "Novice Men's Assistant Coach", photo: coachTBD},
  { name: 'Alli King', title: "Novice Women's Assistant Coach", photo: coachAlli },
]

export default function TeamPage() {
  return (
    <div>
      <HeroSection
        image={heroTeam}
        imageAlt="GT Crew team at sunrise on the water"
        imagePosition="center 40%"
        overlayOpacity={0.4}
        contentTop="calc(50vh - 2.5rem)"
      >
        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleGold}>Team</span>
        </h1>
      </HeroSection>

      <div className={styles.content}>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Coaches</h2>
          <div className={styles.coachGrid}>
            {COACHES.map((coach) => (
              <div key={coach.name} className={styles.coachCard}>
                <img
                  src={coach.photo}
                  alt={coach.name}
                  className={styles.coachPhoto}
                />
                <div className={styles.coachInfo}>
                  <p className={styles.coachName}>{coach.name}</p>
                  <p className={styles.coachTitle}>{coach.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>2026 Officer Board</h2>
          <img
            src={officerBoard}
            alt="2026 GT Crew Officer Board group photo"
            className={styles.boardPhoto}
          />
          <p className={styles.boardCaption}>
            <strong>Left to Right:</strong> Alan Thomas Saju, Margaret Moe, Rohan Prakash, Malcolm Ferguson, Cooper Grant, Luke Harris, Will Dwyer, Leona Longhurst, Riley Hogan, Nicole Johnson, Kinzley Lebeda
            <br /><br />
            <strong>Not pictured:</strong> Spencer Smith
          </p>
        </section>

      </div>
    </div>
  )
}
