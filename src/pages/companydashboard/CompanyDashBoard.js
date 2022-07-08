import React from 'react';
import './companydashboard.css'
import profile_banner from '../../assets/profile_banner.png'
import profile_pic from '../../assets/profile.jpg'
//import Bids from '../../components/bids/Bids'
import { Col, Image, Row } from 'react-bootstrap';
//import { BidsContainer } from '../../components/containers/home';
import { Bids } from '../../components';

const CompanyDashBoard = () => {

  return (
    
      <Container className='profile section__padding'>
      
      <Row className="profile-top">
      
        <Col className="profile-banner">
          <Image src={profile_banner} alt="banner" />
        </Col>
        <Col className="profile-picture">
            <Image src={profile_pic} alt="profile" />
            <h3>James Bond</h3>
        </Col>
      
      </Row>
      <Row className="justify-content-lg-center">
        <Col className="profile-licenses-sale">
            <h1 className='licences-button'>00.0k</h1>
            <h1 className='licences-button'>00.0k</h1>
            <h1 className='licences-button'>0,000</h1>
            <h1 className='licences-button'>00.0k</h1>
        </Col>
        </Row>
        <Row className="justify-content-lg-center">
        <Col className="profile-licenses-sale">
          <h5 className='licences-names'>Licenses</h5>
            <h5 className='licences-names'>Owners</h5>
            <h5 className='licences-names'>Floor price</h5>
            <h5 className='licences-names'>Volume trade</h5>
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

        <Row>
        <Bids title="Item" />
        </Row>

      
      </Container>
      
      
    
    
  );
};

export default CompanyDashBoard;
