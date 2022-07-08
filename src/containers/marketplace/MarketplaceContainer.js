import React from 'react';
import { Row } from 'react-bootstrap';
import OverlayContainer from '../general/OverlayContainer';
import { Marketplace } from '../../components';

const MarketplaceContainer = () => {
  return (
    <OverlayContainer 
    className="py-5"
    circles={[
      { 
        class: "circle-one",
        style: {
          width: "15rem",
          height: "15rem",
          transform: "translateY(5rem)"
        } 
      },
    ]}
    >
      <Row className="d-flex justify-content-center align-items-center mt-5">
        <Marketplace />
      </Row>
    </OverlayContainer>
  
  )
}

export default MarketplaceContainer;