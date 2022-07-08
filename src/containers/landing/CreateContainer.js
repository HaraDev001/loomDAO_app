import React from 'react';
import { Container } from 'react-bootstrap';
import { Create } from '../../../pages';

const CreateContainer = () => {
  return (
    <Container as="section" className="about py-5">
      <Create />
    </Container >
  )
}

export default CreateContainer;