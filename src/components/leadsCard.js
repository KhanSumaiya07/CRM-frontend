

export default function Card({ title, value, color }) {
  return (
    <div className="card" style={{ borderLeft: `5px solid ${color}` }}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  )
}
