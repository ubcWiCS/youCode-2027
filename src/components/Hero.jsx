import WaveBackground from './WaveBackground'
import styles from './Hero.module.css'
import countdownDevice from '../assets/countdown.svg'
import youCodeLogo from '../assets/youCode.svg'

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <img src="/images/group-r-5.svg" className={styles.circuits} alt="" aria-hidden="true" />
      <img src={countdownDevice} className={styles.countdownDevice} alt="" aria-hidden="true" />

      <WaveBackground />
      <div className={styles.content}>
        <img src={youCodeLogo} className={styles.wordmarkImg} alt="youCode" />
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