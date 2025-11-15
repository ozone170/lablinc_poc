import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import styles from '../../styles/Equipment.module.css'
import equipmentData from '../../data/equipment.json'

export default function EquipmentList() {
  const [equipment, setEquipment] = useState(equipmentData)
  const [filters, setFilters] = useState({
    category: '',
    availability: '',
    gpuTier: '',
    civil: false,
    environmental: false
  })

  useEffect(() => {
    let filtered = equipmentData

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
                <div className={styles.cardImage}></div>
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
