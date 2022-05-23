import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import Nav from '../../component/Nav.js';
import { Carousel, img, Button, Container, Row, Col, Card } from 'react-bootstrap';

export default function Dashboard() {
    return (
        <div >
          <NavBarLogin />
          <div style={{width: "100%", height: "100%"}}>
          <Container style = {{maxWidth: '100%', marginTop: '1.5rem', margin: '0.5rem'}}>
            <Row>
                <Col xs={3}>
                    <Nav />
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