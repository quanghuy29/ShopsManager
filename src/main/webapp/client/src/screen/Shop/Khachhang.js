import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import Nav from '../../component/Nav.js';
import { Carousel, img, Button, Container, Row, Col, Tabs, Tab, Modal } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

export default function Khachhang(props) {

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

  const [deleteCustomer, setDeleteCustomer] = useState('');

  useEffect(() => {
    fetch("http://localhost:8080/ShopsManager_war_exploded/shop/customer/" + idShop)
    .then(res => res.json())
    .then(data => setCustomers(data))
  },[])

  let idShop;
  const dataLocal = localStorage.getItem('user');
  const userLocal  = JSON.parse(dataLocal);
  if (userLocal  && userLocal.role == "shop") { idShop= userLocal.shopId[0]} else {return <Navigate to={"/login"}  />};
  

const postCustomertFunction = () => {
    const postIt = {
        firstName: newFName,
        lastName: newLName,
        address: newAddress,
        phone: newPhone,
        email: newEmail
        }
    axios.post('http://localhost:8080/ShopsManager_war_exploded/customer', postIt)
        .then(res => console.log(res))
  }

const deleteCustomertFunction = (ID) => {
    const deleteCus = {
        idCustomer: ID
    }
    axios.delete('http://localhost:8080/ShopsManager_war_exploded/customer/' + ID, deleteCus)
        .then(res => console.log(res))
    console.log(deleteCus);
  }


    return (
        <div>
          <NavBarLogin />
          <Container style = {{maxWidth: '100%', marginTop: '1.5rem', margin: '0.5rem'}}>
              <Row>
                  <Col xs={3}> <div style={{paddingBottom: "11rem", backgroundColor: "#f5f5f5", marginTop: '6rem', position: "fixed", paddingLeft: "7rem", paddingRight: "7rem",position: "fixed", zIndex: 999}}>
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
                  <Col xs={9} style={{marginTop: "6rem"}}>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                      <Tab eventKey="profile" title="Kh??ch h??ng">
                        <div style={{display: "flex"}}>
                                <h3 style ={{marginRight: "33rem"}}>{customers.length} Kh??ch h??ng</h3>
                                {/* <Button variant="info" style ={{marginBottom: "1rem"}} onClick={handleShow}>Th??m kh??ch h??ng m???i</Button> */}
                            </div>
                        <Container>
                          <Row style={{borderStyle: "ridge", backgroundColor: "#f5f5f5"}}>
                            <Col xs={2} style={{textAlign: "left"}}>T??i kho???n</Col>
                            <Col xs={2} style={{textAlign: "left"}}>H??? v?? t??n</Col>
                            <Col xs={3} style={{textAlign: "left"}}>S??? ??i???n tho???i</Col>
                            <Col xs={3} style={{textAlign: "left"}}>?????a ch???</Col>
                            <Col xs={2} style={{textAlign: "left"}}>Email</Col>
                          </Row>

                          <div>
                                {customers && customers.map((cus, i) =>{
                                return(
                                        <Row style={{borderStyle: "ridge", backgroundColor: "#f5f5f5", marginTop: "0rem"}}>                   
                                            <Col xs={2} style={{textAlign: "center"}}>
                                                <p style={{marginTop: "1rem"}}>{cus.id}</p>
                                            </Col>
                                            <Col xs={2} style={{textAlign: "left"}}>
                                                <p style={{marginTop: "1rem"}}>{cus.firstName + " " + cus.lastName}</p>
                                            </Col>
                                            <Col xs={3} style={{textAlign: "left"}}>
                                                <p style={{marginTop: "1rem"}}>{cus.phone}</p>
                                            </Col>
                                            <Col xs={3} style={{textAlign: "left"}}>
                                                <p style={{marginTop: "1rem"}}>{cus.address}</p>
                                            </Col>
                                            <Col xs={2} style={{textAlign: "left"}}>
                                                <p style={{marginTop: "1rem"}}>{cus.email}</p>
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
                    <Modal.Title>Th??m kh??ch h??ng</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <label>H??? v?? t??n ?????m</label><br />
                            <input type="text" onChange={(event) => {setNewFName(event.target.value)}} required/><br />

                             <label>T??n</label><br />
                            <input type="text" onChange={(event) => {setNewLName(event.target.value)}} required/><br />
                            <label>S??? ??i???n tho???i</label><br />
                            <input type="number" onChange={(event) => {setNewPhone(event.target.value)}} required/><br />

                             <label>Email</label><br />
                            <input type="email" onChange={(event) => {setNewEmail(event.target.value)}} required/><br />
                            <label>?????a ch???</label><br />
                            <input type="text" onChange={(event) => {setNewAddress(event.target.value)}} required/><br /><br />
                         </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Tho??t
                        </Button>
                        <Button variant="primary" onClick={() => {handleClose(); postCustomertFunction()}}>
                            Th??m kh??ch h??ng
                        </Button>
                </Modal.Footer>
        </Modal>
        </div>
    )
}