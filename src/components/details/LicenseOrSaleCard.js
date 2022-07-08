import React from 'react';
import { useLocation } from 'react-router-dom'; 
import { Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import { shortenAddress, capitalize } from '../../utils';


const LicenseOrSaleCard = () => {
    const { state: item } = useLocation();
    return (
        <Card>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
                <Card.Title bsPrefix="" className="h8">Created by <span className="text-hl-cta">{item.provider.name}</span></Card.Title>
                <Card.Text className="h8">
                    {item.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem className="container-fluid">
                    <Row>
                        <Col className="text-left h8 p-0">Contract address</Col>
                        <Col className="text-right h8 p-0">{shortenAddress(item.contractAddress)}</Col>
                    </Row> 
                </ListGroupItem>
                <ListGroupItem className="container-fluid">
                    <Row>
                        <Col className="text-left h8 p-0">Token ID</Col>
                        <Col className="text-right h8 p-0">{item.tokenId}</Col>
                    </Row> 
                </ListGroupItem>
                <ListGroupItem className="container-fluid">
                    <Row>
                        {/* write logic here to determine blockchain based on users address */}
                        <Col className="text-left h8 p-0">Blockchain</Col> 
                        <Col className="text-right h8 p-0">Polygon</Col>
                    </Row> 
                </ListGroupItem>
            </ListGroup>
            <ListGroup>
                {
                    item.metadata.map((meta, i) => (
                    <ListGroupItem key={i} className="container-fluid">
                        <Row>
                            <Col className="text-left h8 p-0">{capitalize(meta.property)}</Col>
                            <Col className="text-right h8 p-0">{capitalize(meta.value)}</Col>
                        </Row> 
                    </ListGroupItem>
                    ))
                }
            </ListGroup>
        </Card>
    )
}

export default LicenseOrSaleCard;
