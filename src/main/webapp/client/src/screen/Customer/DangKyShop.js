import React, { useState, useEffect } from 'react';
import { Container, Row, Col, img, Card, Button, Tabs,Tab, Navbar, NavDropdown, Nav, Form, FormControl } from 'react-bootstrap';
import axios from 'axios';
import { BrowserRouter, Routes, useNavigate, Navigate, useLocation } from "react-router-dom";

     
export default function DangKyShop() { 
	const [newShopName, setNewShopName] = useState("");
	const [newWebsite, setNewWebsite] = useState("");
	const [newAddress, setNewAddress] = useState("");
	const [newEmail, setNewEmail] = useState("");
	const [newDetail, setNewDetail] = useState("");
	const [newPhoneNumber, setNewPhoneNumber] = useState("");

	let location = useLocation();

	const data = localStorage.getItem('userRegister');
    const userRegisterLocal  = JSON.parse(data);

	const postUser = () => {
        const postIt = {
			shopName: newShopName,
			website: newWebsite,
			address: newAddress,
			detail: newDetail,
			phone: newPhoneNumber,
			email: newEmail,
			userId: userRegisterLocal.userId
			}


        axios.post('http://localhost:8080/register-shop', postIt)
            .then(res => localStorage.setItem('shopRegister', res))
       	
    }
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
		                  
		                </Navbar.Collapse>
		              </Container>
		          </Navbar>
			</Row>
		<div style={{backgroundImage: "url('backgroundImage.svg')"}}>
			<Row >
			<Col xs={2}>
			</Col>
			<Col xs={8} >
				<h2 style = {{marginTop: '3rem', marginBottom: "2rem"}}>Đăng ký shop</h2>
			    <input type="text" id="fullname" placeholder="Tên Shop" style={{padding:"0.5rem", marginBottom: "1.5rem"}} size={35} onChange={(event) => {setNewShopName(event)}} required/>
			    <input type="text" id="fullname1" placeholder="Website" style={{padding:"0.5rem", marginBottom: "1.5rem", marginLeft: "1.5rem"}} size={35} onChange={(event) => {setNewWebsite(event)}} required/><br />
			    <input type="text" id="email" placeholder="Địa chỉ" style={{padding:"0.5rem" , marginBottom: "1.5rem" , marginRight: "1rem"}} size={30} onChange={(event) => {setNewAddress(event)}} required/>
			    <input type="text" id="text" placeholder="Thông tin shop" style={{padding:"0.5rem" , marginBottom: "1.5rem" , marginRight: "1rem"}} size={30} onChange={(event) => {setNewDetail(event)}} required/>
			    <input type="number" id="password" placeholder="Số điện thoại" style={{padding:"0.5rem" , marginBottom: "1.5rem"}} size={30} onChange={(event) => {setNewPhoneNumber(event)}} required/><br />
			    <input type="email" id="password1" placeholder="Email" style={{padding:"0.5rem" , marginBottom: "1.5rem"}} size={30} onChange={(event) => {setNewEmail(event)}} required/><br />

			    
			    <Button href="/dang-ky-dich-vu" style={{marginBottom: '1rem', paddingRight: '8rem', paddingLeft: '8rem', paddingBottom: '0.5rem', paddingTop: '0.5rem'}} onClick={postUser()}>Đăng ký</Button> <br />
			</Col>
			<Col xs={2}>
			</Col>
			</Row>
		</div>
		</Container>
		</div>
)}