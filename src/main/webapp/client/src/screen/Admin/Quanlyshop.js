import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLoginAdmin from '../../component/NavBarLoginAdmin.js';
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
    const [shops, setShops] = useState("");
    const [putShop, setPutShop] = useState("");
    const [deleteShop, setDeleteShop] = useState("");

    const [upShopName, setUpShopName] = useState(""); 
    const [upWebsite, setUpwebsite] = useState("");
    const [upEmail, setUpEmail] = useState("");
    const [upPhone, setUpPhone] = useState("");
    const [upPassword, setUpPassword] = useState("");
    const [upState, setUpState] = useState("");

    useEffect(() => {
    fetch("http://localhost:8080/shops")
    .then(res => res.json())
    .then(data => setShops(data))
  },[])

    const data = localStorage.getItem('user');
    const userLocal  = JSON.parse(data);
    if (!userLocal || userLocal.role !== "admin") {return <Navigate to={"/login"}  />};

    const updateShopFunction = () => {
        const updateIt = {
                shopId: putShop.shopId,
                userId: putShop.userId,
                shopName: putShop.shopName,
                website: putShop.website,
                address: putShop.address,
                detail: putShop.detail,
                phone: putShop.phone,
                email: putShop.email,
                password: putShop.password,
                state: putShop.state,
                createdDay: putShop.createdDay,
                lastRegisterDay: putShop.lastRegisterDay,
                expirationDate: putShop.expirationDate
                }

        if (upShopName) {updateIt.shopName = upShopName}
        if (upWebsite) {updateIt.website = upWebsite}
        if (upEmail) {updateIt.email = upEmail}
        if (upPhone) {updateIt.phone = upPhone}
        if (upPassword) {updateIt.password = upPassword}
        if (upState) {updateIt.state = upState}

        console.log(updateIt);
        axios.put('http://localhost:8080/shops', updateIt)
            .then(res => console.log(res))
        window.location.reload();
    }

    const deleteShopFunction = () => {
        const deleteIt = {shopId: deleteShop.shopId}
        axios.delete('http://localhost:8080/shops', deleteIt)
            .then(res => console.log(res))
        window.location.reload();
    }

    console.log(shops)

    return (
        <div >
          <NavBarLoginAdmin />
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
                                <h3 style ={{marginRight: "33rem"}}>{shops.length} người dùng</h3>
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
                                    { shops && shops.map((shop) => {return (
                                    <Row  style={{borderStyle: "ridge"}}>
                                        <Col xs={2} style={{textAlign: "left", whiteSpace: "nowrap", width: "10rem", overflow: "hidden", textOverflow: "ellipsis"}}>{shop.shopName}</Col>
                                        <Col xs={2} style={{textAlign: "left", whiteSpace: "nowrap", width: "10rem", overflow: "hidden", textOverflow: "ellipsis"}}>{shop.email}</Col>
                                        <Col xs={2} style={{textAlign: "left"}}>{shop.phone}</Col>
                                        <Col xs={2} style={{textAlign: "left"}}>{shop.state}</Col>
                                        <Col xs={2} style={{textAlign: "left"}}>{shop.expirationDate}</Col>
                                        <Col xs={2} style={{textAlign: "left", alignItem: "right"}}>
                                            <h7  onClick={() => {handleShow2(); setPutShop(shop)}}> Sửa</h7>
                                            <h7 onClick={() => {setDeleteShop(shop); deleteShopFunction()}}> Xóa</h7>
                                        </Col>
                                    </Row>)})}

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
                            <label>Tên người dùng</label><br />
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
                            <input type="text" placeholder={putShop.shopName} onChange={(event) => {setUpShopName(event.target.value)}}/><br />

                            <label>Website</label><br />
                            <input type="text" placeholder={putShop.website} onChange={(event) => {setUpwebsite(event.target.value)}}/><br />

                            <label>Email</label><br />
                            <input type="text" placeholder={putShop.email} onChange={(event) => {setUpEmail(event.target.value)}}/><br />

                            <label>Số điện thoại</label><br />
                            <input type="number" placeholder={putShop.phone} onChange={(event) => {setUpPhone(event.target.value)}}/><br />

                            <label>Detail</label><br />
                            <input type="text" placeholder={putShop.detail} onChange={(event) => {setUpShopName(event.target.value)}}/><br />

                            <label>Password</label><br />
                            <input type="password" placeholder={putShop.password} onChange={(event) => {setUpPassword(event.target.value)}}/><br />
                            
                            <label>Trạng thái</label><br />
                            <input type="text" placeholder={putShop.state} onChange={(event) => {setUpState(event.target.value)}}/><br />

                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose2}>
                            Thoát
                        </Button>
                        <Button variant="primary" onClick={() => {handleClose2(); updateShopFunction()}}>
                            Chỉnh sửa người dùng
                        </Button>
                </Modal.Footer>
        </Modal>
        </div>
    )
}