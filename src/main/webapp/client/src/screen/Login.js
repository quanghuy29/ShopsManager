import React, { useState, useEffect } from 'react';
import { Container, Row, Col, img, Card, Button, Tabs,Tab, Navbar, NavDropdown, Nav, Form, FormControl } from 'react-bootstrap';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { createBrowserHistory } from 'history';



export default function Login(props) { 
	const data={role: 'shop', idShop: '1312'}
	let location = useLocation();
	const history = createBrowserHistory();
	var linkToShop = "/dashboard/" + data.idShop;

	const sendData = () => { props.appCallback(data)}
	sendData();

  	if(data.role == "admin") { return <Navigate to="/admin" state={{ from: location }} />}
    else if(data.role === "shop")
   { return <Navigate to={linkToShop} state={{ from: location }}  />}

	return (
		<div>
		<Container style={{maxWidth: '100%', margin: '1rem', marginTop:0}}>
			<Row >
				<Navbar bg="light" expand="lg">
		              <Container fluid>
		                <Navbar.Brand href="/" style = {{marginLeft: "40px", fontSize: '2.3rem', fontWeight: 700}}>OmniChannel</Navbar.Brand>
		      
		                <Navbar.Toggle aria-controls="navbarScroll" />
		                <Navbar.Collapse id="navbarScroll">
		                  <Nav
		                    className="me-auto my-2 my-lg-0"
		                    style={{ maxHeight: '100px' }}
		                    navbarScroll
		                  >
		                    
		                  </Nav>
		                  
		                    <Nav.Link href="/login">Login</Nav.Link>
		                    <Nav.Link href="/register"><Button variant="info">Register</Button></Nav.Link>

		                </Navbar.Collapse>
		              </Container>
		          </Navbar>
			</Row>
		<div style={{backgroundImage: "url('backgroundImage.svg')"}}>
			<Row >
			<Col xs={2}>
			</Col>
			<Col xs={8} >
			<h2 style = {{marginTop: '3rem'}}>OmniChannel Account Login</h2>
			<Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-5">
			  <Tab eventKey="home" title="Email" style={{paddingLeft: '6rem'}}>
			    <label for="email" style={{fontSize: '1.5rem', marginRight: '15rem', marginBottom: '0.7rem'}}>Email</label><br />
			    <input type="email" id="email" style={{paddingTop: '0.5rem', paddingBottom: '0.5rem', paddingRight: '6rem', paddingLeft: '0.5rem'}}/><br />
			    <label for="password" style={{fontSize: '1.5rem',marginRight: '12rem', marginTop: '1rem', textAlign: 'left', marginBottom: '0.7rem'}}>Password</label><br />
			    <input type="password" id="password" style={{marginBottom: '2rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', paddingRight: '6rem', paddingLeft: '0.5rem'}}/><br />
			    <Button style={{marginBottom: '1rem', paddingRight: '8rem', paddingLeft: '8rem', paddingBottom: '0.5rem', paddingTop: '0.5rem'}}  >Login</Button> <br />
			    <a href="#" style={{marginBottom: '0.5rem'}}>Forgot Password?</a> <br />
			    <a href="#" >Register</a> <br />
			  </Tab>
			  <Tab eventKey="profile" title="Phone Number">
			  	<label for="number" style={{fontSize: '1.5rem', marginRight: '9rem', marginBottom: '0.7rem'}}>Phone Number</label><br />
			    <input type="email" id="email" style={{paddingTop: '0.5rem', paddingBottom: '0.5rem', paddingRight: '6rem', paddingLeft: '0.5rem'}}/><br />
			    <label for="password" style={{fontSize: '1.5rem',marginRight: '12rem', marginTop: '1rem', textAlign: 'left', marginBottom: '0.7rem'}}>Password</label><br />
			    <input type="password" id="password" style={{marginBottom: '2rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', paddingRight: '6rem', paddingLeft: '0.5rem'}}/><br />
			    <Button style={{marginBottom: '1rem', paddingRight: '8rem', paddingLeft: '8rem', paddingBottom: '0.5rem', paddingTop: '0.5rem'}}>Login</Button> <br />
			    <a href="#" style={{marginBottom: '0.5rem'}}>Forgot Password?</a> <br />
			    <a href="#" >Register</a> <br />
			  </Tab>
			</Tabs>
			</Col>
			<Col xs={2}>
			</Col>
			</Row>
		</div>
		</Container>
		</div>
)}