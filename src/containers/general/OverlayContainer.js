import React from 'react';
import { Container } from 'react-bootstrap';

const OverlayContainer = ({ 
  children, 
  circles, 
  id, 
  className,
  bodyStyle, 
  disabled }) => {
  return <Container fluid id={id} className={`hl-overlay-container${className ? ' ' + className : '' }`}>
        {circles && circles.map((circle, i) => (<div key={i} className={`circle${ circle.class ? " " + circle.class : ''}`}  style={circle.style} ></div>) ) }
        { !disabled ? <Container className="hl-overlay" fluid></Container> : null }
        <Container className={`hl-overlay-body${bodyStyle ? ' ' + bodyStyle : '' }`} >{ children }</Container>
    </Container>
}
export default OverlayContainer;
