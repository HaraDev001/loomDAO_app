import React from 'react';
import { Container } from 'react-bootstrap';
import { Login } from '../../../pages';

const LoginContainer = () => {
  return (
    <Container as="section" className="about py-5">
      <Login />
    </Container >
  )
}

export default LoginContainer;