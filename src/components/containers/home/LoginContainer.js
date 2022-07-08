import React from 'react';
import { Container } from 'react-bootstrap';
import { Login } from '../../../pages';

export function LoginContainer() {
  return (
    <Container as="section" className="about py-5">
      <Login />
    </Container >
  )
}