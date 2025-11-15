import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Contact.module.css'
import equipmentData from '../data/equipment.json'

export default function Contact() {
  const categories = [...new Set(equipmentData.map(item => item.category))]

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
            <form 
              action="https://formspree.io/f/xblqkzdv" 
              method="POST" 
              className={styles.form}
            >
              <div className={styles.formGroup}>
                <label>Full Name *</label>
                <input 
                  type="text" 
                  name="name"
                  required 
                />
              </div>

              <div className={styles.formGroup}>
                <label>Email *</label>
                <input 
                  type="email" 
                  name="email"
                  required 
                />
              </div>

              <div className={styles.formGroup}>
                <label>Phone *</label>
                <input 
                  type="tel" 
                  name="phone"
                  required 
                />
              </div>

              <div className={styles.formGroup}>
                <label>Organization *</label>
                <input 
                  type="text" 
                  name="organization"
                  required 
                />
              </div>

              <div className={styles.formGroup}>
                <label>Equipment Needed *</label>
                <select 
                  name="equipment_needed"
                  required 
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
                  name="message"
                  required 
                  rows="5"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              {/* Hidden fields for contact numbers */}
              <input 
                type="hidden" 
                name="contact_numbers" 
                value="+91 73539 57307, +91 82170 76246" 
              />

              {/* Redirect to thank you page after submission */}
              <input 
                type="hidden" 
                name="_next" 
                value="/thank-you" 
              />

              {/* Subject line for email */}
              <input 
                type="hidden" 
                name="_subject" 
                value="New Contact Form Submission - LabLinc" 
              />

              <button type="submit" className={styles.submitBtn}>
                Send Message
              </button>
            </form>
          </div>

          <div className={styles.infoSection}>
            <h2>Contact Information</h2>
            
            <div className={styles.infoItem}>
              <h3>📧 Email</h3>
              <a href="mailto:lablinc.global@gmail.com">lablinc.global@gmail.com</a>
            </div>

            <div className={styles.infoItem}>
              <h3>📞 Phone</h3>
              <a href="tel:+917353957307">+91 73539 57307</a>
              <a href="tel:+918217076246">+91 82170 76246</a>
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
