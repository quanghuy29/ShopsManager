import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import { Carousel, img, Button, Container, Row, Col, Card, Navbar } from 'react-bootstrap';

export default function Dangkydichvu() {
    return (
        <div>
        <div>
            <Navbar bg="light" expand="lg">
              <Container fluid>
                <Navbar.Brand href="/dashboard" style = {{marginLeft: "40px", fontSize: '2.3rem', fontWeight: 700}}>OmniChannel</Navbar.Brand>
                <Navbar.Collapse id="navbarScroll" style={{marginLeft: '34rem'}} >
                </Navbar.Collapse>
              </Container>
          </Navbar>
        </div>
    
        <Container style = {{maxWidth: '100%', marginTop: '1.5rem', margin: '0.5rem'}}>
            <Row>
                <h2>Đăng ký dịch vụ</h2>
            </Row>
            <Row>
                <Col xs={4}>
                </Col>
                <Col xs={4}>
                    <Card>
                      <Card.Header>Gói 1 tháng</Card.Header>
                      <Card.Body>
                        <Card.Title>199.000đ/ tháng</Card.Title>
                        <Card.Text>
                          <Row>
                            <Col xs={6}>
                                <p>CRM và Marketing Automation</p>
                                <p>1 cửa hàng</p>
                                <p>Kết nối 40 gian hàng sàn TMĐT</p>
                                <p>Quản lý bán hàng 10 Fanpage</p>
                                <p>Tích hợp đối tác vận chuyển</p>
                            </Col>
                            <Col xs={6}>
                                <p>Quản lý đơn hàng đa kênh</p>
                                <p>Quản lý hàng hóa tập trung</p>
                                <p>Quản lý kho nâng cao</p>
                                <p>Quản lý kho nâng cao</p>
                                <p>Bán hàng trên Instagram</p>
                            </Col>
                          </Row>
                        </Card.Text>
                        <Button variant="primary" href="/phuong-thuc-thanh-toan">Tiếp tục</Button>
                      </Card.Body>
                    </Card>
                </Col>
                <Col xs={4}>
                </Col>
            </Row>
        </Container>
        </div>
    )
}