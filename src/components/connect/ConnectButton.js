import React from 'react';
import { Button } from 'react-bootstrap';

const ConnectButton = ({logo, text}) => {
  return (
    <Button
    size="lg"
    style={{width: "100%"}}
    variant="outline-hl-cta"
    className="border border-hl-light-mild text-hl-light mb-3"
    >
        <div className="d-flex position-relative justify-content-center align-items-center">
            <span className="d-block position-absolute" style={{ left: "-2rem"}}> 
                <img src={logo} className="img-fluid" alt="metamask logo"/>
            </span>
            <h6 style={{marginBottom: "0"}} >{text}</h6>
        </div>
    </Button>
  )
}

export default ConnectButton;
