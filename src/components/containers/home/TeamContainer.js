import React from 'react';
import { Team } from '../../home/team/Team';
import { Container } from 'react-bootstrap';

export function TeamContainer() {
  return (
      <Container as="section" id="team-section" className="team bg-dark py-5" fluid>
        <Team />
      </Container >
  )
}
