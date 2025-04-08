import React from 'react'
import Card from 'react-bootstrap/Card';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
const FlightDetailCard = ({}) => {
  return (
    <div>
      <Card style={{ width: 'mx-2' }}>
      <Card.Body>
        <div className='d-flex justify-content-between align-item-center'>
        <Card.Title className='text-primary fs-5 mb-0'> <time >4:30</time> - <time >5:10</time></Card.Title>
        <span><HiOutlineDotsHorizontal /></span>
        </div> 
        <div className='d-flex align-items-center gap-2 justify-content-between mb-2'>
        <div className='d-flex align-items-center gap-3'>
            <img src="https://img.icons8.com/ios/452/airplane-tail-fin.png" alt="" width={50} className='rounded-circle'/>
            <div>
                <h6 className='mb-1'>Garuda INA</h6>
                <p className='mb-1 text-sucess'>AMS .SIN . CGC</p>
            </div>
        </div>
        <div className='text-end'>
             <h6 className='mb-1'>INR 1000</h6>
             <p className='mb-1 text-secondary fs-6'>Price</p>
            </div>
        </div>
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default FlightDetailCard
