import React from 'react'
import { Link } from "react-router-dom";
import './Sidebar.css'
const sidebar = () => {
  return (
    <div className='sidebar'>
        
        <div className='d-flex flex-column align-items-center justify-content-between h-100'>
        <div className='w-100'>
            <h5 className='py-3 text-center'>AZ Flight</h5>
            <nav className='sidebar-links w-100'>
              <ul>
                <li className='active'><a href="#">Home</a></li>
                <li><Link to="/ticket" className="sidebar-link">Ticket</Link></li>
              <li><Link to="/schedule" className="sidebar-link">Schedule</Link></li>
              <li><Link to="/about" className="sidebar-link">About</Link></li>
              </ul>
            </nav>
        </div>
        <nav className='sidebar-links w-100'>
        <ul>
        <li><Link to="/Setting" className="sidebar-link">Setting</Link></li>
        </ul>
        </nav>
        
        </div>
      </div>
    
  )
}

export default sidebar

