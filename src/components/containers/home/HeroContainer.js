import React from 'react'; 
import { Hero } from '../../home/Hero';
import { Container, Row } from 'react-bootstrap';
import './HeroContainer.css';

export function HeroContainer() {
  return (
    
      <section id="hero-section" className="hero bg-dark py-5">
        <Container className="hero-container-container py-5 z-index-20 position-relative mt-5">
          <Row className="align-items-center mt-5">
            <Hero />
          </Row>
        </Container>
      </section>
  )
}
