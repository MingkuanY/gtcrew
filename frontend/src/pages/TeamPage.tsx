import heroTeam from '@/assets/hero-team.png'
import coachBeth from '@/assets/coach-beth.png'
import coachTim from '@/assets/coach-tim.png'
import coachSarah from '@/assets/coach-sarah.png'
import coachAlec from '@/assets/coach-alec.png'
import coachMandy from '@/assets/coach-mandy.png'
import coachCorey from '@/assets/coach-corey.png'
import coachGayatri from '@/assets/coach-gayatri.png'
import coachKiyah from '@/assets/coach-kiyah.png'
import officerBoard from '@/assets/officer-board.png'
import HeroSection from '@/components/HeroSection'
import styles from './TeamPage.module.scss'

const COACHES = [
  { name: 'Beth Thomas', title: "Varsity Women's Head Coach", photo: coachBeth },
  { name: 'Tim Pierce', title: "Varsity Men's Head Coach", photo: coachTim },
  { name: 'Sarah Nastasi', title: "Varsity Women's Assistant Coach", photo: coachSarah },
  { name: 'Alec Kaye', title: "Varsity Men's Assistant Coach", photo: coachAlec },
  { name: 'Mandy Heady', title: "Novice Women's Head Coach", photo: coachMandy },
  { name: 'Corey Babb', title: "Novice Men's Head Coach", photo: coachCorey },
  { name: 'Gayatri Menon', title: "Novice Women's Assistant Coach", photo: coachGayatri },
  { name: 'Kiyah Sherman', title: "Novice Men's Assistant Coach", photo: coachKiyah },
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
          <h2 className={styles.sectionHeading}>2025 Officer Board</h2>
          <img
            src={officerBoard}
            alt="2025 GT Crew Officer Board group photo"
            className={styles.boardPhoto}
          />
          <p className={styles.boardCaption}>
            <strong>Back row left to right</strong>: Shreeya Simha, Helen Honecker,
            Shrayes Upadhyayula, Malcolm Ferguson, Rohan Prakash.
            <br /><br />
            <strong>Front row left to right</strong>: Natanel Ha, Sophie Andersen,
            Saleema Manzoor, Margaret Moe, Alan Saju
            <br /><br />
            <strong>Not pictured</strong>: Stephen Harvey and Shrish Shetty
          </p>
        </section>

      </div>
    </div>
  )
}
