import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import Nav from '../../component/Nav.js';
import { Carousel, img, Button, Container, Row, Col, Tabs, Tab, Modal } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

export default function Taikhoan(props) {
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const data={role: 'shop', idShop: '1312'}
    let location = useLocation();
  let idShop = location.pathname.replace("/tai-khoan/",'');

    
    return (
        <div>
          <NavBarLogin />
          <Container style = {{maxWidth: '100%', marginTop: '1.5rem', margin: '0.5rem'}}>
              <Row>
                  <Col xs={3}> <div style={{backgroundColor: "#f5f5f5", marginTop: '0rem', paddingRight: 0, paddingLeft: 0}}>
                    <h5 style={{paddingTop: '2rem'}}>
                        <a href={"/dashboard/"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Dashboard</a></h5>
                    <h5 style={{paddingTop: '2.5rem'}}>
                        <a href={"/don-hang/"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Đơn hàng</a></h5>
                    <h5 style={{paddingTop: '2.5rem'}}>
                        <a href={"/san-pham/"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Sản phẩm</a></h5>
                    <h5 style={{paddingTop: '2.5rem', paddingBottom: '1rem'}}>
                        <a href={"/gian-hang/"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Gian hàng</a></h5>
                    <h5 style={{paddingTop: '2.5rem', paddingBottom: '1rem'}}>
                        <a href={"/khach-hang/"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Khách hàng</a></h5>
                    <h5 style={{paddingTop: '2.5rem', paddingBottom: '4.5rem'}}>
                        <a href={"/tai-khoan/"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Tài khoản</a></h5>
                </div> </Col>
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
                    <Button variant="outline-info" size="lg" onClick={handleShow}>Sửa thông tin</Button>
                    <div style={{display: "flex", marginBottom: "2rem", marginLeft: "2rem", marginTop: "2rem"}}>
                      <h5 style={{marginRight: "1rem"}}>Hạn sử dụng:</h5>
                      <h5 style={{marginRight: "3rem"}}>09/12/2022</h5>
                      <Button variant="outline-info" size="sm"  href="/phuong-thuc-thanh-toan">Gia hạn</Button>
                    </div>
                    <Button variant="danger" size="lg">Đăng xuất</Button>
                </Col>
            </Row>
        </Container>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                    <Modal.Title>Thêm sản phẩm</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Thêm sản phẩm</h5>
                            <label>Tên shop</label><br />
                            <input type="text" /><br />

                            <label>Số điện thoại</label><br />
                            <input type="text" /><br /><br />

                            <label>Email</label><br />
                            <input type="email" /><br />

                            <label>Mật khẩu</label><br />
                            <input type="text" /><br />

                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Thoát
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Hoàn tất
                        </Button>
                </Modal.Footer>
        </Modal>
        </div>
    )
}