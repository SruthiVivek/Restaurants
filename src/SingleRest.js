import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import OperatingTime from './OperatingTime';
import Review from './Review';



function SingleView() {
  const [allRest,setRest]=useState([])

  const params=useParams()
  const getRest=async(uid)=>{
  const result= await fetch(`/restaurants.json`)
  result.json().then(data=>{
     setRest(data.restaurants);
  })
  } 
  // console.log(allUser);

  useEffect(()=>{
    getRest(params.id)
        //  console.log(params.id);
  },[])
  const singleRest=allRest.find(i=>i.id==params.id)

  console.log(singleRest);

  return (
    <div className=''>
      {
        singleRest?
        <div>
           <Row className='w-100'>
        <Col lg={6} md={12} sm={12} xl={6}>
           <img className='w-75 p-5' style={{height:'800px'}}
           src={singleRest.photograph} alt="" rounded />
        </Col>
        <Col lg={6} md={12} sm={12} xl={6} className='' >
            <h1>{singleRest.name}</h1>
            <ListGroup className='fs-4 mt-5' >
        <ListGroup.Item id='d' className='p-4 mt-2'>Neighborhood:stong <strong className='text-warning'>{singleRest.neighborhood}</strong></ListGroup.Item>
        <ListGroup.Item id='d' className='p-4 mt-2'>Address:<strong className='text-warning'>{singleRest.address}</strong></ListGroup.Item>
        <ListGroup.Item id='d' className='p-4 mt-2'>Cuisine_type:<strong className='text-warning'>{singleRest.cuisine_type}</strong></ListGroup.Item>
       
        <ListGroup.Item id='d' className='p-4 mt-2'>
          <strong > <OperatingTime timeData={singleRest.operating_hours}></OperatingTime></strong> 
        </ListGroup.Item>

        <ListGroup.Item id='d' className='p-4 mt-2'>
                 <Review reviews={singleRest.reviews}></Review>
        </ListGroup.Item>


      </ListGroup>

        </Col>

      </Row>
        </div>
        : <h1>No deatails found</h1>
      }
        
    </div>
  )
}

export default SingleView