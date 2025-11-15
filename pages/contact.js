import { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Contact.module.css'
import equipmentData from '../data/equipment.json'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    equipmentNeeded: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const categories = [...new Set(equipmentData.map(item => item.category))]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          organization: '',
          equipmentNeeded: '',
          message: ''
        })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError('Failed to send message. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Layout>
      <Head>
        <title>Contact Us - LabLinc</title>
      </Head>

      <div className={styles.container}>
        <h1>Contact Us</h1>
        
        <div className={styles.content}>
          <div className={styles.formSection}>
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label>Full Name *</label>
                <input 
                  type="text" 
                  required 
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
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
                <label>Organization *</label>
                <input 
                  type="text" 
                  required 
                  value={formData.organization}
                  onChange={(e) => setFormData({...formData, organization: e.target.value})}
                />
              </div>

              <div className={styles.formGroup}>
                <label>Equipment Needed *</label>
                <select 
                  required 
                  value={formData.equipmentNeeded}
                  onChange={(e) => setFormData({...formData, equipmentNeeded: e.target.value})}
                >
                  <option value="">Select a category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label>Message *</label>
                <textarea 
                  required 
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button type="submit" className={styles.submitBtn} disabled={submitting}>
                {submitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitted && (
                <div className={styles.successMessage}>
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {error && (
                <div className={styles.errorMessage}>
                  {error}
                </div>
              )}
            </form>
          </div>

          <div className={styles.infoSection}>
            <h2>Contact Information</h2>
            
            <div className={styles.infoItem}>
              <h3>📧 Email</h3>
              <a href="mailto:lablinc.global@gmail.com">lablinc.global@gmail.com</a>
            </div>

            <div className={styles.infoItem}>
              <h3>📍 Address</h3>
              <p>VTU, Jnana Sangama<br />Belagavi – 590018<br />Karnataka, India</p>
            </div>

            <div className={styles.infoItem}>
              <h3>🔗 Social Media</h3>
              <div className={styles.social}>
                <a href="https://www.instagram.com/lablinc" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
                <a href="https://www.linkedin.com/company/lablinc" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
