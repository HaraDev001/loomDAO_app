import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap'; 
import documentIcon from '../../template/img/whitepaper/document.svg';

export function Whitepaper() {
    return (
      <>
      <Container as="header" className="mb-5">
          <Row>
              <Col>
                  <h2 className="text-left">Read the whitepaper</h2>
              </Col>
          </Row>
      </Container >
      <Container>
          <Row className="d-flex flex-column align-items-center justify-content-lg-center justify-content-center">
            <Col lg="2" md="4" col="6">
              <Card className="text-center rounded-xl bd-3 bd-2 shadow-lg d-flex">
                <Card.Body >
                  <img src={documentIcon} className="img-fluid mb-3 bg-primary text-primary rounded-lg" alt="..." width="90"/>
                  <h2 className="h6 mb-0">
                    <a className="stretched-link text-reset text-decoration-none" href="#" >Whitepaper (Eng)</a>
                  </h2>
                </Card.Body>
              </Card>
            </Col>          
          </Row>
      </Container>
  </>
    )
  }
  