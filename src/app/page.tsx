'use client'

import Card from '../components/leadsCard'
// import styles from '../styles/Dashboard.module.css'

export default function Dashboard() {
  const stats = [
    { title: 'Total Leads', value: 120, color: '#0070f3' },
    { title: 'Connected', value: 60, color: 'green' },
    { title: 'Not Connected', value: 30, color: 'orange' },
    { title: 'Rejected', value: 15, color: 'red' }
  ]

  return (
    <div>
      <h2 className='dashboard-page-heading'>Dashboard</h2>
      <p>Welcome to Eduwire portal</p>
      <div className="cardsContainer">
        {stats.map((item, index) => (
          <Card key={index} title={item.title} value={item.value} color={item.color} />
        ))}
      </div>
    </div>
  )
}
