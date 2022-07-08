import React from 'react';
import { Subscription } from '../../home/Subscription';
import { Container } from 'react-bootstrap'; 

export function SubscriptionContainer() {
  return (
      <Container fluid as="section" className="subscription py-5" id="subscription-section">
          <Subscription />
      </Container>
  )
}
