import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

export default function Navadmin(params) {
    const signOut = () => {
        console.log('1')
        return <Navigate to={"/login"} state={{ role: "" }}  />;
    }
    return (
    	<div style={{backgroundColor: "#f5f5f5", marginTop: '0rem', paddingRight: 0, paddingLeft: 0}}>
    		<h5 style={{paddingTop: '2rem'}}>
    			<a href="/admin" style = {{textDecoration: 'none', color: '#221e1e'}}>Dashboard</a></h5>
    		<h5 style={{paddingTop: '2.5rem'}}>
    			<a href="/quan-ly-dich-vu" style = {{textDecoration: 'none', color: '#221e1e'}}>Quản lý dịch vụ</a></h5>
    		<h5 style={{paddingTop: '2.5rem'}}>
    			<a href="/quan-ly-shop" style = {{textDecoration: 'none', color: '#221e1e'}}>Quản lý người dùng</a></h5>
    		<h5 style={{paddingTop: '2.5rem', paddingBottom: '12rem'}}>
    			<a href="/quan-ly-data" style = {{textDecoration: 'none', color: '#221e1e'}}>Quản lý data</a></h5>
            <Button size="lg" onClick={signOut} href="/login">Đăng xuất</Button>
            
    	</div>
    )}