import React from 'react';
import { Container } from 'react-bootstrap';
import { Create } from '../../../pages';

export function CreateContainer() {
  return (
    <Container as="section" className="about py-5">
      <Create />
    </Container >
  )
}