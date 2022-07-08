import React from 'react';
import { Container } from 'react-bootstrap';
import { Profile } from '../../../pages';

const ProfileContainer = () => {
  return (
    <Container as="section" className="about py-5">
      <Profile />
    </Container >
  )
}

export default ProfileContainer;