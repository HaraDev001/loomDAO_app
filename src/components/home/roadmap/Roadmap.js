import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { SvgRoadmap } from './RoadMapSVG'

export function Roadmap() {
    return (
          <>
              <header className="mb-5">
                  <Row>
                      <Col>
                          <h2 className="text-start">Roadmap</h2>
                      </Col>
                  </Row>
              </header>
              <Container>
                  <Row className="align-items-center justify-content-center">
                      <Col lg="9" className="d-flex align-items-center justify-content-center">
                          <SvgRoadmap width="100%"/>
                          {/* <img className="img-fluid" src={roadmap} alt=".." width="100%"/> */}
                      </Col>  
                  </Row>
              </Container>
          </>
    )
  }
  