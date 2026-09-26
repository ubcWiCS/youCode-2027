import waves from '../assets/waves.png'
import styles from './WaveBackground.module.css'

// Figma "waves on the shore" export: translucent light-lavender dunes that
// composite over the page gradient. Per Maryum's dev request: keep a gentle,
// subtle y-axis drift.
export default function WaveBackground() {
  return (
    <div className={styles.waveWrap} aria-hidden="true">
      <img src={waves} className={styles.waves} alt="" />
    </div>
  )
}
