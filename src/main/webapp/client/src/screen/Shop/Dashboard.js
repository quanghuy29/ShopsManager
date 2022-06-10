import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import Nav from '../../component/Nav.js';
import { Carousel, img, Button, Container, Row, Col, Card, Navbar } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

export default function Dashboard(props) {
      console.log(props.dataApp)
  let location = useLocation();
  let idShop = location.pathname.replace("dashboard/",'');

  const [orders, setOrders] = useState('');
  const [products, setProducts] = useState('');
  useEffect(() => {
    fetch("http://localhost:8080/orders")
    .then(res => res.json())
    .then(data => setOrders(data))

    fetch("http://localhost:8080/products")
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

  var choXacNhan = 0;
  var choLayHang = 0;


    return (
        <div >
            <NavBarLogin />
          <div style={{width: "100%", height: "100%"}}>
          <Container style = {{maxWidth: '100%', marginTop: '1.5rem', margin: '0.5rem'}}>
            <Row>
                <Col xs={3}>
                    <div style={{backgroundColor: "#f5f5f5", marginTop: '0rem', paddingRight: 0, paddingLeft: 0}}>
                    <h5 style={{paddingTop: '2rem'}}>
                        <a href={"/dashboard"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Dashboard</a></h5>
                    <h5 style={{paddingTop: '2.5rem'}}>
                        <a href={"/don-hang"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Đơn hàng</a></h5>
                    <h5 style={{paddingTop: '2.5rem'}}>
                        <a href={"/san-pham"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Sản phẩm</a></h5>
                    <h5 style={{paddingTop: '2.5rem', paddingBottom: '1rem'}}>
                        <a href={"/gian-hang"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Gian hàng</a></h5>
                    <h5 style={{paddingTop: '2.5rem', paddingBottom: '1rem'}}>
                        <a href={"/khach-hang"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Khách hàng</a></h5>
                    <h5 style={{paddingTop: '2.5rem', paddingBottom: '4.5rem'}}>
                        <a href={"/tai-khoan"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Tài khoản</a></h5>
                </div>
                </Col>
                <Col>
                    <Row style= {{backgroundColor: "#ffffff"}}>
                        <Col xs={3}>
                            <h4>5</h4>
                            <h5>Chờ xác nhận</h5>
                        </Col>
                        <Col xs={3}>
                            <h4>5</h4>
                            <h5>Chờ lấy hàng</h5>
                        </Col>
                        <Col xs={3}>
                            <h4>5</h4>
                            <h5>Đang xử lý</h5>
                        </Col>
                        <Col xs={3}>
                            <h4>5</h4>
                            <h5>Đơn hủy</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <h4>5</h4>
                            <h5>Trả hàng hoàn tiền</h5>
                        </Col>
                        <Col xs={3}>
                            <h4>5</h4>
                            <h5>Sản phẩm hết hàng</h5>
                        </Col>
                        <Col xs={3}>
                        </Col>
                        <Col xs={3}>
                        </Col>
                    </Row>
                </Col>
            </Row>
          </Container>
          </div>
        </div>
    )
}