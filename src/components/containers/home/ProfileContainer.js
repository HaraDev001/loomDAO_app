import React from 'react';
import { Container } from 'react-bootstrap';
import { Profile } from '../../../pages';

export function ProfileContainer() {
  return (
    <Container as="section" className="about py-5">
      <Profile />
    </Container >
  )
}