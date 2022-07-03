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
    const [upDetail, setUpDetail] = useState(""); 
    const [upPhone, setUpPhone] = useState("");
    const [upState, setUpState] = useState("");

    useEffect(() => {
    fetch("http://localhost:8080/ShopsManager_war_exploded/shop")
    .then(res => res.json())
    .then(data => setShops(data))
  },[])

    const data = localStorage.getItem('user');
    const userLocal  = JSON.parse(data);
    if (!userLocal || userLocal.role !== "admin") {return <Navigate to={"/login"}  />};

    var date  = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var dt = date.getDate();
   
    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }
   
    const today = (year+'-' + month + '-'+dt);

    const updateShopFunction = () => {
        const updateIt = {
                userID: putShop.userID,
                shopName: putShop.shopName,
                website: putShop.website,
                address: putShop.address,
                detail: putShop.detail,
                phone: putShop.phone,
                email: putShop.email,
                state: putShop.state,
                createdDay: today,
                lastRegisterDay: putShop.lastRegisterDay,
                expirationDate: putShop.expirationDate
                }
//   {
//     "userID": 1,
//     "shopName": "Quần áo mùa đông",
//     "website": "quanaomuadong.com.vn",
//     "address": "Đông Anh, Hà Nội",
//     "detail": "Shop chính hãng",
//     "phone": "0398494562",
//     "email": "quanaomuadong@gmail.com",
//     "state": 1,
//     "createdDay": 1670778000000,
//     "lastRegisterDay": 1670778000000,
//     "expirationDay": null
// }

        if (upShopName) {updateIt.shopName = upShopName}
        if (upWebsite) {updateIt.website = upWebsite}
        if (upEmail) {updateIt.email = upEmail}
        if (upDetail) {updateIt.detail = upDetail}
        if (upPhone) {updateIt.phone = upPhone}
        if (upState) {updateIt.state = upState}

        console.log(updateIt);
        axios.put('http://localhost:8080/ShopsManager_war_exploded/shop/' + putShop.shopId, updateIt)
            .then(res => console.log(res))
        window.location.reload();
    }

    const deleteShopFunction = (ID) => {
        const deleteIt = {idShop: ID}
        axios.delete('http://localhost:8080/ShopsManager_war_exploded/shop/' + ID, deleteIt)
            .then(res => console.log(res))
       window.location.reload();
    }

    

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
                                <h3 style ={{marginRight: "33rem"}}>{shops.length} người dùng</h3>
                            </div>
                            <Container>
                                <Row style={{backgroundColor: "#f5f5f5", padding: "0.5rem", paddingBottom: "1rem", paddingTop: "1rem", marginBottom: "1rem"}}>
                                    <Col xs={3} style={{textAlign: "center"}}>Tên shop</Col>
                                    <Col xs={3} style={{textAlign: "center"}}>Email</Col>
                                    <Col xs={2} style={{textAlign: "center"}}>Số điện thoại</Col>
                                    <Col xs={2} style={{textAlign: "center"}}>Trạng thái</Col>
                                    <Col xs={2} style={{textAlign: "center"}}>Thao tác</Col>
                                </Row>
                                <div>
                                    { shops && shops.map((shop) => {return (
                                    <Row  style={{borderStyle: "ridge"}}>
                                        <Col xs={3} style={{textAlign: "center", whiteSpace: "nowrap", width: "16.5rem", overflow: "hidden", textOverflow: "ellipsis"}}>{shop.shopName}</Col>
                                        <Col xs={3} style={{textAlign: "center", whiteSpace: "nowrap", width: "16.5rem", overflow: "hidden", textOverflow: "ellipsis"}}>{shop.email}</Col>
                                        <Col xs={2} style={{textAlign: "center"}}>{shop.phone}</Col>
                                        <Col xs={2} style={{textAlign: "center"}}>{shop.state}</Col>
                                        <Col xs={2} style={{textAlign: "center", alignItem: "right"}}>
                                            <h7  onClick={() => {handleShow2(); setPutShop(shop)}}> Sửa</h7>
                                            <h7 onClick={() => {deleteShopFunction(shop.shopId)}}> Xóa</h7>
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
                            <input type="text" placeholder={putShop.detail} onChange={(event) => {setUpDetail(event.target.value)}}/><br />

                            
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