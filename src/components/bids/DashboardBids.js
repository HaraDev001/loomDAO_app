import React from 'react'
import './bids.css'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import bids1 from '../../assets/bids1.png';
import bids2 from '../../assets/bids2.png'
import bids3 from '../../assets/bids3.png'
import bids4 from '../../assets/bids4.png'
// import bids5 from '../../assets/bids5.png'
// import bids6 from '../../assets/bids6.png'
// import bids7 from '../../assets/bids7.png'
// import bids8 from '../../assets/bids8.png'
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';

var sectionStyle = {
  backgroundImage: `url(${bids1})`,
  marginBottom: '1rem',
  marginTop: '2rem',
  marginLeft: '0.8rem',
  marginRight: '-0.4rem',
  height: '14rem',
  /* width: '13rem' */
};

var sectionStyles1 = {
  backgroundImage: `url(${bids2})`,
  marginBottom: '-7rem',
  marginTop: '1rem',
  height: '1.3rem',
  /* width: '1rem', */
  marginRight: '',
  marginLeft: '-5rem',
};

var sectionStyles2 = {
  backgroundImage: `url(${bids3})`,
  marginBottom: '-7rem',
  marginTop: '1rem',
  height: '1.3rem',
  /* width: '1rem', */
  marginLeft: '-0.5rem',
};

var sectionStyles3 = {
  backgroundImage: `url(${bids4})`,
  marginBottom: '-7rem',
  marginTop: '1rem',
  height: '1.3rem',
  /* width: '1rem', */
  marginLeft: '-0.5rem',
};

