import { useState } from 'react'
import leaf1 from '../assets/Leaf-cluster-1.svg'
import leaf2 from '../assets/Leaf-cluster-2.svg'
import leaf3 from '../assets/Leaf-cluster-3.svg'
import leaf4 from '../assets/Leaf-cluster-4.svg'
import leaf5 from '../assets/Leaf-cluster-5.svg'
import sayHello from '../assets/say-hello.svg'
import styles from './ContactCard.module.css'

const SOCIALS = [
  { name: 'Instagram', href: 'https://instagram.com', icon: InstagramIcon },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedInIcon },
  { name: 'TikTok', href: 'https://tiktok.com', icon: TikTokIcon },
]

export default function ContactCard() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://formspree.io/f/xwlpnzkl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (res.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className={styles.card} id="contact">
      <img src="/images/group-r-5.svg" className={styles.circuits} alt="" aria-hidden="true" />
      <img src={leaf1} className={`${styles.leaves} ${styles.leavesTopRight}`} alt="" aria-hidden="true" />
      <img src={leaf2} className={`${styles.leaves} ${styles.leavesBottomLeft}`} alt="" aria-hidden="true" />
      <img src={leaf3} className={`${styles.leaves} ${styles.leavesBottomRight}`} alt="" aria-hidden="true" />
      <img src={leaf4} className={`${styles.leaves} ${styles.leavesMidLeft}`} alt="" aria-hidden="true" />
      <img src={leaf5} className={`${styles.leaves} ${styles.leavesMidRight}`} alt="" aria-hidden="true" />
      <img src="/images/unicorn.svg" className={styles.unicorn} alt="" aria-hidden="true" />

      <div className={styles.inner}>
        <img src={sayHello} className={styles.heading} alt="say hello." />
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.field}>
            <span className={styles.fieldLabel}>name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              required
            />
          </label>
          <label className={styles.field}>
            <span className={styles.fieldLabel}>email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </label>
          <label className={styles.field}>
            <span className={styles.fieldLabel}>message</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              required
            />
          </label>
          <button type="submit" className={styles.submit}>
            Send message
          </button>

          {status === 'success' && <p className={styles.statusSuccess}>Message sent! 🎉</p>}
          {status === 'error' && <p className={styles.statusError}>Something went wrong. Try again.</p>}
        </form>

        <h2 className={styles.heading}>stay connected.</h2>
        <div className={styles.socials}>
          {SOCIALS.map(({ name, href, icon: Icon }) => (
            <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name} className={styles.socialLink}>
              <Icon />
            </a>
          ))}
        </div>

        <p className={styles.footer}>youCode © 2027 — coming soon</p>
      </div>
    </section>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3V9zm6.5 0H14v1.7h.06c.62-1.1 2.13-2.26 4.38-2.26 4.68 0 5.56 2.95 5.56 6.78V21H19v-5.3c0-1.27-.02-2.9-1.77-2.9-1.78 0-2.05 1.36-2.05 2.8V21H9.5V9z" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M14 3c.6 2.3 2.2 3.9 4.6 4.2v2.6c-1.6.1-3-.4-4.2-1.3v6.6c0 3.3-2.7 5.9-5.9 5.9S2.6 18.4 2.6 15.1c0-3.1 2.4-5.6 5.4-5.9v2.7c-1.5.3-2.6 1.6-2.6 3.2 0 1.8 1.5 3.3 3.3 3.3s3.3-1.5 3.3-3.3V3H14z" />
    </svg>
  )
}