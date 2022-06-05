import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import Navadmin from '../../component/Navadmin.js';
import { Carousel, img, Button, Container, Row, Col, Card, Tabs, Tab, Modal } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

export default function Quanlyshop(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    
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
                      <Tab eventKey="tatCa" title="Tất cả">
                            <div style={{display: "flex"}}>
                                <h3 style ={{marginRight: "33rem"}}>5 người dùng</h3>
                                <Button variant="info" style ={{marginBottom: "1rem"}} onClick={handleShow}>Thêm người dùng</Button>
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
                                            <h7  onClick={handleShow2}> Sửa</h7>
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
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                    <Modal.Title>Thêm người dùng</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Thêm người dùng</h5>
                            <label>Tên shop</label><br />
                            <input type="text" /><br />

                            <label>Website</label><br />
                            <input type="text" /><br />

                            <label>Email</label><br />
                            <input type="text" /><br />

                            <label>Số điện thoại</label><br />
                            <input type="number" /><br />
                            
                            <label>Mật khẩu</label><br />
                            <input type="password" /><br />
                            
                            <label>Thông tin thêm</label><br />
                            <input type="text" /><br />

                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Thoát
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Thêm người dùng
                        </Button>
                </Modal.Footer>
        </Modal>

        <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton>
                    <Modal.Title>Chỉnh sửa người dùng</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Chỉnh sửa người dùng</h5>
                            <label>Tên shop</label><br />
                            <input type="text" /><br />

                            <label>Website</label><br />
                            <input type="text" /><br />

                            <label>Email</label><br />
                            <input type="text" /><br />

                            <label>Số điện thoại</label><br />
                            <input type="number" /><br />
                            
                            <label>Mật khẩu</label><br />
                            <input type="password" /><br />
                            
                            <label>Thông tin thêm</label><br />
                            <input type="text" /><br />

                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose2}>
                            Thoát
                        </Button>
                        <Button variant="primary" onClick={handleClose2}>
                            Chỉnh sửa người dùng
                        </Button>
                </Modal.Footer>
        </Modal>
        </div>
    )
}