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


    const [shops, setShops] = useState("");
    const [viewShop, setViewShop] = useState("");
    const [fixShop, setFixShop] = useState("");
    const [deleteShop, setDeleteShop] = useState("");

    const [fixName, setFixName] = useState("");
    const [fixAddress, setFixAddress] = useState("");
    const [fixDetail, setFixDetail] = useState("");
    const [fixPhone, setFixPhone] = useState("");
    const [fixEmail, setFixEmail] = useState(""); 
    const [fixWebsite, setFixWebsite] = useState("");
    const [fixPassword, setFixPassword] = useState("");

    const [newName, setNewName] = useState("");
    const [newAddress, setNewAddress] = useState("");
    const [newDetail, setNewDetail] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newWebsite, setNewWebsite] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/ShopsManager_war_exploded/shop")
    .then(res => res.json())
    .then(data => setShops(data))

  },[])

    let idShop;
    const dataLocal = localStorage.getItem('user');
    const userLocal  = JSON.parse(dataLocal);
    if (userLocal && userLocal.role == "shop") { idShop= userLocal.shopId[0]} else {return <Navigate to={"/login"}  />};

  const postShop = () => {
    const postIt = {
        userID: userLocal.userId,
        shopName: newName,
        website: newWebsite,
        address: newAddress,
        detail: newDetail,
        phone: newPhone,
        email: newEmail
        }
    axios.post('http://localhost:8080/ShopsManager_war_exploded/register', postIt)
        .then(res => console.log(res))
    window.location.reload();
  }

