import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/ThankYou.module.css'

export default function ThankYou() {
  return (
    <Layout>
      <Head>
        <title>Thank You - LabLinc</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.icon}>✓</div>
          <h1>Thank You!</h1>
          <p className={styles.message}>
            Your message has been sent successfully. We'll get back to you soon.
          </p>
          
          <div className={styles.info}>
            <h2>What happens next?</h2>
            <ul>
              <li>Our team will review your message</li>
              <li>We'll respond within 24-48 hours</li>
              <li>You'll receive a confirmation email shortly</li>
            </ul>
          </div>

          <div className={styles.contact}>
            <h3>Need immediate assistance?</h3>
            <p>Call us at:</p>
            <div className={styles.phones}>
              <a href="tel:+917353957307">+91 73539 57307</a>
              <a href="tel:+918217076246">+91 82170 76246</a>
            </div>
            <p>Or email us at:</p>
            <a href="mailto:lablinc.global@gmail.com" className={styles.email}>
              lablinc.global@gmail.com
            </a>
          </div>

          <div className={styles.actions}>
            <Link href="/" className={styles.btnPrimary}>
              Back to Home
            </Link>
            <Link href="/equipment" className={styles.btnSecondary}>
              Browse Equipment
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
