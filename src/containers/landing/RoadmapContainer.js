import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Roadmap } from '../../components/landing';
import { OverlayContainer } from '../../containers';

const RoadmapContainer = () => {
  return (
    <OverlayContainer 
    className="bg-hl-secondary bg-opacity-60 py-5"
    circles={[
      { 
        style: {
          width: "15rem",
          height: "15rem",
          transform: "translate(67rem, 13rem)"
        } 
      },
    ]}
    >
      <Row className="d-flex justify-content-center mb-4">
        <Col lg="10"><h3>Roadmap</h3></Col>
      </Row>
      <Row className="d-flex flex-row justify-content-center align-items-center">
        <Roadmap />
      </Row> 
  </OverlayContainer >
  )
}

export default RoadmapContainer; 
