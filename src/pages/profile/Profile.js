import React from 'react';
import './profile.css'
import profile_pic from '../../assets/profile.jpg'
import { Button, Col, Container, Image, Form, Row } from 'react-bootstrap';


// generalize this page
// if user is heirloomer render user profile page and if user is licenseProvider
const Profile = () => {

  return (
    <>
    <Container className="profile-container">
    <Row className="gy-1 row-container">
    <Row className="justify-content-lg-center">
    <Col lg="6" className='register section__padding'>
      <Row className="gy-4" >
        <h1>Personal profile.</h1>
        <h5 >You can set preferred display name, create your branded profile URL and manage other personal settings</h5>
        
        <Row lg="auto" md="auto" className="gy-4">
        <Form className='register-writeForm' autoComplete='off' >
         
          <Col lg="5" md="5" xs="5" className="register-formGroup">
            <label>Username</label>
            <input type="text" placeholder='Enter a username'  />
          </Col>
          <Col md={{ span: 5, offset: 7 }} xs={{ span: 5, offset: 7 }} className="profile-pic">
            <Image className='foto' src={profile_pic} alt="profile" />
            
        </Col>
          <Col lg="5" md="5" xs="5" className="register-formGroup">
            <label>Email</label>
            <input type="email" placeholder='Enter your email' />
          </Col>
          
        </Form>
        </Row>
      </Row>
      
    </Col>
    </Row>
    <Row className="gy-1" lg="auto" md="auto">
           <Col lg="7" md="7" xs="7" className="register-button">
          <Button className='register-writeButton'>Update profile</Button>
           </Col>
          </Row>
          </Row>
          </Container>
    </>
   )
};

export default Profile;
