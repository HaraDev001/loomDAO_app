import React from 'react';
import './companyprofile.css'
//import {Link} from 'react-router-dom'
import profile_pic from '../../assets/profile.jpg'
import { Button, Col, Container, Image, Form, Row } from 'react-bootstrap';

const CompanyProfile = () => {

    return (
        <>
        <Container className="profile-container">
        <Row className="gy-1 row-container">
        <Row className="justify-content-lg-center">
        <Col lg="6" className='register section__padding'>
          <Row className="gy-4" >
            <h1>Company profile.</h1>
            <h5 >You can set preferred display name, create your branded profile URL and manage other personal settings</h5>
            
            <Row lg="auto" md="auto" className="gy-4">
            <Form className='register-writeForm' autoComplete='off' >
             
              <Col lg="5" md="5" xs="5" className="register-formGroup">
                <label>Company name</label>
                <input type="companyusername" placeholder='Enter your company name'  />
              </Col>
              <Col md={{ span: 5, offset: 7 }} xs={{ span: 5, offset: 7 }} className="profile-pic">
                <Image className='foto' src={profile_pic} alt="profile" />
                
            </Col>
              <Col lg="5" md="5" xs="5" className="register-formGroup">
                <label>Username</label>
                <input type="username" placeholder='Enter a username' />
              </Col>
              <Col lg="5" md="5" xs="5" className="register-formGroup">
                <label>Name</label>
                <input type="name" placeholder='Enter your name' />
              </Col>
              <Col lg="5" md="5" xs="5" className="register-formGroup">
                <label>Email</label>
                <input type="email" placeholder='Enter your corporate email' />
              </Col>
              <Col lg="5" md="5" xs="5" className="register-formGroup">
                <label>Phone</label>
                <input type="phone" placeholder='Phone number' />
              </Col>
              <Col lg="5" md="5" xs="5" className="register-formGroup">
                <label>Password</label>
                <input type="password" placeholder='Must contain at least 8 characters' />
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
export default CompanyProfile;