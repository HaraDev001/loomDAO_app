import React from 'react';
import './footer.css';
import { 
  Button, 
  Col, 
  Image, 
  Row, 
  Form, 
  InputGroup,
  ListGroup
} from 'react-bootstrap';
import { 
  DiscordSquare,
  InstagramSquare,
  TwitterSquare,
  YoutubeSquare,
  Medium,
  TelegramSquare 
} from '../../static/img/icons/socials';
import logo from '../../static/img/logo/logo.png'
import { useForm } from 'react-hook-form';
const axios = require('axios').default;

const Footer = () => {
  const {
    register, 
    handleSubmit,
    formState: { isDirty, isSubmitting, isSubmitSuccessful }
  } = useForm();
  const validEmailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  const onSubmit = ({name, email}) => {
    axios({
      method: 'post',
      url: `${process.env.REACT_APP_SERVER}/newUser`,
      data: {
        name: name,
        email: email
      }
    }).then(r => console.log("success"));
  };

  return (
    <Col>
      <Row className="d-flex align-items-end justify-content-between border-bottom border-hl-light-mild pb-5 px-0">
        <Col lg="5">
          <Row>
            <Col>
              <h3 className="mb-4">Get the latest updates</h3>
            </Col>
          </Row>
          <Row className="d-flex">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                  <Col lg="9">
                      <InputGroup className="align-items-center">
                        <Form.Control className="text-hl-light rounded-pill bg-hl-primary bg-opacity-75 border border-1 border-hl-light-mild" type="email" autoComplete="off" placeholder="Enter your email" {...register("email", {required: true, pattern: validEmailRegex})} />
                      </InputGroup>
                  </Col>
                  <Col lg="3">
                    <Button type="submit" variant="hl-cta">Sign up</Button> 
                  </Col>
              </Row>
            </Form>
          </Row>
        </Col>
        <Col lg="5">
          <Row>
            <Col>
              <h3 className="mb-4">Join the community</h3>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-between">
                <div className="me-2">
                  <TwitterSquare />
                </div>
                <div className="me-2">
                  <InstagramSquare />
                </div>
                <div className="me-2">
                  <TelegramSquare />
                </div>
                <div className="me-2">
                  <DiscordSquare />
                </div>
                <div className="me-2">
                  <YoutubeSquare />
                </div>
                <div className="me-2">
                  <Medium />
                </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="border-bottom border-hl-light-mild pb-5">
        <Col>
          <Row>
            <Col>
              <Image  width="180" className="mt-5 mb-3" src={logo} alt="heirloom logo" />
            </Col>
          </Row>
          <Row className="d-flex align-items-end justify-content-between">
            <Col lg="5">
              <p className="text-muted">
                We believe in giving more liberty to users. Traditional software licenses are nontransferable and fixed to a client personal account. With NFT licenses, users have full rights of ownership of the products they purchase, being able to sell them on a secondary market at any time
              </p>
            </Col>
            <Col lg="5" className="d-flex justify-content-between">
              <ListGroup as="ul" className="bg-hl-secondary bg-opacity-0">
                <ListGroup.Item as="h5">
                  Marketplace
                </ListGroup.Item>
                <ListGroup.Item as="li" className="h8 bg-hl-secondary bg-opacity-0">Explore NFT Licenses</ListGroup.Item>
                <ListGroup.Item as="li" className="h8">License Sales</ListGroup.Item>
              </ListGroup>
              <ListGroup as="ul">
                <ListGroup.Item as="h5">My account</ListGroup.Item>
                <ListGroup.Item as="li" className="h8">Profile</ListGroup.Item>
                <ListGroup.Item as="li" className="h8">Favorites</ListGroup.Item>
                <ListGroup.Item as="li" className="h8">My Licenses</ListGroup.Item>
                <ListGroup.Item as="li" className="h8">Settings</ListGroup.Item>
              </ListGroup>
              <ListGroup as="ul">
                <ListGroup.Item as="h5">Company</ListGroup.Item>
                <ListGroup.Item as="li" className="h8">Team</ListGroup.Item>
                <ListGroup.Item as="li" className="h8">Roadmap</ListGroup.Item>
                <ListGroup.Item as="li" className="h8">Whitepaper</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="d-flex justify-content-start">
          <p className="h8 text-muted">HEIRLOOMDAO. All rights reserved.</p>
        </Col>
        <Col className="d-flex justify-content-end">
          <p className="h7 pe-2">Terms</p>
          <p className="h7 ">Privacy Policy</p>
        </Col>
      </Row>
    </Col>
  )
}

export default Footer
