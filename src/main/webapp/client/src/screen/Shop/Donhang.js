import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import Nav from '../../component/Nav.js';
import { Carousel, img, Button, Container, Row, Col, Tabs, Tab } from 'react-bootstrap';

export default function Donhang() {
    return (
        <div>
          <NavBarLogin />
          <Container style = {{maxWidth: '100%', marginTop: '1.5rem', margin: '0.5rem'}}>
              <Row>
                  <Col xs={3}><Nav /></Col>
                  <Col xs={9}>
                    <Tabs defaultActiveKey="tatCa" id="uncontrolled-tab-example" className="mb-3">
                      <Tab eventKey="tatCa" title="Tất cả">
                            <div style={{display: "flex"}}>
                                <h3 style ={{marginRight: "33rem"}}>500 Đơn hàng</h3>
                                <Button variant="info" style ={{marginBottom: "1rem"}}>Thêm đơn hàng mới</Button>
                            </div>
                            <Container>
                                <Row style={{backgroundColor: "#f5f5f5", padding: "0.5rem", paddingBottom: "1rem", paddingTop: "1rem"}}>
                                    <Col xs={4} style={{textAlign: "left"}}>Sản phẩm</Col>
                                    <Col xs={2} style={{textAlign: "left"}}>Tổng đơn hàng</Col>
                                    <Col xs={2} style={{textAlign: "left"}}>Trạng thái</Col>
                                    <Col xs={2} style={{textAlign: "left"}}>Vận chuyển</Col>
                                    <Col xs={2} style={{textAlign: "left"}}>Thao tác</Col>
                                </Row>
                                <div>
                                    <Row style={{borderStyle: "ridge", borderBottom: "none", backgroundColor: "#f5f5f5", marginTop: "0.5rem"}}>
                                        <p style={{textAlign: "left", marginBottom: "0.1rem"}}>thô nì</p>
                                    </Row>
                                    <Row  style={{borderStyle: "ridge"}}>
                                        <Col xs={4} style={{textAlign: "left"}}>
                                            <div style={{display: "flex"}}>
                                            <img src= "tn1.png" style={{width: "4rem", height: "4rem"}}/>
                                            <h6 style={{marginTop: "1rem"}}>váy yếm.....</h6>
                                            </div>
                                        </Col>
                                        <Col xs={2} style={{textAlign: "left"}}>
                                            <p style={{marginTop: "1rem"}}>đ105.000</p>
                                        </Col>
                                        <Col xs={2} style={{textAlign: "left"}}>
                                            <p style={{marginTop: "1rem"}}>Đã hủy</p>
                                        </Col>
                                        <Col xs={2} style={{textAlign: "left"}}>
                                            <p style={{marginTop: "1rem"}}>Ninjavan</p>
                                        </Col>
                                        <Col xs={2} style={{textAlign: "left"}}>
                                            <p style={{marginTop: "1rem"}}><a href="#">Xem chi tiết</a></p>
                                        </Col>
                                    </Row>

                                </div>


                            </Container>
                      </Tab>
                      <Tab eventKey="choXacNhan" title="Chờ xác nhận">
                      </Tab>
                      <Tab eventKey="choLayHang" title="Chờ lấy hàng">
                      </Tab>
                      <Tab eventKey="dangGiao" title="Đang giao">
                      </Tab>
                      <Tab eventKey="traHang" title="Trả hàng/ hoàn tiền">
                      </Tab>
                      <Tab eventKey="huy" title="Đã hủy">
                      </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
        </div>
    )
}