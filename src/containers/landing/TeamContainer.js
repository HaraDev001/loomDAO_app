import React from 'react';
import { Team } from '../../components/landing';
import { Row, Col } from 'react-bootstrap';
import OverlayContainer from '../general/OverlayContainer';

const TeamContainer = () => {
  return (
    <OverlayContainer 
        className="py-5"
        circles={[
            { 
            style: {
              width: "17.5rem",
              height: "17.5rem",
              transform: "translate(0rem, 15rem)"
            } 
          },
        ]}
      >
      <Row className="d-flex justify-content-center mb-4">
        <Col lg="10"><h3>Team</h3></Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center py-1">
        <Team />
      </Row>
    </OverlayContainer>
  )
}

export default TeamContainer; 