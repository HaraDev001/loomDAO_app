import React,{useEffect} from 'react';
import { LicenseOrSaleCard } from '../../components/';
import { Col } from 'react-bootstrap';
import placeholder from '../../static/img/placeholders/500x500.png';
import {useSelector, useDispatch} from 'react-redux';
import {default as getLicenses} from '../../features/license/licenseSlice';


const Licenses = () => {
  // const [licenses, setLicenses] = useState([]);
  const licenses = [];

  const dispatch = useDispatch()

  const lciensesAll = dispatch(getLicenses())
  console.log(lciensesAll);
  
  let dummyLicense = {
    options: {}, // to implement later on
    id: 93248, 
    name: "Confluence Premium",
    maxSupply: 26, // max supply
    listedAmount: 5,
    soldAmount: 2, 
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
    priceFiat:  10.9430984309,  
    likes: 100,
    contractAddress: "0x982374283094823904832897423846756756",
    metadata: [
      {property: "access", value: "admin"},
      {property: "type", value: "premium"}
    ]
  }

  for (let i = 0; i < 26; i++){
    if(i % 2 === 0){
      licenses.push({type: "license", tokenId: i , ...dummyLicense, sold: false});
    }
  }
  
  return (
      licenses.map((license, i) => (
        <Col key={i} lg="3" className="license-or-sale g-3">
          { !license.sold && <LicenseOrSaleCard {...license} /> }
        </Col>
        )
      )
    ) 
}

export default Licenses;
