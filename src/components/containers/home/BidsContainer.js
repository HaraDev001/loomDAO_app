import React from 'react';
import { Container } from 'react-bootstrap';
import { Bids } from '../../bids/Bids';

export function BidsContainer() {
  return (
    <Container as="section" className="about py-5">
      <Bids />
    </Container >
  )
}