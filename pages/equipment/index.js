import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import styles from '../../styles/Equipment.module.css'
import equipmentData from '../../data/equipment.json'

export default function EquipmentList() {
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

  const [equipment, setEquipment] = useState(equipmentData.map(item => ({
    ...item,
    image: imageMap[item.slug] || null
  })))
  const [filters, setFilters] = useState({
    category: '',
    availability: '',
    gpuTier: '',
    civil: false,
    environmental: false
  })

  useEffect(() => {
    let filtered = equipmentData.map(item => ({
      ...item,
      image: imageMap[item.slug] || null
    }))

    if (filters.category) {
      filtered = filtered.filter(item => item.category === filters.category)
    }

    if (filters.availability) {
      filtered = filtered.filter(item => item.availability === filters.availability)
    }

    if (filters.gpuTier) {
      filtered = filtered.filter(item => 
        item.category === 'GPU Workstations' || item.category === 'AI Servers'
      )
    }

    if (filters.civil) {
      filtered = filtered.filter(item => item.category === 'Civil')
    }

    if (filters.environmental) {
      filtered = filtered.filter(item => item.category === 'Environmental')
    }

    setEquipment(filtered)
  }, [filters])

  const categories = [...new Set(equipmentData.map(item => item.category))]

  return (
    <Layout>
      <Head>
        <title>Equipment List - LabLinc</title>
      </Head>

      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <h2>Filters</h2>
          
          <div className={styles.filterGroup}>
            <h3>Category</h3>
            <select 
              value={filters.category} 
              onChange={(e) => setFilters({...filters, category: e.target.value})}
            >
              <option value="">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <h3>Availability</h3>
            <select 
              value={filters.availability} 
              onChange={(e) => setFilters({...filters, availability: e.target.value})}
            >
              <option value="">All</option>
              <option value="Available">Available</option>
              <option value="Booked">Booked</option>
            </select>
          </div>

          <div className={styles.filterGroup}>
            <h3>GPU Tier</h3>
            <label>
              <input 
                type="checkbox" 
                checked={filters.gpuTier === 'gpu'}
                onChange={(e) => setFilters({...filters, gpuTier: e.target.checked ? 'gpu' : ''})}
              />
              GPU Equipment
            </label>
          </div>

          <div className={styles.filterGroup}>
            <h3>Specialized</h3>
            <label>
              <input 
                type="checkbox" 
                checked={filters.civil}
                onChange={(e) => setFilters({...filters, civil: e.target.checked})}
              />
              Civil
            </label>
            <label>
              <input 
                type="checkbox" 
                checked={filters.environmental}
                onChange={(e) => setFilters({...filters, environmental: e.target.checked})}
              />
              Environmental
            </label>
          </div>

          <button 
            className={styles.clearFilters}
            onClick={() => setFilters({category: '', availability: '', gpuTier: '', civil: false, environmental: false})}
          >
            Clear Filters
          </button>
        </aside>

        <main className={styles.main}>
          <h1>Equipment Catalog</h1>
          <p className={styles.count}>{equipment.length} items found</p>
          
          <div className={styles.grid}>
            {equipment.map(item => (
              <Link href={`/equipment/${item.slug}`} key={item.id} className={styles.card}>
                <div className={styles.cardImage}>
                  {item.image ? (
                    <img src={item.image} alt={item.name} loading="lazy" />
                  ) : null}
                </div>
                <div className={styles.cardContent}>
                  <h3>{item.name}</h3>
                  <p className={styles.category}>{item.category}</p>
                  <p className={styles.institute}>{item.institute}</p>
                  <span className={`${styles.badge} ${item.availability === 'Available' ? styles.available : styles.booked}`}>
                    {item.availability}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  )
}
