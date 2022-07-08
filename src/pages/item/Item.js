import React, { useState } from 'react';
import './item.css'
//import creator from '../../assets/seller2.png'
import item from '../../assets/item1.png';
import icon from '../../assets/HELI.png';
import clock from '../../assets/access_time.png';
import { Button, Col, Container, Form, Image, Modal, Row } from 'react-bootstrap';
import { Bids } from '../../components';
import { Link } from 'react-router-dom';

const Item = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return( 
    <div className='item-container-div'>
      <Row className='item section__padding'>
        <Row className="item-image">
          <Image className='image-item' src={item} alt="item" />
          <p className='description-company-p'>Created by Company name</p>
          <p className='description-company-p2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
          <hr className='description-company-hr'></hr>
          <p className='description-company-p3'>Contract Address<br></br>Token ID<br></br>Token Standard<br></br>Blockchain<br></br>Metadata</p>
          <p className='description-company-p4'>0x2953...4963<br></br>6645636453037072...<br></br>ERC-1155<br></br>Polygon<br></br>Centralized</p>
        </Row>
          <Row className="item-content">
            <Col className="item-content-title">
              <h1>Licence name</h1>
              <p>Owned by Username</p><h2>♥ 100</h2>
            </Col>
            <Container className='form-item'>
              <Row>
                <Row className='row0'><Image src={clock}/><h5>Sale ends March 22, 2022 at 11:50am -03</h5></Row>
                <Row className='row1'><h5>00</h5></Row>
                <Row className='row2'><h5>00</h5></Row>
                <Row className='row3'><h5>00</h5></Row>
              </Row>
              <Row>
                <Row className='row4'><p>Hours</p></Row>
                <Row className='row5'><p>Minutes</p></Row>
                <Row className='row6'><p>Seconds</p></Row>
              </Row>
              <Row>
                <Col><p className='current-price'>Current price</p></Col>
              </Row>
              <Row className='row-form'>
                
                  <Image className='form-image' src={icon}/>
                  <h5 className='price'>0,00</h5>
                  <p className='price-p'>( $00,00 )</p>
                
              </Row>
                <hr className='hr-form'></hr>
              <Row>
                <Col>
                  <Button className='buynow-button' variant="primary" onClick={handleShow}>
                    Buy
                  </Button>
                </Col>
                <Col>
                  <Button className='buycard-button' variant="primary" onClick={handleShow}>
                    Buy with card
                  </Button>
                </Col>
              </Row>
            </Container>
            
            <Col className="item-content-detail"></Col>

          </Row>

          <Row className='roadmap-container'>

          </Row>
          <Row className='container-bids-row'>
            <Bids />
          </Row>
      </Row>
            <Modal className='buy-modal' show={show} onHide={handleClose}>
                <Modal.Body className='wallet-modal'>
                    <Modal.Title className='modal-title'>Complete checkout.</Modal.Title>
                    <Row className='row-modal'>
                      <Col className='modal-item-text'>Item</Col>
                      <Col className='modal-subtotal-text'>Subtotal</Col>
                    </Row>
                    <hr className='hr1'></hr>
                    <Row className='row-modal'>
                        <Col> 
                        <Image className='image-modal' src={item} alt="item" />
                        <p className='collection-modal'>Collection</p>
                        <p className='licencename-modal'>Licence name</p>
                        </Col>
                        <Col>
                          <Row>
                            <Image className='icon-modal' src={icon}/>
                            <p className='icon-modal-text'>0,00</p>
                          </Row>
                          <Row>
                            <p className='icon-modal-subtext'>( $00,00)</p>
                          </Row>
                        </Col>
                    </Row>
                    <hr className='hr2'></hr>
                    <Row className='row-modal'>
                        <Col>
                        <p className='icon-total'>Total</p>
                        </Col>
                        <Col>
                          <Row>
                            <Image className='icon-modal2' src={icon}/>
                            <p className='icon-modal-text2'>0,00</p>
                          </Row>
                          <Row>
                            <p className='icon-modal-subtext2'>( $00,00)</p>
                          </Row>
                        </Col>
                    </Row>
                    <hr className='hr3'></hr>
                    <Row className='row-modal'>
                      <Col>
                        <Form>
                          <Form.Check className='modal-check' type="switch" id="custom-switch"/>
                        </Form>
                      </Col>
                      <Col>
                        <p className='modal-check-text'>
                          By checking this box, I agree to Heirloomdao Terms of Service.
                        </p>
                      </Col> 
                    </Row>
                    <Row>
                      <Col>
                        <Button className='checkout-button'>Confirm checkout</Button>
                      </Col>
                      <Col>
                        <Button className='funds-button'>Add founds</Button>
                      </Col>
                      
                    </Row>
                </Modal.Body>
            </Modal>
      </div>
  )
};

export default Item;
