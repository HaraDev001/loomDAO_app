import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { default as LicenseOrSaleCard } from './LicenseOrSaleCard';
import { default as LicenseDetails } from './LicenseDetails';

const LicenseInfo = () => {
  return (
      <Row className="g-4">
          <Col lg="5">
            <LicenseOrSaleCard />
          </Col>
          <Col lg="7" className="details d-flex flex-column align-items-between">
              <LicenseDetails /> 
          </Col>
      </Row>
  )
}
export default LicenseInfo;