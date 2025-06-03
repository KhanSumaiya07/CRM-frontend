'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp, LayoutDashboard, MessageSquare  } from 'lucide-react';
import './style.css';
import Link from 'next/link';

export default function Sidebar() {
  const [isLeadsOpen, setLeadsOpen] = useState(false);

  return (
    <div className="sidebar-wrapper">
      <ul className="sidebar-menu">
        <li>
           <LayoutDashboard />
          <Link href="/dashboard" className="sidebar-link">Dashboard</Link>
        </li>

        <li>
         <div>
           <button
            onClick={() => setLeadsOpen(!isLeadsOpen)}
            className="sidebar-button"
          >
           <MessageSquare /> Leads Management {isLeadsOpen ? <ChevronUp /> : <ChevronDown />}
          </button>

          {isLeadsOpen && (
            <ul className="sidebar-submenu">
              <li><Link href="/dashboard/leads/add" className="sidebar-link">Add</Link></li>
              <li><Link href="/dashboard/leads/view" className="sidebar-link">View</Link></li>
              <li><Link href="/dashboard/leads/followup" className="sidebar-link">Followup</Link></li>
            </ul>
          )}
         </div>
        </li>

        <li>
          <Link href="/create" className="sidebar-link">Create</Link>
        </li>
      </ul>
    </div>
  );
}
