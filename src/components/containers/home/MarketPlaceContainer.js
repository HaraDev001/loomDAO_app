import React from 'react';
import { Container } from 'react-bootstrap';
import { MarketPlace } from '../../../pages';
//import { Bids } from '../../bids/Bids';

export function MarketPlaceContainer() {
  return (
    <Container as="section" className="about py-5">
        <MarketPlace />
    </Container >
  )
}