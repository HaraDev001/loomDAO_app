import React from 'react';
import { Container } from 'react-bootstrap';
import { TrendingCard } from '../../components';

const CardContainer = () => {
  return (
    <Container as="section" className="about py-3">
      <TrendingCard/>
    </Container >
  )
}

export default CardContainer;