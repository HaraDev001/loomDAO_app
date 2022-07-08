import React from 'react';
import './dashboarduser.css'
import profile_banner from '../../assets/profile_banner.png'
import profile_pic from '../../assets/profile.jpg'
//import Bids from '../../components/bids/Bids'
import { Col, Container, Image, Row } from 'react-bootstrap';
//import { BidsContainer } from '../../components/containers/home';
import { Bids } from '../../components';

const DashBoardUser = () => {
  return(
    <>
     
    <Row className='profile section__padding'>
    
    <Row className="profile-top">
    
      <Col className="profile-banner">
        <Image src={profile_banner} alt="banner" />
      </Col>
      <Col className="profile-picture">
          <Image src={profile_pic} alt="profile" />
          <h3>James Bond</h3>
      </Col>
    
    </Row>
      
    <Row>

    
      <Row className="profile-bottom-input">
        <input type="text" placeholder='Search Item here' />
        <select>
          <option>Single</option>
          <option>Popular</option>
          <option>Low to High</option>
          <option>High to Low</option>
        </select>
        <select>
          <option>Recently Listed</option>
          <option>Popular</option>
          <option>Low to High</option>
          <option>High to Low</option>
        </select>
      </Row>
      </Row>

      <Col className='BidsContainer'>
      <Bids   title="Item" />
      </Col>

    
    </Row>
    
    
  </>
  
    
  );
};

export default DashBoardUser;
