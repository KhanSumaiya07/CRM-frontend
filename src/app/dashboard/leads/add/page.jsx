"use client"
import { useState } from "react"
import { User, MapPin, GraduationCap, Briefcase, FileText, Info } from "lucide-react"
import "./style.css"

export default function AddLead() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    DOB: "",
    gender: "",
    countryofresidence: "",
    preferencecountry: "",
    prefferredcourse: "",
    intake: "",
    qualification: "",
    score: "",
    budget: "",
    source: "",
    leaddate: "",
    counsellorname: "",
    status: "",
    remarks: "",
  })

  const steps = [
    { id: 1, title: "Personal Information", status: "complete", icon: User },
    { id: 2, title: "Study Preferences", status: "complete", icon: GraduationCap },
    { id: 3, title: "Follow-up Info", status: "optional", icon: Briefcase },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const nextStep = () => setStep((prev) => prev + 1)
  const prevStep = () => setStep((prev) => prev - 1)

  const getStepStatus = (stepId) => {
    if (stepId < step) return "complete"
    if (stepId === step) return "active"
    return "pending"
  }

  return (
    <div>
      {/* <div className='page-header'>
        <h2 className='dashboard-page-heading'>Add Lead</h2>
        <p>Enter student info to create a new lead.</p>
      </div> */}
      {/* Header */}
        <div className="dashboard-header">
          <h1 className="dashboard-title">Add Lead</h1>
          <p className="dashboard-subtitle">Enter student info to create a new lead.</p>
        </div>
    <div className="form-wrapper">
      {/* Progress Steps */}
      <div className="progress-section">
        <div className="steps-header">
          {steps.map((stepItem, index) => {
            const status = getStepStatus(stepItem.id)
            return (
              <div key={stepItem.id} className="step-item">
                <div className="step-content">
                  <div className="step-info">
                    <h3 className={`step-title ${status}`}>{stepItem.title}</h3>
                    <p
                      className={`step-status ${status === "complete" ? "complete" : status === "optional" ? "optional" : "pending"}`}
                    >
                      {status === "complete" ? "Complete" : status === "optional" ? "Optional" : "Pending"}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }} />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="form-container">
        {step === 1 && (
          <div className="step-sections">
            <div className="form-card">
              <div className="card-header">
                <div className="header-content">
                  <div className="icon-wrapper">
                    <User className="section-icon" />
                  </div>
                  <h2 className="section-title">Personal Information</h2>
                </div>
                <button type="button" className="edit-button">
                  Request Edit
                  <Info className="info-icon" />
                </button>
              </div>
              <div className="card-content">
                <div className="content-wrapper">
                  <div className="form-grid">
                    <div className="form-field">
                      <label className="field-label">Full Name</label>
                      <input
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                        placeholder="Enter full name"
                        className="form-input"
                      />
                    </div>
                    <div className="form-field">
                      <label className="field-label">Date of Birth</label>
                      <input
                        name="DOB"
                        type="date"
                        value={formData.DOB}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                    <div className="form-field">
                      <label className="field-label">Gender</label>
                      <select name="gender" value={formData.gender} onChange={handleChange} className="form-select">
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-card">
              <div className="card-header">
                <div className="header-content">
                  <div className="icon-wrapper">
                    <MapPin className="section-icon" />
                  </div>
                  <h2 className="section-title">Contact Information</h2>
                </div>
                <button type="button" className="edit-button">
                  Request Edit
                  <Info className="info-icon" />
                </button>
              </div>
              <div className="card-content">
                <div className="content-wrapper">
                  <div className="form-grid-2">
                    <div className="form-field">
                      <label className="field-label">Email</label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        className="form-input"
                      />
                    </div>
                    <div className="form-field">
                      <label className="field-label">Phone Number</label>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        className="form-input"
                      />
                    </div>
                    <div className="form-field full-width">
                      <label className="field-label">Country of Residence</label>
                      <input
                        name="countryofresidence"
                        value={formData.countryofresidence}
                        onChange={handleChange}
                        placeholder="Enter country of residence"
                        className="form-input"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="form-card">
            <div className="card-header">
              <div className="header-content">
                <div className="icon-wrapper">
                  <GraduationCap className="section-icon" />
                </div>
                <h2 className="section-title">Study Preferences</h2>
              </div>
              <button type="button" className="edit-button">
                Request Edit
                <Info className="info-icon" />
              </button>
            </div>
            <div className="card-content">
              <div className="content-wrapper">
                <div className="form-grid-2">
                  <div className="form-field">
                    <label className="field-label">Preferred Country</label>
                    <input
                      name="preferencecountry"
                      value={formData.preferencecountry}
                      onChange={handleChange}
                      placeholder="Enter preferred country"
                      className="form-input"
                    />
                  </div>
                  <div className="form-field">
                    <label className="field-label">Preferred Course</label>
                    <input
                      name="prefferredcourse"
                      value={formData.prefferredcourse}
                      onChange={handleChange}
                      placeholder="Enter preferred course"
                      className="form-input"
                    />
                  </div>
                  <div className="form-field">
                    <label className="field-label">Intake</label>
                    <input
                      name="intake"
                      value={formData.intake}
                      onChange={handleChange}
                      placeholder="Enter intake period"
                      className="form-input"
                    />
                  </div>
                  <div className="form-field">
                    <label className="field-label">Qualification</label>
                    <input
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      placeholder="Enter qualification"
                      className="form-input"
                    />
                  </div>
                  <div className="form-field">
                    <label className="field-label">IELTS/TOEFL Score</label>
                    <input
                      name="score"
                      value={formData.score}
                      onChange={handleChange}
                      placeholder="Enter test score"
                      className="form-input"
                    />
                  </div>
                  <div className="form-field">
                    <label className="field-label">Budget</label>
                    <input
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="Budget (in ₹ / USD)"
                      className="form-input"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="step-sections">
            <div className="form-card">
              <div className="card-header">
                <div className="header-content">
                  <div className="icon-wrapper">
                    <Briefcase className="section-icon" />
                  </div>
                  <h2 className="section-title">Follow-up Information</h2>
                </div>
                <button type="button" className="edit-button">
                  Request Edit
                  <Info className="info-icon" />
                </button>
              </div>
              <div className="card-content">
                <div className="content-wrapper">
                  <div className="form-grid-2">
                    <div className="form-field">
                      <label className="field-label">Lead Source</label>
                      <select name="source" value={formData.source} onChange={handleChange} className="form-select">
                        <option value="">Select lead source</option>
                        <option value="facebook">Facebook</option>
                        <option value="instagram">Instagram</option>
                        <option value="website">Website</option>
                        <option value="referral">Referral</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label className="field-label">Lead Date</label>
                      <input
                        name="leaddate"
                        type="date"
                        value={formData.leaddate}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                    <div className="form-field">
                      <label className="field-label">Counselor Name</label>
                      <input
                        name="counsellorname"
                        value={formData.counsellorname}
                        onChange={handleChange}
                        placeholder="Enter counselor name"
                        className="form-input"
                      />
                    </div>
                    <div className="form-field">
                      <label className="field-label">Lead Status</label>
                      <select name="status" value={formData.status} onChange={handleChange} className="form-select">
                        <option value="">Select status</option>
                        <option value="new">New</option>
                        <option value="in-process">In Process</option>
                        <option value="converted">Converted</option>
                        <option value="not-interested">Not Interested</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-card">
              <div className="card-header">
                <div className="header-content">
                  <div className="icon-wrapper">
                    <FileText className="section-icon" />
                  </div>
                  <h2 className="section-title">Additional Notes</h2>
                </div>
                <button type="button" className="edit-button">
                  Request Edit
                  <Info className="info-icon" />
                </button>
              </div>
              <div className="card-content">
                <div className="content-wrapper">
                  <div className="form-field">
                    <label className="field-label">Remarks</label>
                    <textarea
                      name="remarks"
                      value={formData.remarks}
                      onChange={handleChange}
                      placeholder="Notes or comments about this lead"
                      rows={4}
                      className="form-textarea"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="navigation-buttons">
          {step > 1 && (
            <button type="button" onClick={prevStep} className="back-button">
              Back
            </button>
          )}
          <div className="continue-wrapper">
            {step < 3 ? (
              <button type="button" onClick={nextStep} className="continue-button">
                Continue
              </button>
            ) : (
              <button type="submit" className="submit-button">
                Submit Lead
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
    </div>
  )
}
