import React from "react";
import {Navbar , Container,NavDropdown, Collapse,Nav} from 'react-bootstrap';
import './Nav.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faPhone } from "@fortawesome/free-solid-svg-icons";

const Navbars = ()=>{
    return(
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">HEALTH AND LIFE MANAGEMENT SYSTEM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="active">Home</Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">FAQ's</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Booking</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Login/Register</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">New Service</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Sevice Details</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Blogs Details</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>Contact us</Nav.Link>
            <Nav.Link> <FontAwesomeIcon icon={faSearch}/> </Nav.Link>
            <Nav.Link>
                <FontAwesomeIcon icon={faPhone} className="phone"/>
                2100030740</Nav. Link><Nav.Link></Nav.Link>
              
            <Nav.Link>
                <button>Contact us </button>
                </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default Navbars;


