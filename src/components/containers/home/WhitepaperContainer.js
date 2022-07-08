import React from 'react';
import { Container } from 'react-bootstrap'; 
import { Whitepaper } from '../../home/Whitepaper'; 

export function WhitepaperContainer() {
  return (
    <Container as="section" className="whitepaper bg-dark py-5" id="whitepaper-section" fluid>
        <Whitepaper />
    </Container>
  )
}
