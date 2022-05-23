import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import Nav from '../../component/Nav.js';
import { Carousel, img, Button, Container, Row, Col, Tabs, Tab } from 'react-bootstrap';

export default function Taikhoan() {
    return (
        <div>
          <NavBarLogin />
          <Container style = {{maxWidth: '100%', marginTop: '1.5rem', margin: '0.5rem'}}>
              <Row>
                  <Col xs={3}> <Nav /> </Col>
                  <Col xs={9}>
                    <h2>Tài khoản</h2>
                    <div style={{display: "flex", marginBottom: "2rem", marginLeft: "2rem"}}>
                      <h5 style={{marginRight: "1rem"}}>Shop:</h5>
                      <h5>Camsamita</h5>
                    </div>
                    <div style={{display: "flex", marginBottom: "2rem", marginLeft: "2rem"}}>
                      <h5 style={{marginRight: "1rem"}}>Email:</h5>
                      <h5>fdisisd@gmail.com</h5>
                    </div>
                    <div style={{display: "flex", marginBottom: "2rem", marginLeft: "2rem"}}>
                      <h5 style={{marginRight: "1rem"}}>Số điện thoại:</h5>
                      <h5>09821832332</h5>
                    </div>
                      <div style={{display: "flex", marginBottom: "2rem", marginLeft: "2rem"}}>
                      <h5 style={{marginRight: "1rem"}}>Mật khẩu:</h5>
                      <h5>********</h5>
                    </div>
                    <Button variant="outline-info" size="lg">Sửa thông tin</Button>
                    <div style={{display: "flex", marginBottom: "2rem", marginLeft: "2rem", marginTop: "2rem"}}>
                      <h5 style={{marginRight: "1rem"}}>Hạn sử dụng:</h5>
                      <h5 style={{marginRight: "3rem"}}>09/12/2022</h5>
                      <Button variant="outline-info" size="sm">Gia hạn</Button>
                    </div>
                    <Button variant="danger" size="lg">Đăng xuất</Button>
                </Col>
            </Row>
        </Container>
        </div>
    )
}