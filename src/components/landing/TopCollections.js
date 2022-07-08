import React from 'react';
import { Row, Col } from 'react-bootstrap';
import checkIcon from '../../static/img/icons/hl-check.svg';
import placeholder from '../../static/img/placeholders/500x500.png';

const TopCollections = () => {
    const collections = [
        { 
            name: 'lorem ipsum',
            total: 898650
        },
        { 
            name: 'lorem ipsum',
            total: 898650
        },
        { 
            name: 'lorem ipsum',
            total: 898650
        },
        { 
            name: 'lorem ipsum',
            total: 898650
        },
        { 
            name: 'lorem ipsum',
            total: 898650
        },
        { 
            name: 'lorem ipsum',
            total: 898650
        },
        { 
            name: 'lorem ipsum',
            total: 898650
        },
        { 
            name: 'lorem ipsum',
            total: 898650
        },
        { 
            name: 'lorem ipsum',
            total: 898650
        },
        { 
            name: 'lorem ipsum',
            total: 898650
        },
        { 
            name: 'lorem ipsum',
            total: 898650
        },
        { 
            name: 'lorem ipsum',
            total: 898650
        },
        { 
            name: 'lorem ipsum',
            total: 898650
        },
        { 
            name: 'lorem ipsum',
            total: 898650
        },
        { 
            name: 'lorem ipsum',
            total: 898650
        },
        { 
            name: 'lorem ipsum',
            total: 898650
        }
    ];
    return (
        <Col lg='10'>
            <Row>
                {
                    collections.map((col, i) => (
                        <Col
                            sm="12" 
                            lg="4" 
                            md="6"
                            className="d-flex flex-row justify-content-center justify-content-sm-center justify-content-md-start justify-content-lg-start"
                            key={i}
                        >
                            <div className="img-box">
                                <span className="text-muted count">{i+1 < 10 ? `0${i+1}` : i+1 }</span>
                                <img src={placeholder} className="license-icon rounded-circle" alt='license icon'/>
                                <img src={checkIcon} className="check-icon" alt='check' />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <span className="ms-2">{col.name}</span>
                                <span className="ms-2 text-muted">${col.total.toFixed(2)}</span>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </Col>
    )
}
export default TopCollections;