//   {
//     "userID": 1,
//     "shopName": "quanghuy1",
//     "website": "alo",
//     "address": "ha noi",
//     "detail": "??s??",
//     "phone": "123",
//     "email": "abc",
//     "state": 0,
//     "createdDay": "2022-06-21",
//     "lastRegisterDay": null
// }

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


  const putShop = () => {
    var putIt ={
    userID: userLocal.userId,
    shopName: fixShop.shopName,
    website: fixShop.website,
    address: fixShop.address,
    detail: fixShop.detail,
    phone: fixShop.phone,
    email: fixShop.email,
    state:fixShop.state,
    createdDay: today,
    lastRegisterDay: fixShop.lastRegisterDay,
    expirationDate: fixShop.expirationDate 
  }

//   {
//     "userID": 1,
//     "shopName": "Qu???n ??o m??a ????ng",
//     "website": "quanaomuadong.com.vn",
//     "address": "????ng Anh, H?? N???i",
//     "detail": "Shop ch??nh h??ng",
//     "phone": "0398494562",
//     "email": "quanaomuadong@gmail.com",
//     "state": 1,
//     "createdDay": 1670778000000,
//     "lastRegisterDay": 1670778000000,
//     "expirationDay": null
// }

    if (fixName) {putIt.shopName = fixName}
    if (fixAddress) {putIt.address = fixAddress}
    if (fixDetail) {putIt.detail = fixDetail}
    if (fixPhone) {putIt.phone = fixPhone}
    if (fixEmail) {putIt.email = fixEmail}
    if (fixWebsite) {putIt.website = fixWebsite}
    if (fixPassword) {putIt.password = fixPassword}

    axios.put('http://localhost:8080/ShopsManager_war_exploded/shop/'+ fixShop.shopId, putIt)
        .then(res => console.log(res))
    console.log(putIt);
    window.location.reload();
  }

  const deleteShopFunction = () => {
    var deleteIt ={
        shopId: deleteShop.shopId
  }

    axios.delete('http://localhost:8080/shops', deleteIt)
        .then(res => console.log(res))
    window.location.reload();
  }
  console.log(shops);
    
    return (
        <div>
          <NavBarLogin />
          <Container style = {{maxWidth: '100%', marginTop: '1.5rem', margin: '0.5rem'}}>
              <Row>
                  <Col xs={3}> <div style={{paddingBottom: "11rem", backgroundColor: "#f5f5f5", marginTop: '0rem', paddingRight: 0, paddingLeft: 0,position: "fixed", zIndex: 999}}>
                    <h5 style={{paddingTop: '2rem'}}>
                        <a href={"/dashboard"} style = {{textDecoration: 'none', color: '#221e1e'}}>Dashboard</a></h5>
                    <h5 style={{paddingTop: '2.5rem'}}>
                        <a href={"/don-hang"} style = {{textDecoration: 'none', color: '#221e1e'}}>????n h??ng</a></h5>
                    <h5 style={{paddingTop: '2.5rem'}}>
                        <a href={"/san-pham"} style = {{textDecoration: 'none', color: '#221e1e'}}>S???n ph???m</a></h5>
                    <h5 style={{paddingTop: '2.5rem', paddingBottom: '1rem'}}>
                        <a href={"/khach-hang"} style = {{textDecoration: 'none', color: '#221e1e'}}>Kh??ch h??ng</a></h5>
                    <h5 style={{paddingTop: '2.5rem', paddingBottom: '4.5rem'}}>
                        <a href={"/tai-khoan"} style = {{textDecoration: 'none', color: '#221e1e'}}>T??i kho???n</a></h5>
                </div> </Col>
                  <Col xs={9}>
                    <div style={{display: "flex"}}>
                            <h3 style ={{marginRight: "33rem"}}>{shops.length} gian h??ng</h3>
                            <Button variant="info" style={{marginBottom: "1rem"}} onClick={handleShow}>Th??m gian h??ng</Button>
                    </div>
                    <div>
                      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="home" title="Gian h??ng">
                          <Container>
                            <Row style={{borderStyle: "ridge", backgroundColor: "#f5f5f5"}}>
                              <Col xs={3}>
                                <h5>T??n gian h??ng</h5>
                              </Col>
                              <Col xs={3}>
                                <h5>Email</h5>
                              </Col>
                              <Col xs={2}>
                                <h5>S??? ??i???n tho???i</h5>
                              </Col>
                              <Col xs={3} >
                                <h5>Website</h5>
                              </Col>
                              <Col xs={1}>
                                <h5>Thao t??c</h5>
                              </Col>
                            </Row>

                            {shops && shops.map( (shop) => {return(
                            <div>
                                <Row style={{borderStyle: "ridge"}}>
                                  <Col xs={3}>
                                    <p>{shop.shopName}</p>
                                  </Col>
                                  <Col xs={3}>
                                    <p>{shop.email}</p>
                                  </Col>
                                  <Col xs={2}>
                                    <p>{shop.phone}</p>
                                  </Col>
                                  <Col xs={2}>
                                    <p style={{whiteSpace: "nowrap", width: "10.5rem", overflow: "hidden", textOverflow: "ellipsis"}}>{shop.website}</p>
                                  </Col>
                                  <Col xs={2}>
                                    <p  style={{marginBottom: "0.1rem"}} onClick={() => {handleShow3();setViewShop(shop)}}>Xem th??m</p>
                                    <p style={{marginBottom: "0.1rem"}} onClick={() => {handleShow2();setFixShop(shop);}}>S???a</p>
                                    <p  style={{marginBottom: "0.1rem"}} onClick={() => {setDeleteShop(shop); deleteShopFunction()}}>X??a</p> 
                                  </Col>
                                </Row>
                            </div>)})}


                          </Container>
                        </Tab>
                      </Tabs>
                    </div>
                </Col>
            </Row>
        </Container>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                    <Modal.Title>Th??m gian h??ng</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Th??m gian h??ng</h5>
                            <label>T??n shop</label><br />
                            <input type="text" onChange={(event) =>setNewName(event.target.value)}/><br />

                            <label>Website</label><br />
                            <input type="text" onChange={(event) =>setNewWebsite(event.target.value)}/><br />

                            <label>Email</label><br />
                            <input type="text" onChange={(event) =>setNewEmail(event.target.value)}/><br />

                            <label>S??? ??i???n tho???i</label><br />
                            <input type="number" onChange={(event) =>setNewPhone(event.target.value)}/><br />

                            <label>?????a ch???</label><br />
                            <input type="text" onChange={(event) =>setNewAddress(event.target.value)}/><br />
                            
                            <label>Th??ng tin th??m</label><br />
                            <input type="text" onChange={(event) =>setNewDetail(event.target.value)}/><br />

                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Tho??t
                        </Button>
                        <Button variant="primary" onClick={() => {handleClose(); postShop()}}>
                            Th??m gian h??ng
                        </Button>
                </Modal.Footer>
        </Modal>


        <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton>
                    <Modal.Title>Ch???nh s???a gian h??ng</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Ch???nh s???a gian h??ng</h5>
                            <label>T??n shop</label><br />
                            <input type="text" placeholder={fixShop.shopName} onChange={(event) =>setFixName(event.target.value)}/><br />

                            <label>Website</label><br />
                            <input type="text" placeholder={fixShop.website} onChange={(event) =>setFixWebsite(event.target.value)}/><br />

                            <label>Email</label><br />
                            <input type="text" placeholder={fixShop.email} onChange={(event) =>setFixEmail(event.target.value)}/><br />

                            <label>S??? ??i???n tho???i</label><br />
                            <input type="number" placeholder={fixShop.phone} onChange={(event) =>setFixPhone(event.target.value)}/><br />

                            <label>?????a ch???</label><br />
                            <input type="text" placeholder={fixShop.address} onChange={(event) =>setFixAddress(event.target.value)}/><br />
                                                        
                            <label>Th??ng tin th??m</label><br />
                            <input type="text" placeholder={fixShop.detail} onChange={(event) =>setFixDetail(event.target.value)}/><br />

                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose2}>
                            Tho??t
                        </Button>
                        <Button variant="primary" onClick={() => {handleClose2(); putShop()}}>
                            Ch???nh s???a gian h??ng
                        </Button>
                </Modal.Footer>
              </Modal>

              <Modal show={show3} onHide={handleClose3}>
            <Modal.Header closeButton>
                    <Modal.Title>Xem chi ti???t gian h??ng</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <label>T??n shop</label><br />
                            <h6>{viewShop.shopName}</h6>

                            <label>Website</label><br />
                            <h6>{viewShop.website}</h6>

                            <label>Email</label><br />
                            <h6>{viewShop.email}</h6>

                            <label>S??? ??i???n tho???i</label><br />
                            <h6>{viewShop.phone}</h6>
                            
                            <label>?????a ch???</label><br />
                            <h6>{viewShop.address}</h6>
                            
                            <label>Th??ng tin th??m</label><br />
                            <h6>{viewShop.detail}</h6>

                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose3}>
                            Tho??t
                        </Button>
                </Modal.Footer>
              </Modal>
        </div>
    )
}