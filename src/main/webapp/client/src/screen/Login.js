import React, { useState, useEffect } from 'react';
import { Container, Row, Col, img, Card, Button, Tabs,Tab, Navbar, NavDropdown, Nav, Form, FormControl } from 'react-bootstrap';
import axios from 'axios';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { createBrowserHistory } from 'history';



export default function Login(props) { 
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");

	const [user, setUser] = useState("");

	const navigate = useNavigate();

	let location = useLocation();
	const history = createBrowserHistory();
	var linkToShop = "/dashboard";

	const loginFunction = () => {
		let isCheck = true;
		var postIt;

		if (email) {
			if (email == "") {
				alert("Email không được để trống");
				isCheck = false;
			} else if (!isEmail(email)) {
				alert("Email không đúng định dạng");
				isCheck = false;
			}
			if (password == '') {
				alert("Password không được để trống");
				isCheck = false;
			}
			postIt = {
				email: email,
				password: password
			}
		}
		if (phone) {
			if (phone == "") {
				alert("Phone không được để trống");
				isCheck = false;
			} else if (!isPhone(phone)) {
				alert("Phone không đúng định dạng");
				isCheck = false;
			}
			if (password == '') {
				alert("Password không được để trống");
				isCheck = false;
			}
			postIt = {
				phoneNumber: phone,
				password: password
			}
		}

		console.log(postIt);

		if(isCheck == true) {
			axios.post('http://localhost:8080/ShopsManager_war_exploded/login', postIt)
			.then(res => {
				if(res.data.status == "Error") alert("Thông tin đăng nhập không chính xác");
				else setUser(res.data);
			})

		    if(user) {
				const setJsonData=JSON.stringify(user);
				localStorage.setItem('user', setJsonData); checkLogin();
			}
		}
	}

	function isEmail(email) {
		return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			email
		);
	}

	function isPhone(number) {
		return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
	}

	const checkLogin = () => {
	const dataLocal = localStorage.getItem('user');
    const userLocal  = JSON.parse(dataLocal);
	

  	if(userLocal.role == "admin") {  navigate("/admin", { replace: true });}
    else if(userLocal.role == "shop")
   { navigate("/dashboard", { replace: true });}}
	

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
				<input type="email" id="email" style={{paddingTop: '0.5rem', paddingBottom: '0.5rem', paddingRight: '6rem', paddingLeft: '0.5rem'}} onChange={(event) => {setEmail(event.target.value)}} required/><br />
				<label for="password" style={{fontSize: '1.5rem',marginRight: '12rem', marginTop: '1rem', textAlign: 'left', marginBottom: '0.7rem'}}>Password</label><br />
				<input type="password" id="password" style={{marginBottom: '2rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', paddingRight: '6rem', paddingLeft: '0.5rem'}} onChange={(event) => {setPassword(event.target.value)}} required/><br />
			    <Button id="btn-Login" style={{marginBottom: '1rem', paddingRight: '8rem', paddingLeft: '8rem', paddingBottom: '0.5rem', paddingTop: '0.5rem'}} onClick={loginFunction} >Login</Button> <br />
			    <a href="#" style={{marginBottom: '0.5rem'}}>Forgot Password?</a> <br />
			    <a href="/register" >Register</a> <br />
			  </Tab>
			  <Tab eventKey="profile" title="Phone Number">
			  	<label for="number" style={{fontSize: '1.5rem', marginRight: '9rem', marginBottom: '0.7rem'}}>Phone Number</label><br />
			    <input type="text" id="phone" style={{paddingTop: '0.5rem', paddingBottom: '0.5rem', paddingRight: '6rem', paddingLeft: '0.5rem'}} onChange={(event) => {setPhone(event.target.value)}} required/><br />
			    <label for="password" style={{fontSize: '1.5rem',marginRight: '12rem', marginTop: '1rem', textAlign: 'left', marginBottom: '0.7rem'}}>Password</label><br />
			    <input type="password" id="password" style={{marginBottom: '2rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', paddingRight: '6rem', paddingLeft: '0.5rem'}} onChange={(event) => {setPassword(event.target.value)}} required/><br />
			    <Button style={{marginBottom: '1rem', paddingRight: '8rem', paddingLeft: '8rem', paddingBottom: '0.5rem', paddingTop: '0.5rem'}} onClick={loginFunction}>Login</Button> <br />
			    <a href="#" style={{marginBottom: '0.5rem'}}>Forgot Password?</a> <br />
			    <a href="/register" >Register</a> <br />
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