import WaveBackground from './WaveBackground'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <img src="/images/group-r-5.svg" className={styles.circuits} alt="" aria-hidden="true" />
      <WaveBackground />
      <div className={styles.content}>
        <div className={styles.wordmark} aria-label="youCode">
          <img src="/images/y.svg" alt="" />
          <img src="/images/o.svg" alt="" />
          <img src="/images/u.svg" alt="" />
          <img src="/images/code.svg" alt="" />
        </div>
        <p className={styles.tagline}>coming soon.</p>
        <p className={styles.description}>
          youCode is a 24-hour hackathon dedicated to fostering gender inclusivity
          and breaking traditional norms in tech to innovate, empower each other,
          and build meaningful networks.
        </p>
      </div>
    </section>
  )
}