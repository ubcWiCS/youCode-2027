import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ContactCard from './components/ContactCard'
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main>
        <Hero />
        <ContactCard />
      </main>
      <footer className={styles.footer}>youCode © 2027 — coming soon</footer>
    </div>
  )
}
