import styles from './FullImage.module.css'
export default function FullImage() {
  return (
    <div className={`${styles.wrap} reveal`}>
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80&fit=crop&crop=center"
        alt=""
        loading="lazy"
        aria-hidden="true"
        width={1600}
        height={440}
      />
      <div className={styles.overlay} />
      <div className={styles.text}>
        <blockquote className={styles.quote}>
          "Strategy is common.<br /><em>Growth is earned."</em>
        </blockquote>
        <cite className={styles.attr}>Crescivo — Competitive Positioning</cite>
      </div>
    </div>
  )
}
