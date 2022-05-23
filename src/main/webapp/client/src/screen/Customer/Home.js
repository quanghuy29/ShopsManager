import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../../component/NavBar.js';
import Nava from '../../component/Nav.js';
import { Carousel, img, Button, Container, Row, Col, Card } from 'react-bootstrap';

export default function Home() {
    return (
        <div>
            <NavBar />
            <div style={{backgroundColor: '#f0f0ff'}}>
            <Container>
                <Row>
                    <Col sm={5} style={{backgroundColor:'#f0f0ff', padding: '5rem'}}>
                        <p>Phần mềm</p>
                        <h3>Quản lý bán hàng đa kênh</h3> <br />
                        <h3>OmniChannel</h3>
                        <p>Giải pháp đồng bộ bán hàng tại 1 nơi từ nhiều kênh như
                        Website, Facebook, Instagram, sàn TMĐT, đến cửa hàng</p>
                        <Button variant="info">Đăng ký ngay</Button>
                    </Col>
                    <Col sm={7} ><div style={{backgroundImage: 'url("anhbia.png")', height: '34rem', width: '100%'}}></div></Col>
                </Row>
            </Container>
            </div>

            <div style={{marginTop: '2rem'}}>
            <Container>
                <Row>
                    <Col sm={7}>
                        <div style={{backgroundImage: 'url("home2.png")', height: '29rem', width: '100%'}}></div>
                    </Col>
                    <Col sm={5}>
                        <h2 style={{textAlign: 'left'}}>Bán hàng đa kênh là gì?</h2>
                        <p style={{textAlign: 'left'}}>Bán hàng đa kênh (Omnichannel) là xu hướng bán hàng và tiếp cận khách hàng trên nhiều kênh từ Cửa hàng, Website, Facebook, Instagram và Sàn thương mại điện tử như Shopee, Lazada, Tiki, Sendo.</p>
                        <p style={{textAlign: 'left'}}>Thay vì hoạt động độc lập, các kênh bán hàng được đồng bộ với nhau trên Sapo Omnichannel, giúp tối ưu khả năng vận hành, quản lý hiệu quả, mở rộng thương hiệu trên các kênh và tăng nhanh doanh thu hiệu quả.</p>
                        <p style={{textAlign: 'left'}}>Để bán hàng đa sàn thành công, doanh nghiệp cần 1 nền tảng hiện đại có thể đảm bảo tính thống nhất, liên tục và đồng bộ của cả hệ thống trong cách quản lý các kênh, chi nhánh và sản phẩm của mình.</p>
                    </Col>
                </Row>
            </Container>
            </div>
            <p style={{textAlign: 'center', marginTop: '3rem'}}>Làm sao để quản lý tập trung kênh bán hàng?</p>
            <h2 style={{textAlign: 'center', marginBottom: '4rem'}}>Sapo Omnichannel mang tới giải pháp quản lý bán hàng đa kênh từ A đến Z</h2>
            <Container>
                <Row>
                    <Col sm={5}>
                        <h3>Đồng bộ xuyên suốt 8 kênh bán hàng</h3>
                        <h5>Đồng bộ thông tin, giá và tồn kho sản phẩm</h5>
                        <p>Thông tin sản phẩm, chính sách giá và tồn kho hàng hóa đều được đồng bộ, kiểm soát, tự động cập nhật giữa Sapo Omnichannel và tất cả các kênh bán.</p>
                        <h5>Đăng sản phẩm lên nhiều gian hàng</h5>
                        <p>Giải pháp bán hàng đa kênh cho phép đăng bán sản phẩm lên nhiều gian hàng Shopee, Lazada, Sendo cùng lúc, tiết kiệm thời gian và công sức cho chủ shop.</p>
                        <h5>Tính năng chat đa sàn</h5>
                        <p>Tính năng chat đa sàn giúp dễ dàng quản lý tin nhắn của khách hàng trên tất cả các gian hàng Shopee, Lazada, Sendo. Nhận thông báo ngay lập tức khi có khách hàng nhắn tin tới ngay trên một màn hình.</p>
                    </Col>
                    <Col sm={7}>
                        <div style={{backgroundImage: 'url("home3.png")', height: '34.7rem', width: '100%'}}></div>
                    </Col>
                </Row>
            </Container>
            <div style={{backgroundImage: 'url("background.png")'}}>
                <p style={{paddingTop: '9rem'}}>Sử dụng phần mềm quản lý bán hàng đa kênh Omnichannel và</p>
                <h3>3 lợi ích tuyệt vời dành cho doanh nghiệp bán lẻ</h3>
                <Container>
                <Row style = {{marginTop: '4rem'}}>
                    <Card style={{ width: '20rem', marginRight: '5rem' }}>
                      <Card.Body>
                        <Card.Title>Tiếp cận đến 55 triệu khách hàng tiềm năng</Card.Title>
                        <Card.Text>
                          Giờ đây, không chỉ bán tại cửa hàng, khách hàng cũng sẽ biết đến sản phẩm của bạn mọi lúc mọi nơi thông qua các kênh online
                        </Card.Text>
                      </Card.Body>
                    </Card>

                    <Card style={{ width: '20rem', marginRight: '5rem'  }}>
                      <Card.Body>
                        <Card.Title>Tăng trưởng doanh thu vượt bậc</Card.Title>
                        <Card.Text>
                          Tiếp cận khách hàng đa kênh sẽ giúp họ ghi nhớ thương hiệu của bạn, mua nhiều hàng hơn, đem lại hiệu quả kinh doanh vượt bậc
                        </Card.Text>
                      </Card.Body>
                    </Card>

                    <Card style={{ width: '20rem' }}>
                      <Card.Body>
                        <Card.Title>Tiết kiệm 50% thời gian và chi phí quản lý</Card.Title>
                        <Card.Text>
                          Việc quản lý xuyên suốt, đồng bộ các kênh tại một nơi duy nhất giúp tiết kiệm chi phí quản lý, thời gian và nhân lực cho doanh nghiệp
                        </Card.Text>
                      </Card.Body>
                    </Card>
                </Row>
                <Row style={{marginTop: '3rem', paddingBottom: '3rem'}}>
                <Col sm={3}></Col>
                <Col sm={6}>
                    <Button variant="info" size="lg">Đăng ký ngay</Button>
                </Col>
                <Col sm={3}></Col>
                </Row>    
                </Container>
            </div>
        </div>
    )
}
