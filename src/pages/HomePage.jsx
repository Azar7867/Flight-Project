import React from 'react'
import Sidebar from '../components/sidebar'
import Main from '../components/Main'
const HomePage = () => {
  return (
    <div>
        {/* { sidebar} */}
        <div className='d-flex gap-3'>
        <Sidebar/>
        <div className='main-container'>
          <Main/>
        </div>
        </div>
        {/* { main} */}
        {/* {filter} */}
      
    </div>
  )
}

export default HomePage
