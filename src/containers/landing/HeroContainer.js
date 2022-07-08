import React from 'react'; 
import { Hero } from '../../components/landing';
import OverlayContainer from '../general/OverlayContainer';
import { Row } from 'react-bootstrap';

const HeroContainer = () => {
  return (
      <OverlayContainer 
        id="hero-section"
        className="py-5"
        bodyStyle="d-flex justify-content-center align-items-center"
        circles={[
          { 
            style: {
              width: "15rem",
              height: "15rem",
              transform: "translate(7.5rem, 10rem)"
            } 
          },
        ]}
      >
      <Row className="d-flex justify-content-center align-items-center mt-5">
        <Hero />
      </Row>
    </OverlayContainer>
  )
}
export default HeroContainer;
