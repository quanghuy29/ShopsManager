import React, { useState, useEffect } from 'react';
import { Container, Row, Col, img, Card, Button, Tabs,Tab, Navbar, NavDropdown, Nav, Form, FormControl } from 'react-bootstrap';
import axios from 'axios';


export default function Register() { 
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
				<h2 style = {{marginTop: '3rem', marginBottom: "2rem"}}>OmniChannel Account Register</h2>
			    <input type="text" id="fullname" placeholder="Họ và tên" style={{padding:"0.5rem", marginBottom: "1.5rem"}} size={70}/><br />
			    <input type="email" id="email" placeholder="Email" style={{padding:"0.5rem" , marginBottom: "1.5rem" , marginRight: "1rem"}} size={30}/>
			    <input type="text" id="username" placeholder="Tên cửa hàng" style={{padding:"0.5rem" , marginBottom: "1.5rem" }} size={30}/><br />
			    <input type="number" id="phonenumber" placeholder="Số điện thoại" style={{padding:"0.5rem" , marginBottom: "1.5rem" , marginRight: "1rem"}} size={30}/>
			    <input type="password" id="password" placeholder="Mật khẩu" style={{padding:"0.5rem" , marginBottom: "1.5rem"}} size={30}/><br />
			    <input type="checkbox" id="agree" style={{marginBottom: "2rem", marginTop: "1rem", marginRight: "0.2rem"}} />
			    <label for="agree">Tôi đồng ý với điều khoản sử dụng của OmniChannel</label><br />

			    
			    <Button formaction="/" style={{marginBottom: '1rem', paddingRight: '8rem', paddingLeft: '8rem', paddingBottom: '0.5rem', paddingTop: '0.5rem'}}>Đăng ký</Button> <br />
			</Col>
			<Col xs={2}>
			</Col>
			</Row>
		</div>
		</Container>
		</div>
)}