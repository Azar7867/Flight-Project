import React from 'react'
import {Button,Card,CardFooter,Form} from 'react-bootstrap'
const FilterSection = () => {
  return (
    <div className='h-100'>
      <Card className='card-design my-3 ' style={{height:"600px"}}>
      <Card.Body>
        <div className='row'>
            <div className='d-flex justify-content-between align-items-center'>
                <h5>Filter</h5>
                <Button variant="primary" type="button" size='sm'>
                 Reset
                </Button>
            </div>
          
          <Form >
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Cabin Class</Form.Label>
        <Form.Control type="text" placeholder="Enter Price"  name='from' />
        <select className="form-select" aria-label="Default select example">
            <option >Select Cabin Class</option>
            <option value="First Class">First Class</option>
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
        </select>
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Enter Price"  name='to'/>
      </Form.Group>
      {/* <Form.Group className="mb-2" controlId="formBasicPassword1">
        <Form.Label>Cabin Class</Form.Label>
        <Form.Control type="date"  name='date' />
      </Form.Group> */}
      <Form.Group className="mb-2" controlId="formBasicEmail1">
        <Form.Label>AirLine</Form.Label>
        <Form.Control type="text" placeholder="Enter Price"  name='from1' />
        <select className="form-select" aria-label="Default select example11">
            <option >Select AirLine</option>
            <option value="Air India">Air India</option>
            <option value="Indico">Indico</option>
            <option value="Go Air">Go Air</option>
        </select>
      </Form.Group>
      
      {/* <Button variant="sucess" type="submit" className='w-100 btn-color my-4'>
        Apply Filter
      </Button> */}
    </Form>
          </div>
        
      </Card.Body>
      <CardFooter>
      <Button variant="sucess" type="submit" className='w-100 btn-color my-4'>
        Apply Filter
      </Button>
      </CardFooter>
    </Card>
    </div>
  )
}

export default FilterSection
