import React from 'react';
import { Container } from 'react-bootstrap';
//import { Profile } from '../../../pages';
import { DashBoardUser } from '../../../pages';

export function DashBoardUserContainer() {
  return (
    <Container as="section" className="">
      <DashBoardUser />
    </Container >
  )
}