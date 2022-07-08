import React from 'react';
import { Container } from 'react-bootstrap';
import { Item } from '../../../pages';

const ItemContainer = () => {
  return (
    <Container as="section" className="about py-5">
      <Item />
    </Container >
  )
}

export default ItemContainer; 