import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import Nav from '../../component/Nav.js';
import { Carousel, img, Button, Container, Row, Col, Tabs, Tab, Card } from 'react-bootstrap';

export default function Sanpham() {
    return (
        <div>
          <NavBarLogin />
          <Container style = {{maxWidth: '100%', marginTop: '1.5rem', margin: '0.5rem'}}>
              <Row>
                  <Col xs={3}> <Nav /> </Col>
                  <Col xs={9}>
                    <Tabs defaultActiveKey="tatCa" id="uncontrolled-tab-example" className="mb-3">
                      <Tab eventKey="tatCa" title="Tất cả">
                        <div style={{display: "flex"}}>
                            <h3 style ={{marginRight: "33rem"}}>500 sản phẩm</h3>
                            <Button variant="info" style={{marginBottom: "1rem"}}>Thêm sản phẩm mới</Button>
                        </div>
                        <div>
                          <Row>
                            <Card style={{ width: '11.5rem', height: "18rem", marginRight: "0.8rem", marginBottom: "1rem"}} >
                              <Card.Img variant="top" src="tn1.png" />
                              <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <div style={{display: "flex"}}>
                                  <h9 style={{textAlign: "left", marginRight: "0.8rem"}}>100.000đ</h9>
                                  <h9 style={{textAlign: "right"}}>Stock: 500</h9>
                                </div>
                                <Button variant="outline-info" size="sm">Sửa</Button>
                              </Card.Body>
                            </Card>

                            

                          </Row>
                        </div>
                      </Tab>
                      <Tab eventKey="dangHoatDong" title="Đang hoạt động">
                      </Tab>
                      <Tab eventKey="hetHang" title="Hết hàng">
                      </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
        </div>
    )
}