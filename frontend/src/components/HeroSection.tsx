import styles from './HeroSection.module.scss'

interface Props {
  image: string
  imageAlt?: string
  imagePosition?: string
  overlayOpacity?: number
  contentTop?: string
  children: React.ReactNode
}

export default function HeroSection({
  image,
  imageAlt = '',
  imagePosition,
  overlayOpacity = 0.35,
  contentTop,
  children,
}: Props) {
  return (
    <section className={styles.hero}>
      <img
        src={image}
        alt={imageAlt}
        className={styles.heroBg}
        style={imagePosition ? { objectPosition: imagePosition } : undefined}
      />
      <div
        className={styles.heroOverlay}
        style={{ background: `rgba(0,0,0,${overlayOpacity})` }}
      />
      <div
        className={styles.heroContent}
        style={contentTop ? { top: contentTop } : undefined}
      >
        {children}
      </div>
    </section>
  )
}
