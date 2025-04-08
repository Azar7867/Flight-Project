import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Lottie from "lottie-react";
import flightAnimation from './../assets/Animation .json'


const FlightSearchCard = ({getData}) => {
const [UserData,setUserData]=useState({
  from:'',
  to:'',
  date:''
})

const handleChange=(e)=>{

  const{name,value}=e.target;

  setUserData({
    ...UserData,
    [name]:value
  })
}

const handleSubmit=(e)=>{
  e.preventDefault();
  getData(UserData.from,UserData.to,UserData.date)
}

  return (
    <div>
      <Card className='card-design my-3'>
      <Card.Body>
        <div className='row'>
          <div className='col-md-6 col-lg-6 col-xl-6 col-sm12'>
          <Card.Subtitle className="mb-2 ">Where Would You Want To Go</Card.Subtitle>
          {/* <img src="https://5.imimg.com/data5/SELLER/Default/2022/11/XG/XM/IU/148932685/flights-bookings.jpg" className='flight-image'/> */}
          <Lottie animationData={flightAnimation}/>
          </div>

          <div className='col-md-6 col-lg-6 col-xl-6 col-sm12'>
          <Form onSubmit={(e)=>handleSubmit(e)}>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>From</Form.Label>
        <Form.Control type="text" placeholder="Madurai" onChange={handleChange} value={UserData.from} name='from' />
        
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label>To</Form.Label>
        <Form.Control type="text" placeholder="Chennai" onChange={handleChange} value={UserData.to} name='to'/>
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicPassword1">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" onChange={handleChange} value={UserData.date} name='date' />
      </Form.Group>
      
      <Button variant="primary" type="submit" className='w-100 btn-color my-4'>
        Search
      </Button>
    </Form>
          </div>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default FlightSearchCard
