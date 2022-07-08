import React from 'react';
import { Row } from 'react-bootstrap';
import OverlayContainer from '../general/OverlayContainer';

const SaleInfoContainer = ({children}) => {
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
          {children}
      </Row>
    </OverlayContainer>
  
  )
}

export default SaleInfoContainer;