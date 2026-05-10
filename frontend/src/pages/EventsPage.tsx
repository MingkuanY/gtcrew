// import { useRef, useState, useEffect } from 'react'
// import eventsHero from '@/assets/events-hero.jpg'
// import hotsPhoto1 from '@/assets/events-hots-1.jpg'
// import hotsPhoto2 from '@/assets/events-hots-2.jpg'
// import hoochPhoto1 from '@/assets/events-hooch-1.jpg'
// import hoochPhoto2 from '@/assets/events-hooch-2.jpg'
// import HeroSection from '@/components/HeroSection'
// import styles from './EventsPage.module.scss'

// type EventItem = {
//   name: string
//   description: string
//   date: string
//   location: string
//   photos?: string[]
// }

// const UPCOMING_EVENTS: EventItem[] = [
//   {
//     name: 'Atlanta Erg Sprints',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum quis lectus vel dignissim. Cras vitae ornare augue.',
//     date: 'Feb 1, 2025',
//     location: 'Georgia Tech',
//   },
//   {
//     name: 'Atlanta Erg Sprints',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum quis lectus vel dignissim. Cras vitae ornare augue.',
//     date: 'March 20–27, 2025',
//     location: 'Daytona Beach',
//   },
// ]

// const PAST_EVENTS: EventItem[] = [
//   {
//     name: 'Head of the South',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum quis lectus vel dignissim. Cras vitae ornare augue. Donec at dictum sapien. Vestibulum vitae interdum metus, eu ultrices sapien. Maecenas mauris dolor, rhoncus non gravida id, eleifend vitae nunc.',
//     date: 'Nov 9, 2024',
//     location: 'Augusta, GA',
//     photos: [hotsPhoto1, hotsPhoto2, hotsPhoto1, hotsPhoto2],
//   },
//   {
//     name: 'Head of the Hooch',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum quis lectus vel dignissim. Cras vitae ornare augue. Donec at dictum sapien. Vestibulum vitae interdum metus, eu ultrices sapien. Maecenas mauris dolor, rhoncus non gravida id, eleifend vitae nunc.',
//     date: 'Nov 2, 2024',
//     location: 'Chattanooga, TN',
//     photos: [hoochPhoto1, hoochPhoto2, hoochPhoto1, hoochPhoto2],
//   },
// ]

// // ── Filmstrip carousel ────────────────────────────────────────────────

// function PhotoCarousel({ photos, label }: { photos: string[]; label: string }) {
//   const [current, setCurrent] = useState(0)

//   const prev = () => setCurrent((i) => (i - 1 + photos.length) % photos.length)
//   const next = () => setCurrent((i) => (i + 1) % photos.length)

//   // Reorder photos so current is always first
//   const ordered = [
//     ...photos.slice(current),
//     ...photos.slice(0, current),
//   ]

//   return (
//     <div className={styles.carousel}>
//       <button className={`${styles.arrowBtn} ${styles.arrowBtnLeft}`} onClick={prev} aria-label="Previous">
//         <ArrowIcon dir="left" />
//       </button>

//       <div className={styles.carouselTrack}>
//         {ordered.map((src, i) => (
//           <img
//             key={`${current}-${i}`}
//             src={src}
//             alt={`${label} photo ${i + 1}`}
//             className={styles.carouselPhoto}
//           />
//         ))}
//       </div>

//       <button className={`${styles.arrowBtn} ${styles.arrowBtnRight}`} onClick={next} aria-label="Next">
//         <ArrowIcon dir="right" />
//       </button>
//     </div>
//   )
// }

// function ArrowIcon({ dir }: { dir: 'left' | 'right' }) {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//       {dir === 'left' ? (
//         <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
//       ) : (
//         <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
//       )}
//     </svg>
//   )
// }

// // ── Section expand/collapse ───────────────────────────────────────────

// function ChevronIcon({ open }: { open: boolean }) {
//   return (
//     <svg
//       className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
//       width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"
//     >
//       <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   )
// }

// // ── Event row ─────────────────────────────────────────────────────────

// function EventRow({ event }: { event: EventItem }) {
//   return (
//     <div className={styles.eventRow}>
//       <div className={styles.eventMain}>
//         <p className={styles.eventName}>{event.name}</p>
//         <p className={styles.eventDesc}>{event.description}</p>
//         {event.photos && <PhotoCarousel photos={event.photos} label={event.name} />}
//       </div>
//       <div className={styles.eventMeta}>
//         <p className={styles.eventDate}>{event.date}</p>
//         <p className={styles.eventLocation}>{event.location}</p>
//       </div>
//     </div>
//   )
// }

// // ── Events section ────────────────────────────────────────────────────

// function EventsSection({ title, events }: { title: string; events: EventItem[] }) {
//   const [open, setOpen] = useState(true)

