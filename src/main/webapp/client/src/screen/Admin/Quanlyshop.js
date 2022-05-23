import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import Navadmin from '../../component/Navadmin.js';
import { Carousel, img, Button, Container, Row, Col, Card, Tabs, Tab } from 'react-bootstrap';

export default function Quanlyshop() {
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
                        <Tabs defaultActiveKey="tatCa" id="uncontrolled-tab-example" className="mb-3">
                      <Tab eventKey="tatCa" title="Tất cả">
                            <div style={{display: "flex"}}>
                                <h3 style ={{marginRight: "33rem"}}>5 shop</h3>
                                <Button variant="info" style ={{marginBottom: "1rem"}}>Thêm shop</Button>
                            </div>
                            <Container>
                                <Row style={{backgroundColor: "#f5f5f5", padding: "0.5rem", paddingBottom: "1rem", paddingTop: "1rem", marginBottom: "1rem"}}>
                                    <Col xs={2} style={{textAlign: "left"}}>Tên shop</Col>
                                    <Col xs={2} style={{textAlign: "left"}}>Email</Col>
                                    <Col xs={2} style={{textAlign: "left"}}>Số điện thoại</Col>
                                    <Col xs={2} style={{textAlign: "left"}}>Trạng thái</Col>
                                    <Col xs={2} style={{textAlign: "left"}}>Hạn sử dụng</Col>
                                    <Col xs={2} style={{textAlign: "left"}}>Thao tác</Col>
                                </Row>
                                <div>
                                    <Row  style={{borderStyle: "ridge"}}>
                                        <Col xs={2} style={{textAlign: "left"}}>Alibaba</Col>
                                        <Col xs={2} style={{textAlign: "left"}}>sdaoas@gmail.com</Col>
                                        <Col xs={2} style={{textAlign: "left"}}>098327434</Col>
                                        <Col xs={2} style={{textAlign: "left"}}>Đang hoạt động</Col>
                                        <Col xs={2} style={{textAlign: "left"}}>21/2/2022</Col>
                                        <Col xs={2} style={{textAlign: "left"}}>
                                            <h7> Sửa</h7>
                                            <h7> Xóa</h7>
                                        </Col>
                                    </Row>

                                </div>


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