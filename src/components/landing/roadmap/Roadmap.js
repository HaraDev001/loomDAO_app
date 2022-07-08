import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SVGRoadmap from './SVGRoadmap';

const Roadmap = () => {
    return (
        <Col lg="10" className="d-flex justify-content-center">
            <SVGRoadmap className="img-fluid" width="100%" />
        </Col>
    )
  }
  
export default Roadmap;