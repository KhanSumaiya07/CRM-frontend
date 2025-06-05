import { Users, CheckCircle, XCircle, AlertCircle } from "lucide-react"
// import "../dashboard.css"

export default function LeadsCard({ title, value, color }) {
  // Map title to appropriate icon
  const getIcon = () => {
    switch (title) {
      case "Total Leads":
        return <Users />
      case "Connected":
        return <CheckCircle />
      case "Not Connected":
        return <AlertCircle />
      case "Rejected":
        return <XCircle />
      default:
        return <Users />
    }
  }

  // Map color string to CSS class
  const getBorderClass = () => {
    switch (color) {
      case "#0070f3":
      case "blue":
        return "blue-border"
      case "green":
        return "green-border"
      case "orange":
        return "orange-border"
      case "red":
        return "red-border"
      default:
        return "blue-border"
    }
  }

  const getIconClass = () => {
    switch (color) {
      case "#0070f3":
      case "blue":
        return "blue-icon"
      case "green":
        return "green-icon"
      case "orange":
        return "orange-icon"
      case "red":
        return "red-icon"
      default:
        return "blue-icon"
    }
  }

  return (
    <div className={`stat-card ${getBorderClass()}`}>
      <div className="stat-content">
        <div className="stat-info">
          <p className="stat-title">{title}</p>
          <p className="stat-value">{value}</p>
        </div>
        <div className={`stat-icon ${getIconClass()}`}>{getIcon()}</div>
      </div>
    </div>
  )
}
