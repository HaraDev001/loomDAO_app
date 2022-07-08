import React from 'react';
import { Container } from 'react-bootstrap';
import Card from '../../../pages/card/Card';

export function CardContainer() {
  return (
    <Container as="section" className="about py-3">
      <Card/>
    </Container >
  )
}