import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import Navadmin from '../../component/Navadmin.js';
import { Carousel, img, Button, Container, Row, Col, Card } from 'react-bootstrap';

export default function Dashboardadmin() {
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
                        <Container>
                            <Row>
                                <Card style={{ width: '13rem', marginRight: "2rem" }}>
                                  <Card.Body>
                                    <Card.Title>Đơn hàng chờ xác nhận: </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">5</Card.Subtitle>
                                    <Button variant="outline-info" size="sm" style={{margin: "0.1rem"}}>Xem chi tiết</Button>
                                  </Card.Body>
                                </Card>

                                <Card style={{ width: '13rem', marginRight: "2rem" }}>
                                  <Card.Body>
                                    <Card.Title>Đơn hàng đã hoàn thành: </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">15</Card.Subtitle>
                                    <Button variant="outline-info" size="sm" style={{margin: "0.1rem"}}>Xem chi tiết</Button>
                                  </Card.Body>
                                </Card>

                                <Card style={{ width: '13rem', marginRight: "2rem" }}>
                                  <Card.Body>
                                    <Card.Title>Đơn hàng đã hủy: </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">1</Card.Subtitle>
                                    <Button variant="outline-info" size="sm" style={{margin: "0.1rem"}}>Xem chi tiết</Button>
                                  </Card.Body>
                                </Card>

                                <Card style={{ width: '13rem', marginRight: "2rem" }}>
                                  <Card.Body>
                                    <Card.Title>Shop đang hoạt động: </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">5</Card.Subtitle>
                                    <Button variant="outline-info" size="sm" style={{margin: "0.1rem"}}>Xem chi tiết</Button>
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