import React from "react";
import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import cookpal from './images/cookpal.png';

export default function Topnavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={cookpal} alt="Logo" width="70" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Passer en cuisine</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#home">Acceuil</Nav.Link>
            <Nav.Link href="#features">A propos</Nav.Link>
            <Nav.Link href="#pricing">Aide</Nav.Link>
            <Nav.Link><button className="btn btn-success">Connexion</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
