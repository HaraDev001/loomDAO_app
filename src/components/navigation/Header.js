import React from 'react';
import { Button, Nav, Navbar, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../static/img/logo/logo.png';

export function Header() {
  return (
    <>
      <Navbar.Brand href="/" ><Image src={Logo} alt="HL" width="175" className="img-fluid"/></Navbar.Brand>
          <Navbar.Toggle as="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"/>
          <Navbar.Collapse>
            <Nav 
              as="ul" 
              className="navbar-nav ms-auto mb-2 mb-lg-0 flex-lg-row align-items-lg-center"
              >
              <Nav.Item as="li">
                <Link
                  className="nav-link"
                  to="/#team-section" 
                  scroll="true"
                  >Team
                </Link>
              </Nav.Item>
               <Nav.Item as="li">
                  <Link
                    className="nav-link" 
                    to="/#roadmap-section" 
                    scroll="true">
                      Roadmap
                  </Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link
                      className="nav-link" 
                      to="/#whitepaper-section"  
                      scroll="true">
                        Whitepaper
                    </Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Link className="nav-link" to="/explore/licenses">Marketplace</Link> 
                </Nav.Item>
                <Nav.Item as="li"className="ms-lg-2">
                  <Link to="/connect">
                    <Button className="btn btn-hl-cta px-3 align-items-center">Connect Wallet</Button>
                  </Link>
                </Nav.Item>
            </Nav>
          </Navbar.Collapse>
    </>
  )
}

export default Header;