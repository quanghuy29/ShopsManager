import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLoginAdmin from '../../component/NavBarLoginAdmin.js';
import Navadmin from '../../component/Navadmin.js';
import { Carousel, img, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

export default function Dashboardadmin(props) {
  
  let location = useLocation();
  const [shop, setShop] = useState("");
  const [order, setOrder] = useState("");

    useEffect(() => {
    fetch("http://localhost:8080/ShopsManager_war_exploded/shop")
      .then(res => res.json())
      .then(data => setShop(data))

    fetch("http://localhost:8080/ShopsManager_war_exploded/register-order")
      .then(res => res.json())
      .then(data => setOrder(data.listResult))

  },[])

    const data = localStorage.getItem('user');
    const userLocal  = JSON.parse(data);
    if (!userLocal || userLocal.role !== "admin") {return <Navigate to={"/login"}  />};
    
    var choXacNhan = 0;
    var hoanThanh = 0;
    var huy = 0;

    for (var i=0; i< order.length; i++) {
      if(order[i].state == 0) ++choXacNhan;
    }

    for (var i=0; i< order.length; i++) {
      if(order[i].state == 1) ++hoanThanh;
    }
    for (var i=0; i< order.length; i++) {
      if(order[i].state == 2) ++huy;
    }
    console.log(props.dataApp)
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
                        <Container>
                            <Row>
                                <Card style={{ width: '13rem', marginRight: "2rem" }}>
                                  <Card.Body>
                                    <Card.Title>Đơn hàng chờ xác nhận: </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{choXacNhan}</Card.Subtitle>
                                    <Button variant="outline-info" size="sm" style={{margin: "0.1rem"}} href="/quan-ly-dich-vu">Xem chi tiết</Button>
                                  </Card.Body>
                                </Card>

                                <Card style={{ width: '13rem', marginRight: "2rem" }}>
                                  <Card.Body>
                                    <Card.Title>Đơn hàng đã hoàn thành: </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{hoanThanh}</Card.Subtitle>
                                    <Button variant="outline-info" size="sm" style={{margin: "0.1rem"}}  href="/quan-ly-dich-vu">Xem chi tiết</Button>
                                  </Card.Body>
                                </Card>

                                <Card style={{ width: '13rem', marginRight: "2rem" }}>
                                  <Card.Body>
                                    <Card.Title>Đơn hàng đã hủy: </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{huy}</Card.Subtitle>
                                    <Button variant="outline-info" size="sm" style={{margin: "0.1rem"}}  href="/quan-ly-dich-vu">Xem chi tiết</Button>
                                  </Card.Body>
                                </Card>

                                <Card style={{ width: '13rem', marginRight: "2rem" }}>
                                  <Card.Body>
                                    <Card.Title>Shop đang hoạt động: </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{shop.length}</Card.Subtitle>
                                    <Button variant="outline-info" size="sm" style={{margin: "0.1rem"}} href="/quan-ly-shop">Xem chi tiết</Button>
                                  </Card.Body>
                                </Card>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
          </div>
        </div>
    )
}