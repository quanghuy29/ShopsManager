import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";


export default function NavBarLogin(params) {
    const [user, setUser] = useState("");
    useEffect(() => {
        fetch("http://localhost:8080/ShopsManager_war_exploded/user")
        .then(res => res.json())
        .then(data => setUser(data[0]))
      },[])
    const data = localStorage.getItem('user');
    const userLocal  = JSON.parse(data);
    console.log(userLocal);
    if (userLocal) {let idShop = userLocal.idShop} else {return <Navigate to={"/login"}  />};
    return (
        <div style={{ width: "100%", backgroundColor: "#e4e4e45c",position: "fixed", zIndex: 999}}>
            <Navbar bg="light" expand="lg">
              <Container fluid style={{marginBottom: "-2rem"}}>
                <Navbar.Brand href="/dashboard" style = {{marginLeft: "40px", fontSize: '2.3rem', fontWeight: 700}}>OmniChannel</Navbar.Brand>
                <Navbar.Collapse id="navbarScroll" style={{marginLeft: '34rem'}} >
                    <Nav.Link href="/tai-khoan" style={{marginLeft: "20rem"}}>Shop: <i>{userLocal.userId}</i></Nav.Link>
                </Navbar.Collapse>
              </Container>
          </Navbar>
        </div>
    )
}
