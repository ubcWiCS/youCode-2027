import styles from './WaveBackground.module.css'

// Two wave layers, gradient teal -> blue, matching the Figma "Wave 1" / "Wave 2" groups.
// Per Maryum's dev request: animate each layer slightly on the y-axis so they
// drift back and forth (a few randomized pixels), not a big obvious motion.
export default function WaveBackground() {
  return (
    <div className={styles.waveWrap} aria-hidden="true">
      <svg
        className={`${styles.wave} ${styles.wave1}`}
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00927C" />
            <stop offset="100%" stopColor="#1468E4" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient1)"
          fillOpacity="0.55"
          d="M0,120 C240,180 480,60 720,110 C960,160 1200,80 1440,130 L1440,300 L0,300 Z"
        />
      </svg>
      <svg
        className={`${styles.wave} ${styles.wave2}`}
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00927C" />
            <stop offset="100%" stopColor="#1468E4" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient2)"
          fillOpacity="0.4"
          d="M0,160 C260,100 500,200 760,150 C1000,105 1220,190 1440,150 L1440,300 L0,300 Z"
        />
      </svg>
    </div>
  )
}
