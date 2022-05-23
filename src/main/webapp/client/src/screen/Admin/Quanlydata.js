import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import Navadmin from '../../component/Navadmin.js';
import { Carousel, img, Button, Container, Row, Col, Card, Tabs, Tab } from 'react-bootstrap';

export default function Quanlydata() {
    return (
        <div >
          <NavBarLogin />
          <div style={{width: "100%", height: "100%"}}>
            <Container style = {{maxWidth: '100%', marginTop: '1.5rem', margin: '0.5rem'}}>
                <Row>
                    <Col xs={3}>
                        <Navadmin />
                    </Col>
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
        </div>
    )
}