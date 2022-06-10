import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import Navadmin from '../../component/Navadmin.js';
import { Carousel, img, Button, Container, Row, Col, Card, Tabs, Tab, Modal } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

export default function Quanlydichvu(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let location = useLocation();
    if(props.dataApp.role !== "admin" && !props.dataApp.idShop) {return <Navigate to="/login" state={{ from: location }} replace />}

    
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
                          <Tab eventKey="tatCa" title="Chờ xác nhận">
                            <div style={{display: "flex"}}>
                                <h3 style ={{marginRight: "33rem"}}>5 đơn hàng</h3>
                            </div>
                            <div>
                              <Row>
                                <Card style={{ width: '13rem' }}>
                                  <Card.Body>
                                    <Card.Title>Loại hình: Gia hạn</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Shop: alibaba</Card.Subtitle>
                                    <Card.Text>
                                      <h6>Thời gian gia hạn: 4 tháng</h6>
                                      <h6>Tổng thanh toán: 4.000.000đ</h6>
                                    </Card.Text>
                                    <Button variant="outline-info" size="sm" style={{margin: "0.1rem"}} onClick={handleShow}>Xem chi tiết</Button>
                                    <Button variant="outline-success" size="sm" style={{marginRight: "0.1rem"}}>Xác nhận</Button>
                                    <Button variant="outline-danger" size="sm">Hủy</Button>
                                  </Card.Body>
                                </Card>

                                

                              </Row>
                            </div>
                          </Tab>
                          <Tab eventKey="hoanThanh" title="Đã hoàn thành">

                          </Tab>
                          <Tab eventKey="huy" title="Hủy">

                          </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                    <Modal.Title>Xem chi tiết đơn hàng</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Đơn hàng</h5>
                            <label>Tên shop</label><br />
                            <h6>111</h6>

                            <label>Website</label><br />
                            <h6>111</h6>

                            <label>Email</label><br />
                            <h6>111</h6>

                            <label>Số điện thoại</label><br />
                            <h6>111</h6>
                            
                            <label>Mật khẩu</label><br />
                            <h6>111</h6>
                            
                            <label>Thông tin thêm</label><br />
                            <h6>111</h6>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Thoát
                        </Button>
                </Modal.Footer>
        </Modal>
        </div>
    )
}