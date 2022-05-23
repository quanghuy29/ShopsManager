import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export default function Nava(params) {
    return (
    	<div style={{backgroundColor: "#f5f5f5", marginTop: '0rem', paddingRight: 0, paddingLeft: 0}}>
    		<h5 style={{paddingTop: '2rem'}}>
    			<a href="/dashboard" style = {{textDecoration: 'none', color: '#221e1e'}}>Dashboard</a></h5>
    		<h5 style={{paddingTop: '2.5rem'}}>
    			<a href="/don-hang" style = {{textDecoration: 'none', color: '#221e1e'}}>Đơn hàng</a></h5>
    		<h5 style={{paddingTop: '2.5rem'}}>
    			<a href="/san-pham" style = {{textDecoration: 'none', color: '#221e1e'}}>Sản phẩm</a></h5>
    		<h5 style={{paddingTop: '2.5rem', paddingBottom: '1rem'}}>
    			<a href="/gian-hang" style = {{textDecoration: 'none', color: '#221e1e'}}>Gian hàng</a></h5>
            <h5 style={{paddingTop: '2.5rem', paddingBottom: '1rem'}}>
                <a href="/khach-hang" style = {{textDecoration: 'none', color: '#221e1e'}}>Khách hàng</a></h5>
            <h5 style={{paddingTop: '2.5rem', paddingBottom: '4.5rem'}}>
                <a href="/tai-khoan" style = {{textDecoration: 'none', color: '#221e1e'}}>Tài khoản</a></h5>
    	</div>
    )}