import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


export default function NavBar(params) {
    return (
        <div style={{position: "fixed", zIndex: 999}}>
            <Navbar bg="light" expand="lg">
              <Container fluid>
                <Navbar.Brand href="/" style = {{marginLeft: "40px", fontSize: '2.3rem', fontWeight: 700}}>OmniChannel</Navbar.Brand>
                <Nav.Link href="/tinh-nang" style={{marginLeft: '3rem'}}>Tính năng</Nav.Link>
                <Nav.Link href="/bang-gia" style={{marginLeft: '2rem'}}>Bảng giá</Nav.Link>
                <Navbar.Collapse id="navbarScroll" style={{marginLeft: '34rem'}} >
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register"><Button variant="info">Register</Button></Nav.Link>

                </Navbar.Collapse>
              </Container>
          </Navbar>
        </div>
    )
}
