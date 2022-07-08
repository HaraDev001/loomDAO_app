import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import profile_banner from '../../assets/profile_banner.png';
import profile_pic from '../../assets/profile.jpg';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <Container fluid className='py-5 px-5 ml-5 bg-hl-primary'>  
      
      <Row fluid className="mt-5 w-100">
        <Row className="w-auto">
          <Image className='w-100' src={profile_banner} alt="banner" />
        </Row>
      </Row>
      <Row className="mt-5 w-100">
        <Row className="w-25">
            <Image className='border rounded-circle w-auto h-auto' src={profile_pic} alt="profile" />
            <h3 className='mt-5'>James Bond</h3>
        </Row>
      </Row>

      <Row className="d-flex justify-content-evenly px-5 my-5">
        <Col><h1 className=''>00.0k</h1><h5 className=''>Licenses</h5></Col>
        <Col><h1 className=''>00.0k</h1><h5 className=''>Owners</h5></Col>
        <Col><h1 className=''>0,000</h1><h5 className=''>Floor price</h5></Col>
        <Col><h1 className=''>00.0k</h1><h5 className=''>Volume trade</h5></Col>
      </Row>
      
      <Row className='d-flex justify-content-evenly py-5 px-5 ml-5'>
        
        <Row className="d-flex justify-content-between px-5 ml-5">
          <input className='w-50 border rounded' type="text" placeholder='Search Item here' />
          <select className='w-auto mx-5 border rounded'>
            <option>Single</option>
            <option>Popular</option>
            <option>Low to High</option>
            <option>High to Low</option>
          </select>
          <select className='w-auto mx-5 border rounded'>
            <option>Recently Listed</option>
            <option>Popular</option>
            <option>Low to High</option>
            <option>High to Low</option>
          </select>
        </Row>
      </Row>

      <Row className="d-flex justify-content-evenly py-5 px-5">  
        <Row className="px-n5">
          <Col className=''>
            <Link to="/dashboard"> 
              <Button type='button' className='primary-btn'>Owned</Button>
            </Link>
          </Col>
          <Col>
            <Link to="/dashboard/listed"> 
              <Button type='button' className='primary-btn'>Listed</Button>
            </Link>
          </Col>
          <Col>
            <Link to="/dashboard/sales"> 
              <Button type='button' className='primary-btn'>Sales</Button>
            </Link>
          </Col>
          <section>
            <Outlet/>
          </section>
        </Row>
      </Row>
    </Container>
  )
}

export default DashboardPage;