import React from 'react';
import { Container } from 'react-bootstrap';
//import { Profile } from '../../../pages';
import { DashBoardUser } from '../../../pages';

const DashBoardUserContainer = () => {
  return (
    <Container as="section" className="">
      <DashBoardUser />
    </Container >
  )
}

export default DashBoardUserContainer;