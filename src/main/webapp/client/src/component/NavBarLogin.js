import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


export default function NavBarLogin(params) {
    return (
        <div>
            <Navbar bg="light" expand="lg">
              <Container fluid>
                <Navbar.Brand href="/dashboard" style = {{marginLeft: "40px", fontSize: '2.3rem', fontWeight: 700}}>OmniChannel</Navbar.Brand>
                <Navbar.Collapse id="navbarScroll" style={{marginLeft: '34rem'}} >
                    <Nav.Link href="/tai-khoan" style={{marginLeft: "20rem"}}>camtasia</Nav.Link>
                </Navbar.Collapse>
              </Container>
          </Navbar>
        </div>
    )
}
