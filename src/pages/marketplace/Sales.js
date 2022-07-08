import React, {useState, useEffect} from 'react';
import { LicenseOrSaleCard } from '../../components/';
import { Col } from 'react-bootstrap';
import placeholder from '../../static/img/placeholders/500x500.png';

const Sales = () => {
  // const [sales, setSales] = useState([]);
  const sales = [];
  
  let dummyLicense = {
    options: {}, // to implement later on
    id: 93248, 
    name: "Confluence Premium License",
    total: 26,
    listedAmount: 1,
    userBalance: 1,
    image: placeholder,
    provider: {
      name: 'Jira',
      image: placeholder,
    },
    lister: {
      address: "0x098s565kgfpo00ddfgoo0565606",
      image: placeholder
    }, 
    collection: {
      name: "Confluence collection",
      image: placeholder, 
    },
    price: 0.2,
    likes: 100,
  }
  
  for (let i = 0; i < 26; i++){
    if(i % 2 === 0){
      sales.push({type: "sale" , tokenId: i, ...dummyLicense});
    }
  }

  return (
    sales.map((sale, i) => (
      <Col key={i} lg="3" className="license-or-sale g-3">
        <LicenseOrSaleCard {...sale} />
      </Col>
      )
    )
  )
}

export default Sales;
