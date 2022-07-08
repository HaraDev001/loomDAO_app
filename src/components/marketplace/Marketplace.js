import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { default as PageDropdown } from './dropdown/PageDropdown'; 
import { default as FilterDropdown } from './dropdown/FilterDropdown';
import { default as RecentlyAddedDropdown } from './dropdown/RecentlyAddedDropdown'; 


const Marketplace = () => {
  const location = useLocation();
  const navigate = useNavigate(); 
  const page = location.pathname.split("/")[2];
  const categoryOptions = ["Accounting", "HR", "Project Management", "Web Conference", "EHR", "E-Commerce", "Billing"];
  const collectionOptions = ["Dropbox", "Jira", "etc"]; // possible collection search results

  useEffect(()=> {
    if (location.pathname === '/explore') navigate('/explore/licenses', {replace: true});
  }, [location, navigate]);

  return (
    <Col lg="10">
      <Row>
        <Col className="header">
          <h2>
            Explore {<PageDropdown page={page} />} NFTs.
          </h2>
        </Col> 
      </Row>
      <Row className="mt-4">
        <Col lg="9" className="filters d-flex justify-content-start align-items-end">
          <FilterDropdown title="Category" options={categoryOptions} />
          <FilterDropdown title="Collections" options={collectionOptions} />
        </Col> 
        <Col lg="3" className="recently-added d-flex justify-content-end align-items-end">
          <RecentlyAddedDropdown />
        </Col> 
      </Row>
      <Row className="d-flex justify-content-start align-items-center mt-5">
        <Outlet />
      </Row>
    </Col>
  )
}

export default Marketplace;