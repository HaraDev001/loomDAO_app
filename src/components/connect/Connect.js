import React from 'react';
import { Col, Row } from 'react-bootstrap'; 
import { default as ConnectButton } from './ConnectButton';
import metaMaskLogo from '../../static/img/logo/metamask-logo.png'
import wConnectLogo from '../../static/img/logo/wallet-connect-logo.png'
import portisLogo from '../../static/img/logo/portis-logo.png'

const Connect = () => {

  return (
    <Col lg="10" >
      <Row className="d-flex justify-content-center mt-5">
        <Col lg="5" className="header text-center">
          <h2 >
            Connect your wallet.
          </h2>
          <p className="text-muted" >Connect with one of our available <span className="text-hl-cta">wallet</span> providers.</p>
        </Col> 
      </Row>
      <Row className="d-flex justify-content-center align-items-center mt-2">
          <Col lg="5" className="d-flex flex-column justify-content-center px-5">
            <ConnectButton logo={metaMaskLogo} text="MetaMask" />
            <ConnectButton logo={wConnectLogo} text="WalletConnect" />
            <ConnectButton logo={portisLogo} text="Portis" />
          </Col>
      </Row>    
    </Col>
  )
}

export default Connect;