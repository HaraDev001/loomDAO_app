import React from 'react';
import { Container } from 'react-bootstrap';
//import { Profile } from '../../../pages';
//import { DashBoardUser } from '../../../pages';
import CompanyDashBoard from '../../../pages/companydashboard/CompanyDashBoard';

const CompanyDashBoardContainer = () => {
  return (
    <Container as="section" className="">
      <CompanyDashBoard />
    </Container >
  )
}

export default CompanyDashBoardContainer;