"use client"

import { useState } from "react"
import {
  ChevronDown,
  Calendar,
  Users,
  CheckCircle,
  XCircle,
  AlertCircle,
  Search,
  GraduationCap,
  Wallet,
} from "lucide-react"
// import "./dashboard.css"

export default function Dashboard() {
  // const [dateRange, setDateRange] = useState("")

  // Using the leads data from your original code
  const stats = [
    { title: "Total Leads", value: 120, icon: <Users />, color: "blue" },
    { title: "Connected", value: 60, icon: <CheckCircle />, color: "green" },
    { title: "Not Connected", value: 30, icon: <AlertCircle />, color: "orange" },
    { title: "Rejected", value: 15, icon: <XCircle />, color: "red" },
  ]

  // Additional metrics based on the image
  const additionalStats = [
    { title: "All Applications", value: 26, color: "blue" },
    { title: "Offers", value: 6, color: "blue" },
    { title: "Payments", value: 1, color: "green" },
    { title: "Visas Received", value: 1, color: "green" },
  ]

  const features = [
    {
      icon: <Search />,
      title: "Search Programs",
      description:
        "Explore 1,00,000+ program options using coursefinder.ai. Filter, shortlist, compare universities, programs.",
      color: "blue",
    },
    {
      icon: <GraduationCap />,
      title: "Students",
      description: "Manage Students and Applications",
      color: "blue",
      links: ["Manage Students", "Manage Applications"],
    },
    {
      icon: <Wallet />,
      title: "My Wallet",
      description: "Add money to your wallet for instant Application Fee payments.",
      color: "blue",
    },
  ]

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        {/* Header */}
        <div className="dashboard-header">
          <h1 className="dashboard-title">Dashboard</h1>
          <p className="dashboard-subtitle">Welcome to Eduwire portal</p>
        </div>

        {/* Filters */}
        <div className="filter-section">
          <div className="filter-container">
            <div className="filter-item date-filter">
              <button className="filter-button">
                <Calendar className="filter-icon" />
                {/* {dateRange} */}
                <p>01/04/2025 - 05/06/2025</p>
                <ChevronDown className="chevron-icon" />
              </button>
            </div>

            <div className="filter-item">
              <button className="filter-button">
                Select Intake
                <ChevronDown className="chevron-icon" />
              </button>
            </div>

            <div className="filter-item">
              <button className="filter-button">
                Select Year
                <ChevronDown className="chevron-icon" />
              </button>
            </div>

            <div className="filter-item">
              <button className="filter-button">
                Select Countries
                <ChevronDown className="chevron-icon" />
              </button>
            </div>

            <button className="apply-filter-button">Apply Filter</button>
          </div>
        </div>

        {/* Leads Stats Cards */}
        <h2 className="section-title">Leads Management</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className={`stat-card ${stat.color}-border`}>
              <div className="stat-content">
                <div className="stat-info">
                  <p className="stat-title">{stat.title}</p>
                  <p className="stat-value">{stat.value}</p>
                </div>
                <div className={`stat-icon ${stat.color}-icon`}>{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats Cards */}
        <h2 className="section-title">Applications Overview</h2>
        <div className="stats-grid">
          {additionalStats.map((stat, index) => (
            <div key={index} className={`stat-card ${stat.color}-border`}>
              <div className="stat-content">
                <div className="stat-info">
                  <p className="stat-title">{stat.title}</p>
                  <p className="stat-value">{stat.value}</p>
                </div>
                <ChevronDown className="chevron-icon" />
              </div>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className={`feature-icon-container ${feature.color}-bg`}>{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              {feature.links && (
                <div className="feature-links">
                  {feature.links.map((link, linkIndex) => (
                    <a key={linkIndex} href="#" className="feature-link">
                      {link}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
