import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/About.module.css'

export default function About() {
  const team = [
    { name: 'Niranjan Desai', role: 'Operations' },
    { name: 'Narendra Hannurkar', role: 'Operations' },
    { name: 'Aditya Shinde', role: 'Technical' }
  ]

  return (
    <Layout>
      <Head>
        <title>About Us - LabLinc</title>
      </Head>

      <div className={styles.container}>
        <section className={styles.hero}>
          <h1>About LabLinc</h1>
        </section>

        <section className={styles.section}>
          <h2>Who We Are</h2>
          <p>
            LabLinc is a technology platform that connects engineering colleges with startups, 
            MSMEs, and innovators. We bridge the gap between idle academic resources and 
            industry needs, making advanced equipment accessible to those who need it most.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Our Mission</h2>
          <p>
            To maximize asset utilization while enabling affordable innovation across India. 
            We believe that expensive equipment sitting idle in colleges can power the next 
            generation of startups and innovations.
          </p>
        </section>

        <section className={styles.team}>
          <h2>Our Team</h2>
          <div className={styles.teamGrid}>
            {team.map((member) => (
              <div key={member.name} className={styles.teamCard}>
                <div className={styles.avatar}></div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
