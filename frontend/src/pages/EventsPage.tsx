import { useRef, useState, useEffect } from 'react'
import eventsHero from '@/assets/events-hero.jpg'
import eventsData from '@/data/events.json'
import HeroSection from '@/components/HeroSection'
import styles from './EventsPage.module.scss'

type EventItem = {
  name: string
  description: string
  date: string
  location: string
  photos?: string[]
}

// ── Filmstrip carousel ────────────────────────────────────────────────

function PhotoCarousel({ photos, label }: { photos: string[]; label: string }) {
  const [startIndex, setStartIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const [photoWidths, setPhotoWidths] = useState<number[]>([])
  const GAP = 12 // matches 0.75rem gap in CSS

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const imgs = Array.from(track.querySelectorAll('img'))

    const measure = () => {
      setPhotoWidths(imgs.map((img) => img.getBoundingClientRect().width))
    }

    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener('load', measure, { once: true })
    })
    measure()

    const ro = new ResizeObserver(measure)
    ro.observe(track)
    return () => ro.disconnect()
  }, [photos])

  const offset = photoWidths
    .slice(0, startIndex)
    .reduce((sum, w) => sum + w + GAP, 0)

  const prev = () => setStartIndex((i) => Math.max(0, i - 1))
  const next = () => setStartIndex((i) => Math.min(photos.length - 1, i + 1))

  return (
    <div className={styles.carousel}>
      <button className={styles.arrowBtn} onClick={prev} disabled={startIndex === 0} aria-label="Previous">
        <ArrowIcon dir="left" />
      </button>

      <div className={styles.carouselViewport}>
        <div
          ref={trackRef}
          className={styles.carouselTrack}
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {photos.map((src, i) => (
            <img key={i} src={src} alt={`${label} photo ${i + 1}`} className={styles.carouselPhoto} />
          ))}
        </div>
      </div>

      <button className={styles.arrowBtn} onClick={next} disabled={startIndex === photos.length - 1} aria-label="Next">
        <ArrowIcon dir="right" />
      </button>
    </div>
  )
}

function ArrowIcon({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {dir === 'left' ? (
        <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  )
}

// ── Section expand/collapse ───────────────────────────────────────────

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
      width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ── Event row ─────────────────────────────────────────────────────────

function EventRow({ event }: { event: EventItem }) {
  return (
    <div className={styles.eventRow}>
      <div className={styles.eventTop}>
        <div className={styles.eventMain}>
          <p className={styles.eventName}>{event.name}</p>
          <p className={styles.eventDesc}>{event.description}</p>
        </div>
        <div className={styles.eventMeta}>
          <p className={styles.eventDate}>{event.date}</p>
          <p className={styles.eventLocation}>{event.location}</p>
        </div>
      </div>
      {event.photos && event.photos.length > 0 && (
        <PhotoCarousel photos={event.photos} label={event.name} />
      )}
    </div>
  )
}

// ── Events section ────────────────────────────────────────────────────

function EventsSection({ title, events }: { title: string; events: EventItem[] }) {
  const [open, setOpen] = useState(true)

  return (
    <section className={styles.eventsSection}>
      <button className={styles.sectionHeader} onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <h2 className={styles.sectionHeading}>{title}</h2>
        <ChevronIcon open={open} />
      </button>

      {open && (
        <div className={styles.eventList}>
          {events.map((event, i) => (
            <div key={i}>
              {i > 0 && <hr className={styles.divider} />}
              <EventRow event={event} />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────

export default function EventsPage() {
  return (
    <div>
      <HeroSection image={eventsHero} imageAlt="GT Rowing on the water" imagePosition="center 40%" overlayOpacity={0.4} contentTop="calc(50vh - 2.5rem)">
        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleGold}>Events</span>
        </h1>
      </HeroSection>

      <div className={styles.content}>
        <EventsSection title="Upcoming Events" events={eventsData.upcoming} />
        <hr className={styles.sectionDivider} />
        <EventsSection title="Past Events" events={eventsData.past} />
      </div>
    </div>
  )
}
