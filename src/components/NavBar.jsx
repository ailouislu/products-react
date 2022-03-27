import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { getExchanges } from "../services/fakeExchangService";

const NavBar = () => {

  const handleLink = () => {
    const windowLink = window.open('about:blank');
    windowLink.location.href = "https://nzlouis.com"
  }

  const exchanges = getExchanges();

  return (
    <Navbar sticky="top" bg="light" variant="light" expand="lg">
      <Container>
      <Navbar.Brand onClick={handleLink}>
        <img
            alt="NZLouis.com"
            src={require(`../images/nzlouis.jpg`).default}
            width="100"
            height="30"
            className="d-inline-block align-top"
          />
      </Navbar.Brand>
      <Nav className="me-auto">
        {exchanges.map((item) => 
          <Nav.Link key={item.id} href={`/products/${item.name}`}>Products ({item.name})</Nav.Link>
        )}
      </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
