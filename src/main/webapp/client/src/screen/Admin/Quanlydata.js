import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import Navadmin from '../../component/Navadmin.js';
import { Carousel, img, Button, Container, Row, Col, Card, Tabs, Tab } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

export default function Quanlydata(props) {
      let location = useLocation();
      const [customers, setCustomers] = useState("");
      const [deleteCustomer, setDeleteCustomer] = useState("");
      useEffect(() => {
        fetch("http://localhost:8080/customers")
        .then(res => res.json())
        .then(data => setCustomers(data))
      },[])

      const deleteShopFunction = () => {
        const deleteIt = {}
        axios.delete('http://localhost:8080/shops', deleteIt)
            .then(res => console.log(res))
        window.location.reload();
    }


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
                            <Col xs={2}>
                              <h5>Địa chỉ</h5>
                            </Col>
                            <Col xs={2}>
                              <h5>Email</h5>
                            </Col>

                          </Row>
                          { customers && customers.map((customer) => { return(
                          <Row>
                            <Col xs={2}>
                              <p>{customer.customerId}</p>
                            </Col>
                            <Col xs={2}>
                              <p>{customer.firstName + " " + customer.lastName}</p>
                            </Col>
                            <Col xs={2}>
                              <p>{customer.phone}</p>
                            </Col>
                            <Col xs={2}>
                              <p>{customer.address}</p>
                            </Col>
                            <Col xs={2}>
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