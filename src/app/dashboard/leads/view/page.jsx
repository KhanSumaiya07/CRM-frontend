"use client";
import { useEffect, useState } from "react";
import { Upload, Download, SlidersHorizontal, ArrowDownUp } from "lucide-react";
import axios from "axios";
import "./style.css"; 

const ViewLeads = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  const downloadCSV = () => {
  if (!leads.length) return;

  const headers = [
  'fullname',        
  'email',
  'phone',
  'preferencecountry',  
  'prefferredcourse',  
  'status',
  'leaddate'           
];


  const csvRows = [
    headers.join(','), // header row
    ...leads.map(lead => {
      const followUpsText = (lead.followUps || [])
        .map(f => `${f.date?.slice(0, 10)}: ${f.notes}`)
        .join(' | ');
      return headers.map(header => {
        const value = header === 'followUps' ? followUpsText : lead[header] ?? '';
        return `"${value.toString().replace(/"/g, '""')}"`; // escape quotes
      }).join(',');
    })
  ];

  const csvContent = csvRows.join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'leads_with_followups.csv';
  a.click();
  URL.revokeObjectURL(url);
};
  // Fetch leads when component mounts
  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await axios.get("https://eduwire-crm.onrender.com/api/leads");
        setLeads(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch leads.");
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  if (loading) return <p>Loading leads...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="table-container">
        <div className="top-content">
            <h3 className="table-title">Students</h3>
        <p>Manage Students and their profile</p>
        </div>
         <div className="lead-buttons">
      <button className="btn-import">
        <Upload size={16} style={{ marginRight: 6 }} />
        Import Leads
      </button>
      <button onClick={downloadCSV} className="btn-export">
        <Download size={16} style={{ marginRight: 6 }} />
        Export Leads
      </button>
      <button className="btn-filter">
        <SlidersHorizontal size={16} style={{ marginRight: 6 }} />
        Filter
      </button>
      <button className="btn-sort">
        <ArrowDownUp size={16} style={{ marginRight: 6 }} />
        Sort By
      </button>
    </div>
      {/* <h1 className="table-title">All Study Abroad Leads</h1> */}
      <table className="leads-table">
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Preferred Country</th>
            <th>Course</th>
            <th>Status</th>
            <th>Lead Date</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead, index) => (
            <tr key={lead._id}>
              {/* <td>{index + 1}</td> */}
              <td>{lead.fullname}</td>
              <td>{lead.email}</td>
              <td>{lead.phone}</td>
              <td>{lead.preferencecountry}</td>
              <td>{lead.prefferredcourse}</td>
              <td>{lead.status}</td>
             <td>{new Date(lead.leaddate).toLocaleDateString()}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewLeads;
