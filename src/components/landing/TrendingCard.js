import React from 'react';
import { Card } from 'react-bootstrap';
import { trimString } from '../../utils';
import bids1 from '../../assets/bids1.png';
import bids2 from '../../assets/bids2.png';

const imageStyle = { height: "8.125rem", backgroundImage: `url(${bids1})` }

export function TrendingCard() {
  return (
        <Card className="bg-hl-secondary bg-opacity-60">
            <Card.Img as="div" className="img-fluid" variant="top" style={imageStyle}>
            <div className="icon d-flex justify-content-center">
                <img alt="icon" className="img-fluid rounded-circle" src={bids2}/>
            </div>
            </Card.Img>
            <Card.Header as="div" >
                <Card.Title as="div" className="text-center">
                    <h4>License Name</h4>
                    <span className="h8">by <span className="text-hl-cta">Company Name</span></span>
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text className="text-muted">
                    {
                        trimString(300, "Non excepteur duis aliquip veniam excepteur sit est eiusmod sunt minim deserunt ullamco exercitation. Ut sit excepteur ut incididunt do laboris incididunt veniam aute. Occaecat irure ad anim Lorem ut incididunt officia occaecat cillum. Est nostrud ipsum anim quis dolor amet. Ullamco nulla officia est mollit reprehenderit deserunt. Ipsum ipsum laborum consequat esse voluptate aliqua deserunt deserunt mollit anim. Qui eiusmod aliqua aute velit in aliqua veniam officia. Velit sunt elit labore irure mollit non esse consequat minim. Sunt amet sunt dolore id qui dolor minim. Quis cillum reprehenderit elit consequat officia elit reprehenderit.")
                    }
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    )
}

export default TrendingCard;