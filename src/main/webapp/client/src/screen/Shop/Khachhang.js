import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import Nav from '../../component/Nav.js';
import { Carousel, img, Button, Container, Row, Col, Tabs, Tab, Modal } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

export default function Khachhang(props) {

    let location = useLocation();
  let idShop = location.pathname.replace("/khach-hang/",'');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);


  const [customers, setCustomers] = useState('');

  const [newFName, setNewFName] = useState('');
  const [newLName, setNewLName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [newEmail, setNewEmail] = useState('');

  useEffect(() => {
    fetch("http://localhost:8080/customers")
    .then(res => res.json())
    .then(data => setCustomers(data))
  },[])

  const [deleteCustomer, setDeleteCustomer] = useState('');

const postCustomertFunction = () => {
    const postIt = {
        firstName: newFName,
        lastName: newLName,
        address: newAddress,
        phone: newPhone,
        email: newEmail
        }

    axios.post('http://localhost:8080/customers', postIt)
        .then(res => console.log(res))
  }

const deleteCustomertFunction = () => {
    axios.delete('http://localhost:8080/customers/'+ deleteCustomer, {customerId: deleteCustomer})
        .then(res => console.log(res))
  }


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
                </div></Col>
                  <Col xs={9}>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                      <Tab eventKey="profile" title="Khách hàng">
                        <div style={{display: "flex"}}>
                                <h3 style ={{marginRight: "33rem"}}>{customers.length} Khách hàng</h3>
                                <Button variant="info" style ={{marginBottom: "1rem"}} onClick={handleShow}>Thêm khách hàng mới</Button>
                            </div>
                        <Container>
                          <Row style={{borderStyle: "ridge", backgroundColor: "#f5f5f5"}}>
                            <Col xs={1} style={{textAlign: "left"}}>Tài khoản</Col>
                            <Col xs={2} style={{textAlign: "left"}}>Họ và tên</Col>
                            <Col xs={2} style={{textAlign: "left"}}>Số điện thoại</Col>
                            <Col xs={4} style={{textAlign: "left"}}>Địa chỉ</Col>
                            <Col xs={2} style={{textAlign: "left"}}>Email</Col>
                            <Col xs={1} style={{textAlign: "left"}}>Thao tác</Col>
                          </Row>

                          <div>
                                {customers && customers.map((cus, i) =>{
                                return(
                                        <Row style={{borderStyle: "ridge", backgroundColor: "#f5f5f5", marginTop: "0rem"}}>                   
                                            <Col xs={1} style={{textAlign: "center"}}>
                                                <p style={{marginTop: "1rem"}}>{cus.customerId}</p>
                                            </Col>
                                            <Col xs={2} style={{textAlign: "left"}}>
                                                <p style={{marginTop: "1rem"}}>{cus.firstName + " " + cus.lastName}</p>
                                            </Col>
                                            <Col xs={2} style={{textAlign: "left"}}>
                                                <p style={{marginTop: "1rem"}}>{cus.phone}</p>
                                            </Col>
                                            <Col xs={4} style={{textAlign: "left"}}>
                                                <p style={{marginTop: "1rem"}}>{cus.address}</p>
                                            </Col>
                                            <Col xs={2} style={{textAlign: "left"}}>
                                                <p style={{marginTop: "1rem"}}>{cus.email}</p>
                                            </Col>
                                            <Col xs={1} style={{textAlign: "left"}}>
                                            <Button variant="info" size="sm" style={{marginTop: "1rem"}} onClick={() => {setDeleteCustomer(cus.customerId); deleteCustomertFunction()}}>Xóa</Button>
                                            </Col>
                                    </Row>
                                )})}

                                </div>
                        </Container>
                      </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                    <Modal.Title>Thêm khách hàng</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <label>Họ và tên đệm</label><br />
                            <input type="text" onChange={(event) => {setNewFName(event.target.value)}} required/><br />

                             <label>Tên</label><br />
                            <input type="text" onChange={(event) => {setNewLName(event.target.value)}} required/><br />
                            <label>Số điện thoại</label><br />
                            <input type="number" onChange={(event) => {setNewPhone(event.target.value)}} required/><br />

                             <label>Email</label><br />
                            <input type="email" onChange={(event) => {setNewEmail(event.target.value)}} required/><br />
                            <label>Địa chỉ</label><br />
                            <input type="text" onChange={(event) => {setNewAddress(event.target.value)}} required/><br /><br />
                         </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Thoát
                        </Button>
                        <Button variant="primary" onClick={() => {handleClose(); postCustomertFunction()}}>
                            Thêm khách hàng
                        </Button>
                </Modal.Footer>
        </Modal>
        </div>
    )
}