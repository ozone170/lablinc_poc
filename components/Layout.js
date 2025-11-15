import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/logo.png" 
              alt="LabLinc Logo" 
              width={40} 
              height={40}
              priority
            />
            <span className={styles.logoText}>LabLinc</span>
          </Link>
          <nav className={styles.nav}>
            <Link href="/" className={router.pathname === '/' ? styles.active : ''}>
              Home
            </Link>
            <Link href="/equipment" className={router.pathname.startsWith('/equipment') ? styles.active : ''}>
              Equipment
            </Link>
            <Link href="/about" className={router.pathname === '/about' ? styles.active : ''}>
              About
            </Link>
            <Link href="/partner" className={router.pathname === '/partner' ? styles.active : ''}>
              Partner
            </Link>
            <Link href="/contact" className={router.pathname === '/contact' ? styles.active : ''}>
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.footerLogoContainer}>
              <Image 
                src="/logo.png" 
                alt="LabLinc Logo" 
                width={32} 
                height={32}
                className={styles.footerLogo}
              />
              <h3>LabLinc</h3>
            </div>
            <p>Bridging Academia & Industry</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <Link href="/equipment">Equipment</Link>
            <Link href="/about">About</Link>
            <Link href="/partner">Partner</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className={styles.footerSection}>
            <h4>Contact</h4>
            <p>lablinc.global@gmail.com</p>
            <p><a href="tel:+917353957307">+91 73539 57307</a></p>
            <p><a href="tel:+918217076246">+91 82170 76246</a></p>
            <p>VTU, Belagavi - 590018</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Follow Us</h4>
            <a href="https://www.instagram.com/lablinc" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/company/lablinc" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 LabLinc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
