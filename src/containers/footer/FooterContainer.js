import React from 'react';
import Footer from '../../components/footer/Footer' 
import { Container, Row } from 'react-bootstrap'; 

export const FooterContainer = () => {
  return (
    <footer id="footer" className='bg-hl-secondary py-5'>
      <Container >
        <Row>
          <Footer />
        </Row>
      </Container>
    </footer>
  )
}
export default FooterContainer; 
