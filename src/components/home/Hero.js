import React from 'react';
import './Hero.css';
import {Col, Button} from 'react-bootstrap';
import illustration from '../../template/img/hero/illu-2.svg';

export function Hero() {
    return (
      <>
        <Col lg="5">
          <h1>Create, sell and collect software license NFTs.</h1>
          <p className="hl-text-muted">
          Acquire lifetime subscription opportunities in the form of non-fungible tokens. Raise capital for Saas products with a click of a button.  
          </p>
            <Button as="a" className="btn-gradient-primary">Join The Whitelist</Button>
        </Col>
        <Col className='hero-col ms-auto d-none d-lg-block' lg="6">
          <img className="img-fluid mx-auto" src={illustration} alt=".." />
        </Col>
      </>
    )
  }