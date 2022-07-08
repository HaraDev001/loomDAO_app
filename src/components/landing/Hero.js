import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Col, Button} from 'react-bootstrap';
import illustration from '../../static/img/landing/hero.svg';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <Col lg="10" className="d-flex justify-content-center align-items-center">
      <Col lg="6">
        <h1>Create, sell and collect lifetime license NFTs.</h1>
        <p className="text-muted">Acquire lifetime subscription opportunities in the form of non-fungible tokens. Raise capital for Saas products with a click of a button.  
        </p>
        <Button
          size="lg"
          variant="outline-hl-cta" 
          className="border border-hl-light-mild text-hl-light"
          onClick={() => navigate('/explore/licenses', {replace: true})}
          >Explore</Button>
      </Col>
      <Col lg="6" className="d-none d-lg-block">
        <img className="img-fluid mx-auto" src={illustration} alt=".." />
      </Col>
    </Col>
  )
}
export default Hero;