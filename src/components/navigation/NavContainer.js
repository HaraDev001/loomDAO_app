import React from 'react'; 
import { Navbar, Container} from 'react-bootstrap';
import { Header } from '../../components';
import './NavContainer.css';

export function NavContainer() {
  return (
    <Navbar variant="dark" expand="lg" fixed="top" id="navbar" className="nav-bar-container">
        <Header />
    </Navbar>
  )
}