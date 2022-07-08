import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { 
  DetailsLicenseInfoContainer,
  DetailsLicenseActivityContainer,
} from '../../containers'
import {
  LicenseInfo,
  LicenseActivity
} from '../../components';
// import { DetailsLicense } from '../../components';  
// include the sections the containers and the components

const License = () => { // details License page
  return (
    <main className="bg-hl-primary-dark">
      <section id="license-info-section">
        <DetailsLicenseInfoContainer>
          <Row className="d-flex justify-content-center align-items-center mt-5">
            <Col lg="10">
              <LicenseInfo /> 
            </Col>
          </Row>
        </DetailsLicenseInfoContainer>
      </section>
      <section>
        <DetailsLicenseActivityContainer>
          <Row className="d-flex justify-content-center align-items-center mt-5">
            <Col lg="10">
              <LicenseActivity />
            </Col>
          </Row>
        </DetailsLicenseActivityContainer>
      </section>
    </main>
  )
}
export default License; 