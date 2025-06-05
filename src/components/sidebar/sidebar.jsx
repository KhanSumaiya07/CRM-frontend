'use client';
import { ChevronRight, House, Search, UserRoundPen, ChevronDown, FileUser, LogOut } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './style.css';

const Sidebar = () => {
  const [isClosed, setIsClosed] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => {
    setIsClosed(!isClosed);
  };

  return (
    <aside className={`sidebar ${isClosed ? 'close' : ''}`}>
      <div className='toggle' onClick={handleToggle}>
        <ChevronRight />
      </div>
      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
            <li className="nav-link">
              <Link href="/" className={`sidebar-link ${pathname === '/' ? 'active' : ''}`}>
                <House className='icon' />
                <span className="text nav-text">Dashboard</span>
              </Link>
            </li>

            <li className={`nav-link has-dropdown ${pathname.startsWith('/dashboard/leads') ? 'active' : ''}`}>
              <Link href="#" className="sidebar-link">
                <UserRoundPen className='icon' />
                <span className="text nav-text">Leads</span>
                <ChevronDown className='icon text' />
              </Link>
              <ul className="dropdown-list">
                <li className='nav-link'>
                  <Link href="/dashboard/leads/add" className={`dropdown-item sidebar-link ${pathname === '/dashboard/leads/add' ? 'active' : ''}`}>
                    <span className="text nav-text">Add</span>
                  </Link>
                </li>
                <li className='nav-link'>
                  <Link href="/dashboard/leads/view" className={`dropdown-item sidebar-link ${pathname === '/dashboard/leads/view' ? 'active' : ''}`}>
                    <span className="text nav-text">View</span>
                  </Link>
                </li>
                <li className='nav-link'>
                  <Link href="/dashboard/leads/followup" className={`dropdown-item sidebar-link ${pathname === '/dashboard/leads/followup' ? 'active' : ''}`}>
                    <span className="text nav-text">Manage Follow-ups</span>
                  </Link>
                </li>
              </ul>
            </li>

            <li className={`nav-link has-dropdown`}>
              <Link href="#" className="sidebar-link">
                <FileUser className='icon' />
                <span className="text nav-text">Application</span>
                <ChevronDown className='icon text' />
              </Link>
              <ul className="dropdown-list">
                <li>
                  <Link href="/dashboard/leads/add" className={`dropdown-item ${pathname === '/dashboard/leads/add' ? 'active' : ''}`}>
                    <span className="text nav-text">Add</span>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/leads/view" className={`dropdown-item ${pathname === '/dashboard/leads/view' ? 'active' : ''}`}>
                    <span className="text nav-text">View</span>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/leads/followup" className={`dropdown-item ${pathname === '/dashboard/leads/followup' ? 'active' : ''}`}>
                    <span className="text nav-text">Manage Follow-ups</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li>
            <Link href="#" className="sidebar-link">
              <LogOut className='icon' />
              <span className="text nav-text">Logout</span>
            </Link>
          </li>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
