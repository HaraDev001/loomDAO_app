import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import aboutImage from '../../template/img/about/About.svg';

export function About() {
    return (
      <>
          <header className="mb-5">
              <Row>
                  <Col>
                      <h2 className="text-left">Who we are</h2>
                  </Col>
              </Row>
          </header>
          <Container>
              <Row className="d-flex flex-row align-items-center">
                <Col lg="3" className="ms-auto d-none d-lg-block">
                    <Image className="img-fluid" src={aboutImage} alt=".."/>
                </Col>          
                <Col lg="9" >
                    <p className="text-muted text-sm mb-0"> HeirloomDAO is a platform that enables users and companies to mint and acquire lifetime subscription opportunities in the form of non-fungible tokens. Users only need to hold those tokens in their wallets in order to access software solutions such as editing programs, tracking software, and more.</p>
                    <br/>
                    <p className="text-muted text-sm mb-0"> We believe in giving more liberty to users. Traditional software licenses are nontransferable and fixed to a client personal account. With NFT licenses, users have full rights of ownership of the products they purchase, being able to sell them on a secondary market at any time </p>
                </Col>          
              </Row>
          </Container>
      </>
    )
  }