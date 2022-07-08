import React from 'react';
import { useLocation } from 'react-router-dom';
import { default as PurchaseLicenseButton } from './PurchaseLicenseButton';
import {default as CoinIcon} from '../../static/img/icons/CoinIcon'; 
import {default as HeirloomSmallIcon} from '../../static/img/logo/HeirloomSmallIcon'; 
import { Col, Row } from 'react-bootstrap';

const PurchaseLicense = () => {
    const {state: item } = useLocation(); 
    return (
        <Col className="p-3 rounded-3 border-gradient">
            <Row>
                <Col className="header mb-2">
                    <span className="h8 d-inline-flex align-items-center"><span className="me-2"><CoinIcon /> </span> {item.listedAmount}/{item.userBalance} License NFTs listed.</span>
                </Col>
            </Row>
            <Row>
                <Col className="mb-2">
                    <h3 className="border-bottom border-hl-light-mild py-2">{item.listedAmount - item.soldAmount} License NFT{item.listedAmount - item.soldAmount > 1 ? 's' : ''} Available for sale.</h3>
                </Col>
            </Row>
            <Row>
                <Col className="body mb-1">
                    <h5 className="title mb-3">Current Price</h5>
                    <div className="price d-flex align-items-end mb-3">
                        <div className="heirloom-icon">
                            <HeirloomSmallIcon />
                        </div>
                        <h2>{item.price}</h2>
                        <span className="price-fiat h7 ms-2">( ${item.priceFiat.toFixed(2)} )</span>
                    </div> 
                </Col> 
            </Row>
            <Row>
                <Col>
                    <PurchaseLicenseButton />
                </Col>
            </Row>
        </Col>
    )
}
export default PurchaseLicense;

