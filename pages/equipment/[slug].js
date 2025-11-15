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
            {equipment.image ? (
              <img src={equipment.image} alt={equipment.name} className={styles.equipmentImage} />
            ) : (
              <div className={styles.imagePlaceholder}></div>
            )}
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

  // Add images for equipment
  const imageMap = {
    'cnc-lathe-vtu': 'https://www.focus-cnc.com/web/image/product.product/20/image_1024/FBL-510-%20520-%20530-%20540-%20MC?unique=4fbd8a8',
    'fdm-3d-printer': 'https://zbotic.in/wp-content/uploads/2025/10/t6ofhcip.png',
    'a100-ai-server': 'https://www.nvidia.com/content/dam/en-zz/vi_vn/Solutions/viettel-pioneers-ai-research-using-nvidia-dgx-a100-banner.jpg',
    'rtx-4090-workstation': 'https://wp-cdn.pugetsystems.com/2022/08/Closeup-photo-of-1-7x-NVIDIA-GeForce-RTX-4090-in-mining-rack.png',
    'total-station': 'https://www.topconpositioning.com/content/topconpositioning/global/en/solutions/technology/infrastructure-products/robotic-total-stations/_jcr_content/root/container/container/container_677028762/image.coreimg.85.1600.jpeg/1755206312275/robotic-total-stations-web-teaser1.jpeg',
    'rainwater-harvesting-system': 'https://www.svl.com/wp-content/uploads/2024/04/Wahasop-RAINWATER-HARVESTING-SYSTEMS.png',
    'cnc-milling-machine': 'https://image.made-in-china.com/202f0j00cdFbzBsJpHoI/High-Performance-Vmc1160-10000rpm-3-4-5-Axis-CNC-Milling-Machine-CNC-Vertical-Machining-Center.webp',
    'sla-3d-printer': 'https://develop3d.com/wp-content/uploads/2019/04/Stratasys-v650-Flex-SLA-3D-Printer-1024x576.jpg',
    'oscilloscope-digital': 'https://www.rigolna.com/images/products/MSO5000.png',
    'spectrum-analyzer': 'https://electronicsbuzz.in/wp-content/uploads/2025/01/imresizer-1735886248353.jpg',
    'universal-testing-machine': 'https://www.matest.com/contents/products/h001b.jpg',
    'hardness-tester': 'https://5.imimg.com/data5/SELLER/Default/2025/7/531717517/TN/AV/GL/5263696/metal-hardness-tester-500x500.jpg',
    'lathe-machine-conventional': 'https://5.imimg.com/data5/SELLER/Default/2022/12/ZN/QP/PB/153029/conventional-lathe-machine.JPG',
    'milling-machine-conventional': 'https://technologicalprocess.com/wp-content/uploads/2021/07/frezarka_wyr.jpg',
    'rtx-3090-workstation': 'https://cdna.pcpartpicker.com/static/forever/images/userbuild/334963.247dcfb3492233a216a9a7d96bd09d85.jpg',
    'v100-ai-server': 'https://www.servethehome.com/wp-content/uploads/2019/02/8x-NVIDIA-Tesla-V100-32GB-Server.jpg',
    'hydraulic-press': 'https://cdn.thefabricator.com/a/stamping-101-anatomy-of-a-hydraulic-press-1634077329.jpg',
    'function-generator': 'https://in.element14.com/productimages/large/en_GB/2469113-40.jpg',
    'water-quality-analyzer': 'https://5.imimg.com/data5/SELLER/Default/2025/8/536066241/NE/KZ/US/223692774/water-quality-analyzer-1000x1000.jpeg',
    'gps-surveying-equipment': 'https://www.sitechukandireland.com/content/dam/whitelabel/sitechukandireland/pages/en/products/gps/R780%20Montage.png',
    'cnc-plasma-cutter': 'https://5.imimg.com/data5/SELLER/Default/2024/12/470436902/HE/AZ/ZP/88199447/portable-cnc-cutting-machine-1000x1000.jpg',
    'impact-testing-machine': 'https://i.ytimg.com/vi/lrEl9Qr0jM8/maxresdefault.jpg',
    'metal-3d-printer': 'https://i.all3dp.com/wp-content/uploads/2022/03/23141948/10-ways-to-3d-print-metal.jpg',
    'pcb-prototyping-machine': 'https://miro.medium.com/v2/resize:fit:786/format:webp/1*kGf9-egqan4kO-1snAevXQ.jpeg',
    'h100-ai-server': 'https://cdn.uvation.com/marketing/2025/03/AI_Server_2.jpg'
  }

  if (equipment && imageMap[params.slug]) {
    equipment.image = imageMap[params.slug]
  }

  return {
    props: {
      equipment: equipment || null
    }
  }
}
