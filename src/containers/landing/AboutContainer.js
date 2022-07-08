import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { About } from '../../components';
import { OverlayContainer } from '../../containers';

const AboutContainer = () => {
  return (
    <OverlayContainer 
      className="bg-hl-secondary bg-opacity-60 py-5"
      circles={[
        { 
          style: {
            width: "15rem",
            height: "15rem",
            transform: "translate(40rem, 0rem)"
          } 
        },
      ]}
    >
      <Row className="d-flex justify-content-center mb-4">
        <Col lg="10"><h3>Who we are</h3></Col>
      </Row>
      <Row className="d-flex flex-row justify-content-center align-items-center">
        <About />
      </Row> 
    </OverlayContainer >
  )
}

export default AboutContainer; 
