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
    { 
      name: 'CNC Lathe Machine', 
      slug: 'cnc-lathe-vtu',
      image: 'https://www.focus-cnc.com/web/image/product.product/20/image_1024/FBL-510-%20520-%20530-%20540-%20MC?unique=4fbd8a8'
    },
    { 
      name: 'FDM 3D Printer', 
      slug: 'fdm-3d-printer',
      image: 'https://zbotic.in/wp-content/uploads/2025/10/t6ofhcip.png'
    },
    { 
      name: 'A100 AI Compute Server', 
      slug: 'a100-ai-server',
      image: 'https://www.nvidia.com/content/dam/en-zz/vi_vn/Solutions/viettel-pioneers-ai-research-using-nvidia-dgx-a100-banner.jpg'
    },
    { 
      name: 'RTX 4090 Workstation', 
      slug: 'rtx-4090-workstation',
      image: 'https://wp-cdn.pugetsystems.com/2022/08/Closeup-photo-of-1-7x-NVIDIA-GeForce-RTX-4090-in-mining-rack.png'
    },
    { 
      name: 'Total Station', 
      slug: 'total-station',
      image: 'https://www.topconpositioning.com/content/topconpositioning/global/en/solutions/technology/infrastructure-products/robotic-total-stations/_jcr_content/root/container/container/container_677028762/image.coreimg.85.1600.jpeg/1755206312275/robotic-total-stations-web-teaser1.jpeg'
    },
    { 
      name: 'Rainwater Harvesting System', 
      slug: 'rainwater-harvesting-system',
      image: 'https://www.svl.com/wp-content/uploads/2024/04/Wahasop-RAINWATER-HARVESTING-SYSTEMS.png'
    }
  ]

  const instituteOfferings = [
    {
      title: 'CNC Lathe Machine Training',
      description: 'Hands-on training for precision machining and manufacturing'
    },
    {
      title: 'Additive Manufacturing',
      description: '3D printing technology and rapid prototyping courses'
    },
    {
      title: 'AI Computing Lab Setup',
      description: 'A100 & RTX 4090 workstations for AI/ML research'
    },
    {
      title: 'Surveying & Geomatics',
      description: 'Total Station training for civil engineering students'
    },
    {
      title: 'Sustainability Labs',
      description: 'Rainwater harvesting and environmental engineering'
    },
    {
      title: 'Industry 4.0 Training',
      description: 'Smart manufacturing and automation programs'
    }
  ]

  const companyOfferings = [
    {
      title: 'Custom Manufacturing & Prototyping',
      description: 'Rapid prototyping and small-batch production services'
    },
    {
      title: 'Production Process Automation',
      description: 'CNC machining and automated manufacturing solutions'
    },
    {
      title: 'AI/ML Compute Support',
      description: 'GPU cloud/node support for machine learning workloads'
    },
    {
      title: 'CAD/CAM Design Assistance',
      description: 'Professional design and engineering support'
    },
    {
      title: 'Product Development R&D',
      description: 'Research and development facilities access'
    },
    {
      title: 'On-site CNC Machining Support',
      description: 'Expert technicians and equipment for your projects'
    }
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
              <div className={styles.featuredImage}>
                <img src={item.image} alt={item.name} loading="lazy" />
              </div>
              <h3>{item.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.offerings}>
        <div className={styles.offeringsContainer}>
          <div className={styles.offeringSection}>
            <h2>For Institutes</h2>
            <div className={styles.offeringGrid}>
              {instituteOfferings.map((offering, index) => (
                <div key={index} className={styles.offeringCard}>
                  <div className={styles.offeringIcon}>🎓</div>
                  <h3>{offering.title}</h3>
                  <p>{offering.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.offeringSection}>
            <h2>For Companies / MSMEs / Startups</h2>
            <div className={styles.offeringGrid}>
              {companyOfferings.map((offering, index) => (
                <div key={index} className={styles.offeringCard}>
                  <div className={styles.offeringIcon}>🏢</div>
                  <h3>{offering.title}</h3>
                  <p>{offering.description}</p>
                </div>
              ))}
            </div>
          </div>
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
