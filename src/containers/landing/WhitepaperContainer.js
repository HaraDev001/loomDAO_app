import React from 'react';
import { Row, Col } from 'react-bootstrap'; 
import { Whitepaper } from '../../components/landing'; 
import OverlayContainer from '../general/OverlayContainer';

const WhitepaperContainer = () => {
  return (
    <OverlayContainer 
    className="py-5"
    >
    <Row className="d-flex justify-content-center align-items-center py-1">
        <Whitepaper />
    </Row>
  </OverlayContainer>

  )
}
export default WhitepaperContainer;