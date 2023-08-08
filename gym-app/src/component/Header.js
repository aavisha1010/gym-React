import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

function Header() {
  return (
   <>
   <Navbar className='navbarM mb-2'  data-bs-theme="light">
        <Container>
          <Navbar.Brand className='brand-name' href="#home">GYM APP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Training</Nav.Link>
            <Nav.Link href="#pricing">Packages</Nav.Link>
            <Nav.Link href="#pricing">Offer</Nav.Link>
          </Nav>
          <Nav.Link className="LoginButton" href="#action1">Logout</Nav.Link>
        </Container>
      </Navbar>
   </>
  )
}

export default Header