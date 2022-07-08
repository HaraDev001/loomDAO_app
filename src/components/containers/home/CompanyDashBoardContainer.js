import React from 'react';
import { Container } from 'react-bootstrap';
//import { Profile } from '../../../pages';
//import { DashBoardUser } from '../../../pages';
import CompanyDashBoard from '../../../pages/companydashboard/CompanyDashBoard';

export function CompanyDashBoardContainer() {
  return (
    <Container as="section" className="">
      <CompanyDashBoard />
    </Container >
  )
}