//   return (
//     <section className={styles.eventsSection}>
//       <button
//         className={styles.sectionHeader}
//         onClick={() => setOpen((v) => !v)}
//         aria-expanded={open}
//       >
//         <h2 className={styles.sectionHeading}>{title}</h2>
//         <ChevronIcon open={open} />
//       </button>

//       {open && (
//         <div className={styles.eventList}>
//           {events.map((event, i) => (
//             <div key={i}>
//               {i > 0 && <hr className={styles.divider} />}
//               <EventRow event={event} />
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   )
// }

// // ── Page ──────────────────────────────────────────────────────────────

// export default function EventsPage() {
//   return (
//     <div>
//       <HeroSection image={eventsHero} imageAlt="GT Rowing on the water" imagePosition="center 40%">
//         <h1 className={styles.heroTitle}>
//           <span className={styles.heroTitleGold}>Events</span>
//         </h1>
//       </HeroSection>

//       <div className={styles.content}>
//         <EventsSection title="Upcoming Events" events={UPCOMING_EVENTS} />
//         <hr className={styles.sectionDivider} />
//         <EventsSection title="Past Events" events={PAST_EVENTS} />
//       </div>
//     </div>
//   )
// }

import { useRef, useState, useEffect } from 'react'
import eventsHero from '@/assets/events-hero.jpg'
import hotsPhoto1 from '@/assets/events-hots-1.jpg'
import hotsPhoto2 from '@/assets/events-hots-2.jpg'
import hoochPhoto1 from '@/assets/events-hooch-1.jpg'
import hoochPhoto2 from '@/assets/events-hooch-2.jpg'
import HeroSection from '@/components/HeroSection'
import styles from './EventsPage.module.scss'

type EventItem = {
  name: string
  description: string
  date: string
  location: string
  photos?: string[]
}

const UPCOMING_EVENTS: EventItem[] = [
  {
    name: 'Atlanta Erg Sprints',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum quis lectus vel dignissim. Cras vitae ornare augue.',
    date: 'Feb 1, 2025',
    location: 'Georgia Tech',
  },
  {
    name: 'Atlanta Erg Sprints',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum quis lectus vel dignissim. Cras vitae ornare augue.',
    date: 'March 20–27, 2025',
    location: 'Daytona Beach',
  },
]

const PAST_EVENTS: EventItem[] = [
  {
    name: 'Head of the South',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum quis lectus vel dignissim. Cras vitae ornare augue. Donec at dictum sapien. Vestibulum vitae interdum metus, eu ultrices sapien. Maecenas mauris dolor, rhoncus non gravida id, eleifend vitae nunc.',
    date: 'Nov 9, 2024',
    location: 'Augusta, GA',
    photos: [hotsPhoto1, hotsPhoto2, hotsPhoto1, hotsPhoto2],
  },
  {
    name: 'Head of the Hooch',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum quis lectus vel dignissim. Cras vitae ornare augue. Donec at dictum sapien. Vestibulum vitae interdum metus, eu ultrices sapien. Maecenas mauris dolor, rhoncus non gravida id, eleifend vitae nunc.',
    date: 'Nov 2, 2024',
    location: 'Chattanooga, TN',
    photos: [hoochPhoto1, hoochPhoto2, hoochPhoto1, hoochPhoto2],
  },
]

// ── Filmstrip carousel ────────────────────────────────────────────────

function PhotoCarousel({ photos, label }: { photos: string[]; label: string }) {
  const [startIndex, setStartIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const [photoWidths, setPhotoWidths] = useState<number[]>([])
  const GAP = 12 // matches $space-3 (0.75rem at 16px base)

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
      <button
        className={styles.arrowBtn}
        onClick={prev}
        disabled={startIndex === 0}
        aria-label="Previous"
      >
        <ArrowIcon dir="left" />
      </button>

      <div className={styles.carouselViewport}>
        <div
          ref={trackRef}
          className={styles.carouselTrack}
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {photos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${label} photo ${i + 1}`}
              className={styles.carouselPhoto}
            />
          ))}
        </div>
      </div>

      <button
        className={styles.arrowBtn}
        onClick={next}
        disabled={startIndex === photos.length - 1}
        aria-label="Next"
      >
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
      {event.photos && <PhotoCarousel photos={event.photos} label={event.name} />}
    </div>
  )
}

// ── Events section ────────────────────────────────────────────────────

function EventsSection({ title, events }: { title: string; events: EventItem[] }) {
  const [open, setOpen] = useState(true)

  return (
    <section className={styles.eventsSection}>
      <button
        className={styles.sectionHeader}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
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
        <EventsSection title="Upcoming Events" events={UPCOMING_EVENTS} />
        <hr className={styles.sectionDivider} />
        <EventsSection title="Past Events" events={PAST_EVENTS} />
      </div>
    </div>
  )
}