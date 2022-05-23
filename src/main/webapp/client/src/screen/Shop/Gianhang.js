import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import Nav from '../../component/Nav.js';
import { Carousel, img, Button, Container, Row, Col, Tabs, Tab } from 'react-bootstrap';

export default function Gianhang() {
    return (
        <div>
          <NavBarLogin />
          <Container style = {{maxWidth: '100%', marginTop: '1.5rem', margin: '0.5rem'}}>
              <Row>
                  <Col xs={3}> <Nav /> </Col>
                  <Col xs={9}>
                    <div style={{display: "flex"}}>
                            <h3 style ={{marginRight: "33rem"}}>2 gian hàng</h3>
                            <Button variant="info" style={{marginBottom: "1rem"}}>Thêm gian hàng</Button>
                    </div>
                    <div>
                      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="home" title="Gian hàng">
                          <Container>
                            <Row style={{borderStyle: "ridge", backgroundColor: "#f5f5f5"}}>
                              <Col xs={3}>
                                <h5>Tên gian hàng</h5>
                              </Col>
                              <Col xs={2}>
                                <h5>Email</h5>
                              </Col>
                              <Col xs={2}>
                                <h5>Số điện thoại</h5>
                              </Col>
                              <Col xs={2}>
                                <h5>Chú thích</h5>
                              </Col>
                              <Col xs={2}>
                                <h5>Thao tác</h5>
                              </Col>
                            </Row>

                            <Row style={{borderStyle: "ridge"}}>
                              <Col xs={3}>
                                <p>fsdfsdfs</p>
                              </Col>
                              <Col xs={2}>
                                <p>dasdasodea@gmail.com</p>
                              </Col>
                              <Col xs={2}>
                                <p>09328382382</p>
                              </Col>
                              <Col xs={2}>
                                <p>đâsoafe</p>
                              </Col>
                              <Col xs={2}>
                                <p>Sửa</p>
                                <p>Xóa</p>
                              </Col>
                            </Row>

                          </Container>
                        </Tab>
                      </Tabs>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    )
}