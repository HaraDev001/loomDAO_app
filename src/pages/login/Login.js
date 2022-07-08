import React, { useState } from 'react';
import './login.css'
import {Link} from 'react-router-dom'
import { Button, Col, Container, Image, Modal, Row } from 'react-bootstrap';
import MetaMaskLogo from '../../assets/MetaMask_Fox.svg.png';
import PortisLogo from '../../assets/portis-logo.svg';
import WalletConnectLogo from '../../assets/WalletConnect-icon.svg';
import FortmaticLogo from '../../assets/Fortmatic-icon.svg';
import CoinbaseLogo from '../../assets/Coinbase-icon-symbol-1.svg';
import AuthereumLogo from '../../assets/authereum_shield.svg';


const Login = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
<Container className="justify-content-lg-center">
    <Row className='login section__padding'>
      
      <Col className="login-container">
        <Row className="justify-content-lg-center">
        <Col lg="10">
        <h1>Connect your wallet.</h1>
        <h5 className='text' >Connect with one of our available wallet providers or create a new one.</h5>
        <form className='login-writeForm' autoComplete='off'>
          <div className="login-formGroup">
            <Button className="button"><Image className='image-button' src={MetaMaskLogo}></Image>MetaMask</Button>
          </div>
          <div className="login-formGroup">
            <Button className="button"><Image className='image-button' src={WalletConnectLogo}></Image>WalletConnect</Button>
          </div>
          <div className="login-formGroup">
            <Button className="button"><Image className='image-button' src={PortisLogo}></Image>Portis</Button>
          </div>
          <Col>
          <Button variant="primary" onClick={handleShow}>
        Show more options
      </Button>

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header className='wallet-modal' closeButton>
          <Modal.Title>Select your wallet.</Modal.Title>
        </Modal.Header>
        <Modal.Body className='wallet-modal'>
        
        <Row>
        <Col className="login-formGroup-modal">
            
            <Button className="modal-button"><Image className='modal-image-button' src={MetaMaskLogo}></Image></Button>
            <h3 className='h3-text'>MetaMask</h3>
            <h5 className='h5-text'>Connect your MetaMask wallet</h5>
          </Col>
          <Col className="login-formGroup-modal">
            <Button className="modal-button"><Image className='modal-image-button' src={WalletConnectLogo}></Image></Button>
            <h3 className='h3-text'>WalletConect</h3>
            <h5 className='h5-text'>Scan with WalletConnect to connect</h5>
          </Col>
          <Col className="login-formGroup-modal">
            <Button className="modal-button"><Image className='modal-image-button' src={PortisLogo}></Image></Button>
            <h3 className='h3-text'>Portis</h3>
            <h5 className='h5-text'>Connect to Portis App</h5>
          </Col>
          </Row>
          <Row>
          <Col className="login-formGroup-modal">
            <Button className="modal-button"><Image className='modal-image-button' src={FortmaticLogo}></Image></Button>
            <h3 className='h3-text'>Fortmatic</h3>
            <h5 className='h5-text'>Connect with your Fortmatci account</h5>
          </Col>
          <Col className="login-formGroup-modal">
            <Button className="modal-button"><Image className='modal-image-button' src={AuthereumLogo}></Image></Button>
            <h3 className='h3-text'>Authereum</h3>
            <h5 className='h5-text'>Connect with your Authereum account</h5>
          </Col>
          <Col className="login-formGroup-modal">
            <Button className="modal-button"><Image className='modal-image-button' src={CoinbaseLogo}></Image></Button>
            <h3 className='h3-text'>Coinbase</h3>
            <h5 className='h5-text'>Connect your Coinbase wallet (not Coinbase app)</h5>
          </Col>
          </Row>
          </Modal.Body>
      </Modal>
          </Col>
        </form>
        </Col>
        </Row>
      </Col>
    </Row>
    
    </Container>
   )
};

export default Login;
