import React from 'react';
import { Container } from 'react-bootstrap';
import { CompanyProfile } from '../../../pages';

const CompanyProfileContainer = () => {
  return (
    <Container as="section" className="about py-5">
      <CompanyProfile />
    </Container >
  )
}

export default CompanyProfileContainer;