import { useEffect, useState } from 'react'
import styles from './Countdown.module.css'

// TODO: Maryum's cyberdeck graphic (upper-left, hand-drawn) will wrap this once
// it's ready. Update TARGET_DATE below once the real youCode 2027 event date

const TARGET_DATE = new Date('2027-03-06T09:00:00')

function getTimeLeft() {
  const diff = Math.max(0, TARGET_DATE.getTime() - Date.now())
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds }
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { label: 'days', value: timeLeft.days },
    { label: 'hours', value: timeLeft.hours },
    { label: 'min', value: timeLeft.minutes },
    { label: 'sec', value: timeLeft.seconds },
  ]

  return (
    <div className={styles.countdown} role="timer" aria-live="polite">
      {units.map((unit, i) => (
        <div className={styles.unitGroup} key={unit.label}>
          <div className={styles.unit}>
            <span className={styles.value}>{String(unit.value).padStart(2, '0')}</span>
            <span className={styles.label}>{unit.label}</span>
          </div>
          {i < units.length - 1 && <span className={styles.colon}>:</span>}
        </div>
      ))}
    </div>
  )
}
