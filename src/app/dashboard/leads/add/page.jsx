'use client';
import { useState } from 'react';
import './style.css';
import axios from 'axios';

export default function AddLead() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    DOB: '',
    gender: '',
    countryofresidence: '',
    preferencecountry: '',
    prefferredcourse: '',
    intake: '',
    qualification: '',
    score: '',
    budget: '',
    source: '',
    leaddate: '',
    counsellorname: '',
    status: '',
    remarks: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post('https://eduwire-crm.onrender.com/api/leads', formData);
    //   alert('Lead submitted successfully!');
    // } catch (error) {
    //   alert('Error submitting lead');
    //   console.error(error);
    // }
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <div className="form-container">

      <div className="top-content">
        <h3 className="table-title">Add Lead</h3>
        <p>Please fill out the form in steps for better accuracy.</p>
      </div>
      <div className="steps-container">
        {['Personal Info', 'Preferences', 'Follow-up'].map((label, index) => (
          <div key={index} className={`step ${step === index + 1 ? 'active' : ''}`}>
            <div>{index + 1}</div>
            <h5>{label}</h5>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <section className="specific-info-section">
            <h2 className="section-title">Personal Information</h2>
            <div className="grid">
              <input name="fullname" placeholder="Full Name" onChange={handleChange} />
              <input name="email" placeholder="Email" onChange={handleChange} />
              <input name="phone" placeholder="Phone Number" onChange={handleChange} />
              <input name="DOB" type="date" onChange={handleChange} />
              <select name="gender" onChange={handleChange}>
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <input name="countryofresidence" placeholder="Country of Residence" onChange={handleChange} />
            </div>
          </section>
        )}

        {step === 2 && (
          <section className="specific-info-section">
            <h2 className="section-title">Study Preferences</h2>
            <div className="grid">
              <input name="preferencecountry" placeholder="Preferred Country" onChange={handleChange} />
              <input name="prefferredcourse" placeholder="Preferred Course" onChange={handleChange} />
              <input name="intake" placeholder="Intake" onChange={handleChange} />
              <input name="qualification" placeholder="Qualification" onChange={handleChange} />
              <input name="score" placeholder="IELTS/TOEFL Score" onChange={handleChange} />
              <input name="budget" placeholder="Budget (in ₹ / USD)" onChange={handleChange} />
            </div>
          </section>
        )}

        {step === 3 && (
          <>
            <section className="specific-info-section">
              <h2 className="section-title">Follow-up Info</h2>
              <div className="grid">
                <select name="source" onChange={handleChange}>
                  <option value="">Lead Source</option>
                  <option>Facebook</option>
                  <option>Instagram</option>
                  <option>Website</option>
                  <option>Referral</option>
                  <option>Other</option>
                </select>
                <input name="leaddate" type="date" onChange={handleChange} />
                <input name="counsellorname" placeholder="Counselor Name" onChange={handleChange} />
                <select name="status" onChange={handleChange}>
                  <option value="">Lead Status</option>
                  <option>New</option>
                  <option>In Process</option>
                  <option>Converted</option>
                  <option>Not Interested</option>
                </select>
              </div>
            </section>

            <section className="specific-info-section">
              <h2 className="section-title">Remarks</h2>
              <textarea
                name="remarks"
                placeholder="Notes or comments about this lead"
                onChange={handleChange}
                rows="4"
                className="textarea"
              ></textarea>
            </section>
          </>
        )}

        <div className="submit-wrapper">
          {step > 1 && (
            <button type="button" className="submit-btn secondary" onClick={prevStep}>
              Back
            </button>
          )}
          {step < 3 ? (
            <button type="button" className="submit-btn" onClick={nextStep}>
              Continue
            </button>
          ) : (
            <button type="submit" className="submit-btn">
              Submit Lead
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
