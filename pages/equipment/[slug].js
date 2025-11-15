import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import styles from '../../styles/EquipmentDetail.module.css'
import equipmentData from '../../data/equipment.json'

export default function EquipmentDetail({ equipment }) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    purpose: '',
    preferredDate: ''
  })
  const [showPopup, setShowPopup] = useState(false)

  if (!equipment) {
    return (
      <Layout>
        <div className={styles.container}>
          <h1>Equipment not found</h1>
        </div>
      </Layout>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowPopup(true)
    setTimeout(() => {
      setShowPopup(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        purpose: '',
        preferredDate: ''
      })
    }, 3000)
  }

  return (
    <Layout>
      <Head>
        <title>{equipment.name} - LabLinc</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.equipmentInfo}>
          <div className={styles.imageContainer}>
            <div className={styles.imagePlaceholder}></div>
          </div>
          
          <div className={styles.details}>
            <h1>{equipment.name}</h1>
            <p className={styles.category}>{equipment.category}</p>
            <p className={styles.institute}>📍 {equipment.institute}</p>
            <span className={`${styles.badge} ${equipment.availability === 'Available' ? styles.available : styles.booked}`}>
              {equipment.availability}
            </span>

            <div className={styles.specs}>
              <h2>Specifications</h2>
              <ul>
                {Object.entries(equipment.specs).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key.replace(/_/g, ' ').toUpperCase()}:</strong> {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bookingSection}>
          <h2>Request Booking</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label>Name *</label>
              <input 
                type="text" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
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
              <label>Purpose *</label>
              <textarea 
                required 
                rows="4"
                value={formData.purpose}
                onChange={(e) => setFormData({...formData, purpose: e.target.value})}
              ></textarea>
            </div>

            <div className={styles.formGroup}>
              <label>Preferred Date *</label>
              <input 
                type="date" 
                required 
                value={formData.preferredDate}
                onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
              />
            </div>

            <button type="submit" className={styles.submitBtn}>Submit Request</button>
          </form>
        </div>
      </div>

      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h3>✓ Request Sent!</h3>
            <p>We'll get back to you soon.</p>
          </div>
        </div>
      )}
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = equipmentData.map(item => ({
    params: { slug: item.slug }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const equipment = equipmentData.find(item => item.slug === params.slug)

  return {
    props: {
      equipment: equipment || null
    }
  }
}
