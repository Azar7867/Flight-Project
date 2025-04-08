import React from 'react'
import FlightSearchCard from './FlightSearchCard'
import FlightDetailSlider from './FlightDetailSlider'
import axios from 'axios'
import { useState } from 'react'

const Main = () => {
  const [flights,setFlights]=useState([]);
  const [singleData,setSingleData]=useState([]);
  const [loading,setLoading]=useState(true);

  const getApiData=async(from,to,date)=>{
    const response=await axios.get(`https://www.freetestapi.com/api/v1/airlines?limit=5`);

    if(response.data.length>0){
      setFlights(response.data);
      setSingleData(response.data[0])
      setLoading(false);
    }else{
      setLoading(true);
    }
    
    
  }
  return (

    <div className='row'>
      <div className='col-md-8 col-lg-8 col-xl-8 col-sm-12'>
      <FlightSearchCard getData={getApiData}/>
      <div className='m-3'>
        {
          loading? <h1>Loading...</h1>: <>
          <div className='d-flex align-item-center justify-content-between gap-3'>
        <div>
          <p className='mb-1'>From</p>
          <h4 className='mb-1'>{singleData.country}</h4>
          <p className='mb-1'>{singleData.departure}</p>
        </div>
        <hr className='flex-fill' style={{ borderStyle: 'dashed' }} />
                <div className='text-end'>
                  <p className='mb-1'>To</p>
                  {/* Display destination names */}
                  {singleData.destinations && singleData.destinations.length > 0 ? (
                    <ul>
                      {singleData.destinations.map((destination, index) => (
                        <li key={index}>{destination.name}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>No destinations available.</p>
                  )}
                  <p className='mb-1'>{singleData.code}</p>
                </div>
              </div>
          
          </>

        }
      
        
        {/* {
          loading? <h1>Loading...</h1>: flights.map((flight)=>{
            return(
              <FlightDetailCard flight={flight}/>
            )
          })
        } */}
      </div>
      <FlightDetailSlider/>
    </div>
    </div>
  )
}

export default Main
