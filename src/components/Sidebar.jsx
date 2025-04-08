import React from 'react'
const sidebar = () => {
  return (
    <div className='sidebar'>
        
        <div className='d-flex flex-column align-items-center justify-content-between h-100'>
        <div className='w-100'>
            <h5 className='py-3 text-center'>AZ Flight</h5>
            <nav className='sidebar-links w-100'>
              <ul>
                <li className='active'><a href="#">Home</a></li>
                <li><a href="#">Ticket</a></li>
                <li><a href="#">Schedule</a></li>
                <li><a href="#">History</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </nav>
        </div>
        <nav className='sidebar-links w-100'>
        <ul>
            <li><a href="#">Settings</a></li>
        </ul>
        </nav>
        
        </div>
      </div>
    
  )
}

export default sidebar

