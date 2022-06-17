import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";


export default function NavBarLoginAdmin(params) {
    return (
        <div>
            <Navbar bg="light" expand="lg">
              <Container fluid>
                <Navbar.Brand href="/admin" style = {{marginLeft: "40px", fontSize: '2.3rem', fontWeight: 700}}>OmniChannel</Navbar.Brand>
                <Navbar.Collapse id="navbarScroll" style={{marginLeft: '34rem'}} >
                    <Nav.Link style={{marginLeft: "20rem"}}>Admin</Nav.Link>
                </Navbar.Collapse>
              </Container>
          </Navbar>
        </div>
    )
}