import React from 'react';
import { Subscription } from '../../components/landing';
import { Container } from 'react-bootstrap'; 

const SubscriptionContainer = () => {
  return (
    <Container fluid as="section" className="subscription py-5" id="subscription-section">
      <Subscription />
    </Container>
  )
}

export default SubscriptionContainer; 