import React from 'react';
import { LicenseOrSaleCard } from '../../components/';
import { Col } from 'react-bootstrap';
import placeholder from '../../static/img/placeholders/500x500.png';

const All = () => {
  // const [licenses, setLicenses] = useState([]);
  const all = [];
  
  let dummyLicense = {
    options: {}, // to implement later on
    id: 93248, 
    name: "Confluence Premium",
    maxSupply: 26, // max supply
    listedAmount: 5,
    userBalance: 10,
    image: placeholder,
    description: "Minim eu nostrud esse reprehenderit excepteur exercitation magna dolore adipisicing cillum proident minim quis. Nisi aliqua qui cupidatat cupidatat nisi. Ad ea eu Lorem consectetur voluptate officia eu. Consectetur laborum adipisicing",
    provider: {
      name: 'Jira',
      image: placeholder,
    },
    lister: {
      profile: "rasguy92",
      address: "0x098s565kgfpo00ddfgoo0565606",
      image: placeholder
    }, 
    collection: {
      name: "Confluence",
      image: placeholder, 
    },
    price: 0.2,
    likes: 100,
    contractAddress: "0x982374283094823904832897423846756756",
    metadata: [
      {property: "access", value: "admin"},
      {property: "type", value: "premium"}
    ]
  }

  for (let i = 0; i < 26; i++){
    if(i % 2 === 0){
        all.push({type: "license", tokenId: i , ...dummyLicense});
    } else {
        all.push({type: "sale", tokenId: i , ...dummyLicense});
    }
  }
  
  return (
      all.map((license, i) => (
        <Col key={i} lg="3" className="license-or-sale g-3">
          <LicenseOrSaleCard {...license} />
        </Col>
        )
      )
    ) 
}

export default All;
