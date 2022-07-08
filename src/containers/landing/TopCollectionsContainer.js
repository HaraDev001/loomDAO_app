import React from 'react';
import OverlayContainer  from '../general/OverlayContainer';
import { Row, Col } from 'react-bootstrap';
import { TopCollections } from '../../components';

const TopCollectionsContainer = () => {
  return (
      <OverlayContainer
        className="py-5"
        // bodyStyle=""
        circles={[
            { 
            style: {
              width: "17.5rem",
              height: "17.5rem",
              transform: "translate(75rem, 15rem)"
            } 
          },
        ]}
      >
      <Row className="d-flex justify-content-center mb-4">
        <Col lg="10"><h3>Top Collections in <span className="text-hl-cta">7 days</span></h3></Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center py-1">
        <TopCollections />
      </Row>
    </OverlayContainer>
  )
}

export default TopCollectionsContainer;
