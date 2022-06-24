import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLoginAdmin from '../../component/NavBarLoginAdmin.js';
import Navadmin from '../../component/Navadmin.js';
import { Carousel, img, Button, Container, Row, Col, Card, Tabs, Tab, Modal } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

export default function Quanlydichvu(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let location = useLocation();
    const [orders, setOrders] = useState("");
    const [state, setState] = useState("");
    const [stateOrder, setStateOrder] = useState("");

    useEffect(() => {
    fetch("http://localhost:8080/ShopsManager_war_exploded/register-order")
    .then(res => res.json())
    .then(data => setOrders(data.listResult))
  },[])

    const data = localStorage.getItem('user');
    const userLocal  = JSON.parse(data);
    if (!userLocal || userLocal.role !== "admin") {return <Navigate to={"/login"}  />};

    const getState = (a) => {if(a == 0) {return "Đang chờ xác nhận"} else if(a == 1) {return "Đã xác nhận"} else {return "Đã hủy"}}

    const putOrder = (order) => {
        const putIt = {
          shopId: order.shopId, 
          pay_money: order.pay_money, 
          pay_date: order.pay_date,
          state: state
        }
        axios.put('http://localhost:8080/ShopsManager_war_exploded/register-order/'+ order.id, putIt)
            .then(res => console.log(res))
        // window.location.reload();
    }
    console.log(stateOrder);
    return (
        <div >
          <NavBarLoginAdmin />
          <div style={{width: "100%", height: "100%"}}>
            <Container style = {{maxWidth: '100%', marginTop: '1.5rem', margin: '0.5rem'}}>
                <Row>
                    <Col xs={3}>
                        <Navadmin />
                    </Col>
                    <Col xs={9} style={{marginTop: "6rem"}}>
                        <Tabs defaultActiveKey="tatCa" id="uncontrolled-tab-example" className="mb-3">
                          <Tab eventKey="tatCa" title="Tất cả">
                            <div style={{display: "flex"}}>
                                <h3 style ={{marginRight: "33rem"}}>{orders.length} đơn hàng</h3>
                            </div>
                            <div>
                              <Row>
                              { orders && orders.map((order) => {return(
                                <Card style={{ width: '13rem', marginRight: "1rem" }}>
                                  <Card.Body>
                                    <Card.Title>Trạng thái: {getState(order.state)}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Shop: {order.shopId}</Card.Subtitle>
                                    <Card.Text>
                                      <h6>Tổng thanh toán: {order.pay_money}</h6>
                                    </Card.Text>
                                    <Button variant="outline-success" size="sm" style={{marginRight: "0.1rem"}} onClick={() => {setState(1); setStateOrder(order); putOrder(order)}}>Xác nhận</Button>
                                    <Button variant="outline-danger" size="sm" onClick={() => {setState(2); setStateOrder(order); putOrder(order)}}>Hủy</Button>
                                  </Card.Body>
                                </Card>)})}

                                

                              </Row>
                            </div>
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