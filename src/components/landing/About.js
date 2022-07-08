import React from 'react';
import { Row, Col } from 'react-bootstrap';
import aboutImage from '../../template/img/about/About.svg';

const About = () => {
    return (
        <Col 
        lg="10"
        
        >
            <Row className="d-flex flex-row justify-content-center align-items-center">
                <Col lg="5" className="mx-auto">
                    <img className="img-fluid" src={aboutImage} alt=".."/>
                </Col>          
                <Col lg="7" >
                    <p className="text-sm mb-0"> HeirloomDAO is a platform that enables users and companies to mint and acquire lifetime subscription opportunities in the form of non-fungible tokens. Users only need to hold those tokens in their wallets in order to access software solutions such as editing programs, tracking software, and more.</p>
                    <br/>
                    <p className="text-sm mb-0"> We believe in giving more liberty to users. Traditional software licenses are nontransferable and fixed to a client personal account. With NFT licenses, users have full rights of ownership of the products they purchase, being able to sell them on a secondary market at any time </p>
                </Col>          
            </Row>
        </Col>
    )
}
export default About;