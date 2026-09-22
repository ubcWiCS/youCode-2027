import logo from '../assets/logo.svg'
import styles from './Navbar.module.css'

const LINKS = ['About', 'Recap & Stories', 'FAQ', 'Resources', 'Sponsors', 'Contact']

export default function Navbar() {
  return (
    <header className={styles.nav}>
      <a href="#top" className={styles.logo} aria-label="youCode home">
        <img src={logo} width="44" height="44" alt="" />
      </a>
      <nav className={styles.links} aria-label="Primary">
        {LINKS.map((label) => (
          <a key={label} href={`#${label.toLowerCase().replace(/\s+/g, '-')}`}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}