
'use client';
import { useState, useEffect } from 'react';
import {
  AlignJustify,
  X,
  House,
  MessageSquare,
  BookOpenCheck,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import './style.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [leadsOpen, setLeadsOpen] = useState(false);
  const pathname = usePathname();

  // Close submenu when sidebar collapses
  useEffect(() => {
    if (collapsed) {
      setLeadsOpen(false);
    }
  }, [collapsed]);

  // Check if any lead sub-route is active
  const isLeadsActive = () => {
    return pathname.startsWith('/leads');
  };

  return (
    <div className={`sidebar-wrapper ${collapsed ? 'collapsed' : ''}`}>
      <div className='sidebar-header' onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? <AlignJustify size={20} /> : <X size={20} />}
      </div>
      <ul className="sidebar-menu">
        <li className={`sidebar-menu-item ${pathname === '/' ? 'active' : ''}`}>
          <Link href="/" className="sidebar-link">
            <div className='sidebar-menu-icon'>
              <House size={20} />
            </div>
            <span className={`sidebar-item ${collapsed ? 'collapsed' : ''}`}>Dashboard</span>
          </Link>
        </li>
        
        <li className={`sidebar-menu-item ${isLeadsActive() ? 'active-parent' : ''} flex-column`}>
          <div 
            className="sidebar-link"
            onClick={() => !collapsed && setLeadsOpen(!leadsOpen)}
            style={{ cursor: 'pointer' }}
          >
            <div className='sidebar-menu-icon'>
              <MessageSquare size={20} />
            </div>
            <span className={`sidebar-item ${collapsed ? 'collapsed' : ''}`}>
              Lead Management
              
            </span>
            {!collapsed && (leadsOpen ? <ChevronUp size={16} className="ml-auto" /> : <ChevronDown size={16} className="ml-auto" />)}
          </div>
          
          {!collapsed && leadsOpen && (
           <ul className="sidebar-submenu">
  <li className={`${pathname === '/dashboard/leads/add' ? 'active' : ''}`}>
    <Link href="/dashboard/leads/add" className="sidebar-link">
      Add Lead
    </Link>
  </li>
  <li className={`${pathname === '/dashboard/leads/view' ? 'active' : ''}`}>
    <Link href="/dashboard/leads/view" className="sidebar-link">
      View Leads
    </Link>
  </li>
  <li className={`${pathname === '/dashboard/leads/followup' ? 'active' : ''}`}>
    <Link href="/dashboard/leads/followup" className="sidebar-link">
      Followup Leads
    </Link>
  </li>
</ul>

          )}
        </li>
        
        <li className={`sidebar-menu-item ${pathname === '/ielts' ? 'active' : ''}`}>
          <Link href="/ielts" className="sidebar-link">
            <div className='sidebar-menu-icon'>
              <BookOpenCheck size={20} />
            </div>
            <span className={`sidebar-item ${collapsed ? 'collapsed' : ''}`}>IELTS</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}