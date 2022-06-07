import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import Nav from '../../component/Nav.js';
import { Carousel, img, Button, Container, Row, Col, Tabs, Tab, Modal } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

export default function Gianhang(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    let location = useLocation();
    const [shop, setShop] = useState('');

    useEffect(() => {
      fetch("http://localhost:8080/shop")
      .then(res => res.json())
      .then(data => setShop(data))
    },[])
    let idShop = location.pathname.replace("gian-hang/",'');

    
    return (
        <div>
          <NavBarLogin />
          <Container style = {{maxWidth: '100%', marginTop: '1.5rem', margin: '0.5rem'}}>
              <Row>
                  <Col xs={3}> <div style={{backgroundColor: "#f5f5f5", marginTop: '0rem', paddingRight: 0, paddingLeft: 0}}>
                    <h5 style={{paddingTop: '2rem'}}>
                        <a href={"/dashboard"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Dashboard</a></h5>
                    <h5 style={{paddingTop: '2.5rem'}}>
                        <a href={"/don-hang"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Đơn hàng</a></h5>
                    <h5 style={{paddingTop: '2.5rem'}}>
                        <a href={"/san-pham"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Sản phẩm</a></h5>
                    <h5 style={{paddingTop: '2.5rem', paddingBottom: '1rem'}}>
                        <a href={"/gian-hang"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Gian hàng</a></h5>
                    <h5 style={{paddingTop: '2.5rem', paddingBottom: '1rem'}}>
                        <a href={"/khach-hang"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Khách hàng</a></h5>
                    <h5 style={{paddingTop: '2.5rem', paddingBottom: '4.5rem'}}>
                        <a href={"/tai-khoan"+ idShop} style = {{textDecoration: 'none', color: '#221e1e'}}>Tài khoản</a></h5>
                </div> </Col>
                  <Col xs={9}>
                    <div style={{display: "flex"}}>
                            <h3 style ={{marginRight: "33rem"}}>2 gian hàng</h3>
                            <Button variant="info" style={{marginBottom: "1rem"}} onClick={handleShow}>Thêm gian hàng</Button>
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

                            <div>
                                {shop && shop.map((s, i) =>{
                                return(
                                  <Row style={{borderStyle: "ridge"}}>
                                  <Col xs={3}>
                                    <p>{s.shopName}</p>
                                  </Col>
                                  <Col xs={2}>
                                    <p>{s.email}</p>
                                  </Col>
                                  <Col xs={2}>
                                    <p>{s.phone}</p>
                                  </Col>
                                  <Col xs={2}>
                                    <p>chú thích</p>
                                  </Col>
                                  <Col xs={2}>
                                    <Button variant="info" size="sm" style={{marginRight: "0.3rem"}}>Xem</Button>
                                    <Button variant="outline-info" size="sm" >Sửa</Button>
                                    <Button variant="info" size="sm" style={{marginLeft: "0.3rem"}}>Xóa</Button>
                                  </Col>
                                </Row>
                                )})}
                                </div>

                          </Container>
                        </Tab>
                      </Tabs>
                    </div>
                </Col>
            </Row>
        </Container>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                    <Modal.Title>Thêm gian hàng</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Thêm gian hàng</h5>
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
                            Thêm gian hàng
                        </Button>
                </Modal.Footer>
        </Modal>
        <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton>
                    <Modal.Title>Chỉnh sửa gian hàng</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Chỉnh sửa gian hàng</h5>
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
                            Chỉnh sửa gian hàng
                        </Button>
                </Modal.Footer>
              </Modal>

              <Modal show={show3} onHide={handleClose3}>
            <Modal.Header closeButton>
                    <Modal.Title>Thêm gian hàng</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Thêm sản phẩm</h5>
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
                        <Button variant="secondary" onClick={handleClose3}>
                            Thoát
                        </Button>
                </Modal.Footer>
              </Modal>
        </div>
    )
}