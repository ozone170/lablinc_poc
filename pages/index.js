import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  const categories = [
    'CNC Machines',
    '3D Printers',
    'Electronics',
    'Mechanical',
    'Material Testing',
    'GPU Workstations',
    'AI Servers',
    'Civil',
    'Environmental',
    'Prototyping'
  ]

  const featured = [
    { name: 'CNC Lathe', slug: 'cnc-lathe-vtu' },
    { name: 'FDM 3D Printer', slug: 'fdm-3d-printer' },
    { name: 'A100 AI Compute Server', slug: 'a100-ai-server' },
    { name: 'RTX 4090 Workstation', slug: 'rtx-4090-workstation' },
    { name: 'Total Station', slug: 'total-station' },
    { name: 'Rainwater Harvesting System', slug: 'rainwater-harvesting-system' }
  ]

  return (
    <Layout>
      <Head>
        <title>LabLinc - Bridging Academia & Industry</title>
        <meta name="description" content="Make idle college equipment accessible to startups, MSMEs, and innovators" />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Bridging Academia & Industry Through Smart Equipment Sharing</h1>
          <p>Make idle college equipment accessible to startups, MSMEs, and innovators — with real-time booking, expert support, and secure payments.</p>
          <div className={styles.heroButtons}>
            <Link href="/equipment" className={styles.btnPrimary}>Explore Equipment</Link>
            <Link href="/partner" className={styles.btnSecondary}>Partner With Us</Link>
          </div>
        </div>
      </section>

      <section className={styles.categories}>
        <h2>Equipment Categories</h2>
        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <Link href={`/equipment?category=${encodeURIComponent(category)}`} key={category} className={styles.categoryCard}>
              <h3>{category}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.featured}>
        <h2>Featured Equipment</h2>
        <div className={styles.featuredGrid}>
          {featured.map((item) => (
            <Link href={`/equipment/${item.slug}`} key={item.slug} className={styles.featuredCard}>
              <div className={styles.featuredImage}></div>
              <h3>{item.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.howItWorks}>
        <h2>How It Works</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <h3>Browse</h3>
            <p>Explore our equipment catalog</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <h3>Check Availability</h3>
            <p>View real-time availability</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <h3>Visit Institute</h3>
            <p>Coordinate with the institution</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>4</div>
            <h3>Use Equipment</h3>
            <p>Access the equipment you need</p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Ready to Get Started?</h2>
        <Link href="/contact" className={styles.btnPrimary}>Contact Us</Link>
      </section>
    </Layout>
  )
}
