import React from 'react';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav";
import '../styles/Header.css';

const Header = () => {
  return (
    <Navbar sticky="top" variant="nomad-dark">
      <Navbar.Brand href="/">Nomad</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/locations">Locations</Nav.Link>
        <Nav.Link href="/hotels">Hotels</Nav.Link>
        <Nav.Link href="/restaurants">Restaurants</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