export function DashboardBids() {
  return (
   <Container fluid className='bg-hl-primary'>
          <Row className="">
            
            <Col className="d-flex border border-dark border-2 mx-2 mb-5 mt-5">
              <Row className="justify-content-center bg-transparent w-100">
                <Row className="w-auto m-auto">
                  <Col className='d-flex rounded-circle' style={sectionStyles1} alt=""></Col>
                  <Col className='d-flex rounded-circle' style={sectionStyles2} alt=""></Col>
                  <Col className='d-flex rounded-circle' style={sectionStyles3} alt=""></Col>
                </Row>
                <Row className="text-light mt-3 mx-n3">
                  <Col className='border-dark' style={sectionStyle} alt=""></Col>
                </Row>

                <Row className='m-auto'>
                  <Col className='m-auto'>
                    <Link to={`/licenses/:licenseId`}>
                      <h6 className="text-light">Licence name</h6>
                    </Link>
                  </Col>
                </Row>
                <Row className='m-auto'>
                  <h4>0.00 HELI</h4>
                </Row>
                <Row className="m-auto">
                  <Col className='' ><h6 className="h8 text-hl-cta">Buy now</h6></Col>
                  <Col className='pl-5 ml-5'><h6 className="h8"><AiFillHeart />92</h6></Col>
                </Row>
              </Row>
            </Col>
            
            <Col className="d-flex border border-dark border-2 mx-2 mb-5 mt-5">
              <Row className="justify-content-center bg-transparent w-100">
                <Row className="w-auto m-auto">
                  <Col className='d-flex rounded-circle' style={sectionStyles1} alt=""></Col>
                  <Col className='d-flex rounded-circle' style={sectionStyles2} alt=""></Col>
                  <Col className='d-flex rounded-circle' style={sectionStyles3} alt=""></Col>
                </Row>
                <Row className="text-light mt-3 mx-n3">
                  <Col className='border-dark' style={sectionStyle} alt=""></Col>
                </Row>

                <Row className='m-auto'>
                  <Col className='m-auto'>
                    <Link to={`/licenses/:licenseId`}>
                      <h6 className="text-light">Licence name</h6>
                    </Link>
                  </Col>
                </Row>
                <Row className='m-auto'>
                  <h4>0.00 HELI</h4>
                </Row>
                <Row className="m-auto">
                  <Col className='' ><h6 className="h8 text-hl-cta">Buy now</h6></Col>
                  <Col className='pl-5 ml-5'><h6 className="h8"><AiFillHeart />92</h6></Col>
                </Row>
              </Row>
            </Col>

            <Col className="d-flex border border-dark border-2 mx-2 mb-5 mt-5">
              <Row className="justify-content-center bg-transparent w-100">
                <Row className="w-auto m-auto">
                  <Col className='d-flex rounded-circle' style={sectionStyles1} alt=""></Col>
                  <Col className='d-flex rounded-circle' style={sectionStyles2} alt=""></Col>
                  <Col className='d-flex rounded-circle' style={sectionStyles3} alt=""></Col>
                </Row>
                <Row className="text-light mt-3 mx-n3">
                  <Col className='border-dark' style={sectionStyle} alt=""></Col>
                </Row>

                <Row className='m-auto'>
                  <Col className='m-auto'>
                    <Link to={`/licenses/:licenseId`}>
                      <h6 className="text-light">Licence name</h6>
                    </Link>
                  </Col>
                </Row>
                <Row className='m-auto'>
                  <h4>0.00 HELI</h4>
                </Row>
                <Row className="m-auto">
                  <Col className='' ><h6 className="h8 text-hl-cta">Buy now</h6></Col>
                  <Col className='pl-5 ml-5'><h6 className="h8"><AiFillHeart />92</h6></Col>
                </Row>
              </Row>
            </Col>

            <Col className="d-flex border border-dark border-2 mx-2 mb-5 mt-5">
              <Row className="justify-content-center bg-transparent w-100">
                <Row className="w-auto m-auto">
                  <Col className='d-flex rounded-circle' style={sectionStyles1} alt=""></Col>
                  <Col className='d-flex rounded-circle' style={sectionStyles2} alt=""></Col>
                  <Col className='d-flex rounded-circle' style={sectionStyles3} alt=""></Col>
                </Row>
                <Row className="text-light mt-3 mx-n3">
                  <Col className='border-dark' style={sectionStyle} alt=""></Col>
                </Row>

                <Row className='m-auto'>
                  <Col className='m-auto'>
                    <Link to={`/licenses/:licenseId`}>
                      <h6 className="text-light">Licence name</h6>
                    </Link>
                  </Col>
                </Row>
                <Row className='m-auto'>
                  <h4>0.00 HELI</h4>
                </Row>
                <Row className="m-auto">
                  <Col className='' ><h6 className="h8 text-hl-cta">Buy now</h6></Col>
                  <Col className='pl-5 ml-5'><h6 className="h8"><AiFillHeart />92</h6></Col>
                </Row>
              </Row>
            </Col>
            
            </Row>

            <Row className="">

            <Col className="d-flex border border-dark border-2 mx-2 mb-5 mt-5">
              <Row className="justify-content-center bg-transparent w-100">
                <Row className="w-auto m-auto">
                  <Col className='d-flex rounded-circle' style={sectionStyles1} alt=""></Col>
                  <Col className='d-flex rounded-circle' style={sectionStyles2} alt=""></Col>
                  <Col className='d-flex rounded-circle' style={sectionStyles3} alt=""></Col>
                </Row>
                <Row className="text-light mt-3 mx-n3">
                  <Col className='border-dark' style={sectionStyle} alt=""></Col>
                </Row>

                <Row className='m-auto'>
                  <Col className='m-auto'>
                    <Link to={`/licenses/:licenseId`}>
                      <h6 className="text-light">Licence name</h6>
                    </Link>
                  </Col>
                </Row>
                <Row className='m-auto'>
                  <h4>0.00 HELI</h4>
                </Row>
                <Row className="m-auto">
                  <Col className='' ><h6 className="h8 text-hl-cta">Buy now</h6></Col>
                  <Col className='pl-5 ml-5'><h6 className="h8"><AiFillHeart />92</h6></Col>
                </Row>
              </Row>
            </Col>
            
            <Col className="d-flex border border-dark border-2 mx-2 mb-5 mt-5">
              <Row className="justify-content-center bg-transparent w-100">
                <Row className="w-auto m-auto">
                  <Col className='d-flex rounded-circle' style={sectionStyles1} alt=""></Col>
                  <Col className='d-flex rounded-circle' style={sectionStyles2} alt=""></Col>
                  <Col className='d-flex rounded-circle' style={sectionStyles3} alt=""></Col>
                </Row>
                <Row className="text-light mt-3 mx-n3">
                  <Col className='border-dark' style={sectionStyle} alt=""></Col>
                </Row>

                <Row className='m-auto'>
                  <Col className='m-auto'>
                    <Link to={`/licenses/:licenseId`}>
                      <h6 className="text-light">Licence name</h6>
                    </Link>
                  </Col>
                </Row>
                <Row className='m-auto'>
                  <h4>0.00 HELI</h4>
                </Row>
                <Row className="m-auto">
                  <Col className='' ><h6 className="h8 text-hl-cta">Buy now</h6></Col>
                  <Col className='pl-5 ml-5'><h6 className="h8"><AiFillHeart />92</h6></Col>
                </Row>
              </Row>
            </Col>
            
            <Col className="d-flex border border-dark border-2 mx-2 mb-5 mt-5">
              <Row className="justify-content-center bg-transparent w-100">
                <Row className="w-auto m-auto">
                  <Col className='d-flex rounded-circle' style={sectionStyles1} alt=""></Col>
                  <Col className='d-flex rounded-circle' style={sectionStyles2} alt=""></Col>
                  <Col className='d-flex rounded-circle' style={sectionStyles3} alt=""></Col>
                </Row>
                <Row className="text-light mt-3 mx-n3">
                  <Col className='border-dark' style={sectionStyle} alt=""></Col>
                </Row>

                <Row className='m-auto'>
                  <Col className='m-auto'>
                    <Link to={`/licenses/:licenseId`}>
                      <h6 className="text-light">Licence name</h6>
                    </Link>
                  </Col>
                </Row>
                <Row className='m-auto'>
                  <h4>0.00 HELI</h4>
                </Row>
                <Row className="m-auto">
                  <Col className='' ><h6 className="h8 text-hl-cta">Buy now</h6></Col>
                  <Col className='pl-5 ml-5'><h6 className="h8"><AiFillHeart />92</h6></Col>
                </Row>
              </Row>
            </Col>
            
            <Col className="d-flex border border-dark border-2 mx-2 mb-5 mt-5">
              <Row className="justify-content-center bg-transparent w-100">
                <Row className="w-auto m-auto">
                  <Col className='d-flex rounded-circle' style={sectionStyles1} alt=""></Col>
                  <Col className='d-flex rounded-circle' style={sectionStyles2} alt=""></Col>
                  <Col className='d-flex rounded-circle' style={sectionStyles3} alt=""></Col>
                </Row>
                <Row className="text-light mt-3 mx-n3">
                  <Col className='border-dark' style={sectionStyle} alt=""></Col>
                </Row>

                <Row className='m-auto'>
                  <Col className='m-auto'>
                    <Link to={`/licenses/:licenseId`}>
                      <h6 className="text-light">Licence name</h6>
                    </Link>
                  </Col>
                </Row>
                <Row className='m-auto'>
                  <h4>0.00 HELI</h4>
                </Row>
                <Row className="m-auto">
                  <Col className='' ><h6 className="h8 text-hl-cta">Buy now</h6></Col>
                  <Col className='pl-5 ml-5'><h6 className="h8"><AiFillHeart />92</h6></Col>
                </Row>
              </Row>
            </Col>

          <Row className='justify-content-center align-items-center'>
            <Button className="primary-btn w-25">Load More</Button>
          </Row>
        
    </Row>
      
    </Container>
  )
}

export default DashboardBids;
