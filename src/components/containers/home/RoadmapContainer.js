import React from 'react';
import { Container } from 'react-bootstrap';
import { Roadmap } from '../../home/roadmap/Roadmap';

export function RoadmapContainer() {
  return (
    <Container as="section" className="roadmap py-5" id="roadmap-section">
      <Roadmap />
    </Container >
  )
}
