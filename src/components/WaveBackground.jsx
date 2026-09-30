import waves from '../assets/waves.png'
import styles from './WaveBackground.module.css'
import { useEffect, useRef } from 'react'


export default function WaveBackground() {
  const wavesRef = useRef(null)

  useEffect(() => {
    function onScroll() {
      if (wavesRef.current) {
        wavesRef.current.style.setProperty('--scroll-x', `${window.scrollY * 0.1}px`)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={styles.waveWrap} aria-hidden="true">
      <img ref={wavesRef} src={waves} className={styles.waves} alt="" />
    </div>
  )
}
