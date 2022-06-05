import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import Nav from '../../component/Nav.js';
import { Carousel, img, Button, Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

export default function Khachhang(props) {
    let location = useLocation();
  let idShop = location.pathname.replace("khach-hang/",'');
    return (
        <div>
          <NavBarLogin />
          <Container style = {{maxWidth: '100%', marginTop: '1.5rem', margin: '0.5rem'}}>
              <Row>
                  <Col xs={3}> <div style={{backgroundColor: "#f5f5f5", marginTop: '0rem', paddingRight: 0, paddingLeft: 0}}>
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
                </div></Col>
                  <Col xs={9}>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                      <Tab eventKey="profile" title="Khách hàng">
                        <Container>
                          <Row style={{borderStyle: "ridge", backgroundColor: "#f5f5f5"}}>
                            <Col xs={2}>
                              <h5>Tài khoản</h5>
                            </Col>
                            <Col xs={2}>
                              <h5>Họ và tên</h5>
                            </Col>
                            <Col xs={2}>
                              <h5>Số điện thoại</h5>
                            </Col>
                            <Col xs={2}>
                              <h5>Địa chỉ</h5>
                            </Col>
                            <Col xs={2}>
                              <h5>Ghi chú</h5>
                            </Col>
                            <Col xs={2}>
                              <h5>Thao tác</h5>
                            </Col>
                          </Row>

                          <Row>
                            <Col xs={2}>
                              <p>ffdfd</p>
                            </Col>
                            <Col xs={2}>
                              <p>Tào thị lò</p>
                            </Col>
                            <Col xs={2}>
                              <p>039238233</p>
                            </Col>
                            <Col xs={2}>
                              <p>daosa, Hà Nội</p>
                            </Col>
                            <Col xs={2}>
                              <p>Boom hàng</p>
                            </Col>
                            <Col xs={2}>
                              <p>Xóa</p>
                            </Col>
                          </Row>
                        </Container>
                      </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
        </div>
    )
}