import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLoginAdmin from '../../component/NavBarLoginAdmin.js';
import Navadmin from '../../component/Navadmin.js';
import { Carousel, img, Button, Container, Row, Col, Card, Tabs, Tab } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

export default function Quanlydata(props) {
      let location = useLocation();
      const [customers, setCustomers] = useState("");
      const [deleteCustomer, setDeleteCustomer] = useState("");
      useEffect(() => {
        fetch("http://localhost:8080/ShopsManager_war_exploded/customer")
        .then(res => res.json())
        .then(data => setCustomers(data))
      },[])

      const data = localStorage.getItem('user');
    const userLocal  = JSON.parse(data);
    if (!userLocal || userLocal.role !== "admin") {return <Navigate to={"/login"}  />};

      const deleteShopFunction = () => {
        const deleteIt = {}
        axios.delete('http://localhost:8080/ShopsManager_war_exploded/shop', deleteIt)
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
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                      <Tab eventKey="profile" title="Khách hàng">
                        <Container>
                          <Row style={{borderStyle: "ridge", backgroundColor: "#f5f5f5"}}>
                            <Col xs={2}>
                              <h5>Tài khoản</h5>
                            </Col>
                            <Col xs={2}>
                              <h5>Họ và tên</h5>
                            </Col>
                            <Col xs={2}>
                              <h5>Số điện thoại</h5>
                            </Col>
                            <Col xs={3}>
                              <h5>Địa chỉ</h5>
                            </Col>
                            <Col xs={3}>
                              <h5>Email</h5>
                            </Col>

                          </Row>
                          { customers && customers.map((customer) => { return(
                          <Row>
                            <Col xs={2}>
                              <p>{customer.id}</p>
                            </Col>
                            <Col xs={2}>
                              <p>{customer.firstName + " " + customer.lastName}</p>
                            </Col>
                            <Col xs={2}>
                              <p>{customer.phone}</p>
                            </Col>
                            <Col xs={3}>
                              <p>{customer.address}</p>
                            </Col>
                            <Col xs={3}>
                              <p>{customer.email}</p>
                            </Col>
                          </Row>)})}
                        </Container>
                      </Tab>
                    </Tabs>
                    </Col>
                </Row>
            </Container>
          </div>
        </div>
    )
}