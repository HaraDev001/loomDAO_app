import React from 'react';
import { Container } from 'react-bootstrap';
import { About } from '../../home/About';

export function AboutContainer() {
  return (
    <Container as="section" className="about py-5">
      <About />
    </Container >
  )
}
