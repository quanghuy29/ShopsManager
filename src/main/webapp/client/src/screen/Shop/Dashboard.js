import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import Nav from '../../component/Nav.js';
import { Carousel, img, Button, Container, Row, Col, Card, Navbar } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

export default function Dashboard(props) {
  const [orders, setOrders] = useState('');
  const [products, setProducts] = useState('');
  useEffect(() => {
    fetch("http://localhost:8080/ShopsManager_war_exploded/order/shop/" + idShop)
    .then(res => res.json())
    .then(data => setOrders(data))

    fetch("http://localhost:8080/ShopsManager_war_exploded/product/shop/" + idShop)
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

      let idShop;
      const dataLocal = localStorage.getItem('user');
      const userLocal  = JSON.parse(dataLocal);
      if (userLocal  && userLocal.role == "shop") { idShop= userLocal.shopId[0]} else {return <Navigate to={"/login"}  />};

  var choXacNhan = 0;
  var dangGiao = 0;
  var hoanThanh = 0;
  var daHuy = 0;


  for (var i=0; i<orders.length; i++) {
    if (orders[i].state == 0) ++choXacNhan;
    if (orders[i].state == 1) ++dangGiao;
    if (orders[i].state == 2) ++hoanThanh;
    if (orders[i].state == 3) ++daHuy;

  }

  var hetHang = 0;
  for (var i=0; i<products.length; i++) {
    if (products[i].available == 0) ++hetHang;
  }


    return (
        <div >
            <NavBarLogin />
          <div style={{width: "100%", height: "100%"}}>
          <Container style = {{maxWidth: '100%', marginTop: '1.5rem', margin: '0.5rem'}}>
            <Row>
                <Col xs={3}> <div style={{paddingBottom: "11rem", backgroundColor: "#f5f5f5", marginTop: '6rem', position: "fixed", paddingLeft: "7rem", paddingRight: "7rem",position: "fixed", zIndex: 999}}>
                    <h5 style={{paddingTop: '2rem'}}>
                        <a href={"/dashboard"} style = {{textDecoration: 'none', color: '#221e1e'}}>Dashboard</a></h5>
                    <h5 style={{paddingTop: '2.5rem'}}>
                        <a href={"/don-hang"} style = {{textDecoration: 'none', color: '#221e1e'}}>Đơn hàng</a></h5>
                    <h5 style={{paddingTop: '2.5rem'}}>
                        <a href={"/san-pham"} style = {{textDecoration: 'none', color: '#221e1e'}}>Sản phẩm</a></h5>
                    <h5 style={{paddingTop: '2.5rem', paddingBottom: '1rem'}}>
                        <a href={"/khach-hang"} style = {{textDecoration: 'none', color: '#221e1e'}}>Khách hàng</a></h5>
                    <h5 style={{paddingTop: '2.5rem', paddingBottom: '4.5rem'}}>
                        <a href={"/tai-khoan"} style = {{textDecoration: 'none', color: '#221e1e'}}>Tài khoản</a></h5>
                </div> </Col>
                <Col>
                    <Row style= {{backgroundColor: "#ffffff", marginTop: "7rem"}}>
                        <Col xs={3}>
                            <h4>{choXacNhan}</h4>
                            <h5>Chờ xác nhận</h5>
                        </Col>
                        <Col xs={3}>
                            <h4>{dangGiao}</h4>
                            <h5>Đang xử lý</h5>
                        </Col>
                        <Col xs={3}>
                            <h4>{hoanThanh}</h4>
                            <h5>Hoàn thành</h5>
                        </Col>
                        <Col xs={3}>
                            <h4>{daHuy}</h4>
                            <h5>Đơn hủy</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <h4>{hetHang}</h4>
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