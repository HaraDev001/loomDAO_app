import React from 'react';
import { useLocation } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { default as PurchaseLicense } from './PurchaseLicense';
import { default as HeartIcon} from '../../static/img/icons/HeartIcon';
import { default as PriceChart } from './charts/PriceChart';
import { default as ArrowIcon } from '../../static/img/icons/ArrowIcon';
import { default as HistoryDropdown } from './dropdowns/HistoryDropdown';

const LicenseDetails = () => {
    const { state: item } = useLocation();
    
    return (
        <>
            <Row className="mb-2">
                <Col>
                     <Row className="mb-1">
                        <span className="h7 text-hl-cta" style={{fontWeight: "bold"}}>Collection: {item.collection.name}</span> 
                    </Row>
                    <Row className="my-1">
                        <h2 className="mb-0">{item.name}</h2>
                    </Row>
                    <Row className="my-1">
                        <div className="d-flex align-items-center">
                            <span className="h7 text-hl-light-mild" style={{fontWeight: "bold"}}>Listed by: <span className="text-hl-cta">{item.lister.profile}</span></span>
                            <div className="likes d-flex align-items-center ms-5">
                                <div className="likes-icon me-1">
                                    <HeartIcon />
                                </div>
                                { item.likes }
                            </div>
                        </div>
                    </Row>
                </Col>
            </Row>
            <Row className="mb-3">
                <PurchaseLicense />
            </Row>
            <Row>
                <Col className="border border-hl-light-mild rounded-3 py-3">
                    <Row>
                        <Col className="d-flex">
                            <div className="me-2">
                                <ArrowIcon />
                            </div>
                            <header className="d-flex">
                                <h4 className="me-2" >Price history</h4>
                                <HistoryDropdown />
                            </header>
                        </Col>
                    </Row>
                    <PriceChart />
                </Col>
            </Row>
        </>
    )
}
export default LicenseDetails;