import React from 'react';
import { Button, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../template/img/logo.png';
import ScrollIntoView from 'react-scroll-into-view'

export function Header() {
  return (
    <div className='div-header-container'>
      <Navbar.Brand href="/" ><Image src={Logo} alt="HL" width="140" className="img-fluid"/></Navbar.Brand>
          <Navbar.Toggle as="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"/>
          <Navbar.Collapse>
            <Nav as="ul" className="navbar-nav ms-auto mb-2 mb-lg-0 flex-lg-row align-items-lg-center">
              <Nav.Item as="li">
              <ScrollIntoView selector="#team-section">
                <Nav.Link href="#" eventKey="team">Team</Nav.Link>
              </ScrollIntoView>
              </Nav.Item>
                <NavDropdown 
                  title="Explore" 
                  menuVariant="dark"
                  className="dropdown-menu-end fade-down"
                  id="exploreDropDown">
                  <NavDropdown.Item href="#">Explore 1</NavDropdown.Item> 
                  <NavDropdown.Item href="#">Explore 2</NavDropdown.Item> 
                  <NavDropdown.Item href="#">Explore 3</NavDropdown.Item> 
                </NavDropdown>
                <NavDropdown 
                  title="Pages" 
                  menuVariant="dark"
                  className="dropdown-menu-end fade-down">

                  <NavDropdown.Item>
                    <Link to="/marketplace"> 
                      <Button type='button' className='primary-btn'>MarketPlace</Button>
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    <Link to="/licensesales/create"> 
                      <Button type='button' className='primary-btn'>Create</Button>
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    <Link to="/profile"> 
                      <Button type='button' className='primary-btn'>Profile</Button>
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    <Link to="/dashboard"> 
                      <Button type='button' className='primary-btn'>DashBoard</Button>
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    <Link to="/profile"> 
                      <Button type='button' className='primary-btn'>Company Profile</Button>
                    </Link>
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item>
                    <Link to="/dashboard"> 
                      <Button type='button' className='primary-btn'>Company DashBoard</Button>
                    </Link>
                  </NavDropdown.Item>

                </NavDropdown>

                <Nav.Item as="li">
                  <ScrollIntoView selector="#roadmap-section">
                    <Nav.Link href="#" eventKey="roadmap">Roadmap</Nav.Link>
                  </ScrollIntoView>
                </Nav.Item>
                <Nav.Item as="li">
                  <ScrollIntoView selector="#subscription-section">
                    <Nav.Link href="#" eventKey="join">Join</Nav.Link>
                  </ScrollIntoView>
                </Nav.Item>
                <Nav.Item as="li">
                  <ScrollIntoView selector="#whitepaper-section">
                    <Nav.Link href="#" eventKey="whitepaper">Whitepaper</Nav.Link>
                  </ScrollIntoView>
                </Nav.Item>
                <Nav.Item as="li"className="ms-lg-2">
                  <ScrollIntoView selector="#subscription-section">
                    <Link to="/connect">
                      <Button className="btn btn-gradient-primary btn-sm px-3 d-lg-flex align-items-center">Connect Wallet</Button>
                    </Link>
                  </ScrollIntoView>
                </Nav.Item>
            </Nav>
          </Navbar.Collapse>
    </div>
  )
}

export default Header;