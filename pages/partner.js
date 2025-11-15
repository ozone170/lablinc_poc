import { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Partner.module.css'

export default function Partner() {
  const [formData, setFormData] = useState({
    instituteName: '',
    coordinatorName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const equipmentTypes = [
    'CNC Machines',
    '3D Printers',
    'Electronics Lab Equipment',
    'GPU Workstations',
    'AI Servers',
    'Total Station',
    'Rainwater Harvesting Systems',
    'Material Testing Equipment'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        instituteName: '',
        coordinatorName: '',
        email: '',
        phone: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <Layout>
      <Head>
        <title>Partner With Us - LabLinc</title>
      </Head>

      <div className={styles.container}>
        <section className={styles.hero}>
          <h1>Partner With LabLinc</h1>
          <p>Join our network and make your equipment accessible to innovators</p>
        </section>

        <section className={styles.benefits}>
          <h2>Why Partner With LabLinc?</h2>
          <div className={styles.benefitGrid}>
            <div className={styles.benefit}>
              <h3>💰 Generate Revenue</h3>
              <p>Monetize idle equipment and generate additional income for your institution</p>
            </div>
            <div className={styles.benefit}>
              <h3>🤝 Industry Collaboration</h3>
              <p>Connect with startups, MSMEs, and innovators for potential partnerships</p>
            </div>
            <div className={styles.benefit}>
              <h3>📊 Better Utilization</h3>
              <p>Maximize the ROI on expensive equipment investments</p>
            </div>
            <div className={styles.benefit}>
              <h3>🎓 Student Exposure</h3>
              <p>Provide students with real-world industry exposure and networking</p>
            </div>
          </div>
        </section>

        <section className={styles.equipment}>
          <h2>Accepted Equipment Types</h2>
          <div className={styles.equipmentList}>
            {equipmentTypes.map((type) => (
              <div key={type} className={styles.equipmentItem}>
                ✓ {type}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.formSection}>
          <h2>Partner Application Form</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label>Institute Name *</label>
              <input 
                type="text" 
                required 
                value={formData.instituteName}
                onChange={(e) => setFormData({...formData, instituteName: e.target.value})}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Coordinator Name *</label>
              <input 
                type="text" 
                required 
                value={formData.coordinatorName}
                onChange={(e) => setFormData({...formData, coordinatorName: e.target.value})}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Email *</label>
              <input 
                type="email" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Phone *</label>
              <input 
                type="tel" 
                required 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Message</label>
              <textarea 
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Tell us about your equipment and facilities..."
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>Submit Application</button>
          </form>

          {submitted && (
            <div className={styles.successMessage}>
              ✓ Application submitted successfully! We'll contact you soon.
            </div>
          )}
        </section>
      </div>
    </Layout>
  )
}
