import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import { getExchanges } from "../services/fakeExchangService";

const NavBar = () => {

  const handleLink = () => {
    const windowLink = window.open('about:blank');
    windowLink.location.href = "https://nzlouis.com"
  }

  const exchanges = getExchanges();

  return (
    <Navbar sticky="top" bg="light" expand="lg">
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
            <Nav.Link href={`/posts`}>Posts</Nav.Link>
            <Nav.Link href={`/pincodes`}>PIN Codes</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
                {exchanges.map((item) => 
                  <NavDropdown.Item key={item.id} href={`/products/${item.name}`}>Products ({item.name})</NavDropdown.Item>
                )}
            </NavDropdown>
            <Nav.Link href={`/catalogViewer`}>CatalogViewer</Nav.Link>
            <NavDropdown title="Online Tests" id="basic-nav-dropdown">
                  <NavDropdown.Item href={`/liked/`}>Liked Button</NavDropdown.Item>
                  <NavDropdown.Item href={`/counter/`}>Counter</NavDropdown.Item>
                  <NavDropdown.Item href={`/todolist/`}>To Do List</NavDropdown.Item>
                  <NavDropdown.Item href={`/toggle/`}>Toggle</NavDropdown.Item>
            </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
