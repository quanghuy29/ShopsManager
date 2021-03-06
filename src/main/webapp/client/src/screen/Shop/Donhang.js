import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import Nav from '../../component/Nav.js';
import { Carousel, img, Button, Container, Row, Col, Tabs, Tab, Modal } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

export default function Donhang(props) {
    var resp = [];
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    const [orders, setOrders] = useState('');
    const [customers, setCustomers] = useState('');
    const [products, setProducts] = useState('');
    const [viewOrder, setViewOrder] = useState('');


    const [newProduct, setNewProduct] = useState('');
    const [newQuantity, setNewQuantity] = useState('');
    const [newProduct2, setNewProduct2] = useState('');
    const [newQuantity2, setNewQuantity2] = useState('');
    const [newProduct3, setNewProduct3] = useState('');
    const [newQuantity3, setNewQuantity3] = useState('');
    const [newCustomerId, setNewCustomerId] = useState('');
    const [newTotalPrice, setNewTotalPrice] = useState('');
    const [newShipingFee, setNewShipingFee] = useState('');
    const [newTotalPayment, setNewTotalPayment] = useState('');
    const [newState, setNewState] = useState('');
    const [newShipName, setNewShipName] = useState('');
    const [newChannel, setNewChannel] = useState('');

    const [newFName, setNewFName] = useState('');
    const [newLName, setNewLName] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [newAddress, setNewAddress] = useState('');
    const [newEmail, setNewEmail] = useState('');

    const [changeState, setChangeState] = useState('');

    const [orderState, setOrderState] = useState('');
    useEffect(() => {
    fetch("http://localhost:8080/ShopsManager_war_exploded/order/shop/" + idShop)
    .then(res => res.json())
    .then(data => setOrders(data))

    fetch("http://localhost:8080/ShopsManager_war_exploded/shop/customer/" + idShop)
    .then(res => res.json())
    .then(data => setCustomers(data))

    fetch("http://localhost:8080/ShopsManager_war_exploded/product/shop/" + idShop)
    .then(res => res.json())
    .then(data => setProducts(data.listResult))

    
  },[])
  console.log(orders);
    let idShop;
    const dataLocal = localStorage.getItem('user');
    const userLocal  = JSON.parse(dataLocal);
    if (userLocal && userLocal.role == "shop") { idShop= userLocal.shopId[0]} else {return <Navigate to={"/login"}  />};

    const getCustomerName = (id) => {
        for(var i=0; i< customers.length; i++) {
           if (customers[i].id == id) return (customers[i].firstName + " " + customers[i].lastName)
    }}

    const getCustomerPhone = (id) => {
        for(var i=0; i< customers.length; i++) {
           if (customers[i].id == id) return (customers[i].phone)
    }}

    const getProductName = (id) => {
        for(var i=0; i< products.length; i++) {
           if (products[i].id == id) return (<h6 style={{marginTop: "0.1rem", marginLeft: "0.5rem"}}>{products[i].name}</h6>)
    }}

    const getCustomerAddress = (id) => {
        for(var i=0; i< customers.length; i++) {
           if (customers[i].id == id) return (customers[i].address)
    }}

    const getImage = (id) => {
        for(var i=0; i< products.length; i++) {
           if (products[i].id == id) return (products[i].image)
    }}

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


var NewCusId = [];
const postOrder = () => {
        const postCus = {
            firstName: newFName,
            lastName: newLName,
            address: newAddress,
            phone: newPhone,
            email: newEmail
            }

        
        axios.post('http://localhost:8080/ShopsManager_war_exploded/customer', postCus)
            .then(res => {
                NewCusId.push(res.data.id)
            })

        setTimeout(direct, 1000);
       

        // {
        //     "shopId":"3",
        //     "customerId":"2",
        //     "ship":{
        //         "name":"Giaohangnhanh"
        //     },
        //     "createdDay":"2022-10-10",
        //     "totalPrice":"1",
        //     "state":"2",
        //     "shippingFee":"1",
        //     "totalPayment":"1",
        //     "orderDetail":[
        //         {
        //             "productId":"38",
        //             "quantity":"3"
        //         }
        //     ]
        // }
    }

    const direct = () => {
        console.log(NewCusId);
        const postIt = {
            shopId: idShop,
            ship:
            {name: newShipName},
            orderDetail:
                [
                    {productId: newProduct, quantity: newQuantity}
                ],
            customerId: NewCusId[0],
            detail: newChannel,
            createdDay: today,
            totalPrice: newTotalPrice,
            shippingFee: newShipingFee,
            trasitionFee: 0,
            totalPayment: newTotalPayment,
            state: newState
        }
        
        if (newProduct2) {postIt.orderDetail.push({productId: newProduct2, quantity: newQuantity2})}
        if (newProduct3) {postIt.orderDetail.push({productId: newProduct3, quantity: newQuantity3})}

        console.log(postIt);
        axios.post('http://localhost:8080/ShopsManager_war_exploded/order', postIt)
            .then(res => console.log(res)) 
    }

    const checkStateOrder = (item) => {

        if(item.state == 1) {return "??ang v???n chuy???n"} else if(item.state == 2) {return "???? ho??n th??nh"} 
                                                else if (item.state == 3) {return "???? h???y"} else {return "Tr??? h??ng"}

    }

    const orderDetailArray = [];

    const putOrder = (order) => {
        const putIt =  {
            shopId: order.shopId,
            customerId:  order.customerId,
            ship: {
                id:  order.ship.id
            },
            detail: order.detail,
            createdDay:  order.createdDay,
            totalPrice:  order.totalPrice,
            state:  orderState,
            shippingFee:  order.shippingFee,
            totalPayment:  order.totalPayment,
            orderDetail: orderDetailArray
        }

        axios.put('http://localhost:8080/ShopsManager_war_exploded/order/'+ order.orderId, putIt )
            .then(res => console.log(res))
        window.location.reload();
    }

    function changeColorRed(e) {
        e.target.style.fontWeight = 'bold';
    }
    function changeColorWhite(e) {
        e.target.style.fontWeight = 'normal';
    }
    return (
        <div>
          <NavBarLogin />
          <Container style = {{maxWidth: '100%', height: "100%", margin: '0.5rem'}}>
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
                    <Tabs defaultActiveKey="tatCa" id="uncontrolled-tab-example" className="mb-3">
                      <Tab eventKey="tatCa" title="T???t c???">
                            <div style={{display: "flex"}}>
                                <h3 style ={{marginRight: "33rem"}}>{orders.length} ????n h??ng</h3>
                                <Button variant="info" style ={{marginBottom: "1rem"}} onClick={handleShow}>Th??m ????n h??ng m???i</Button>
                            </div>
                            <Container>
                                <Row style={{backgroundColor: "#f5f5f5", padding: "0.5rem", paddingBottom: "1rem", paddingTop: "1rem"}}>
                                    <Col xs={3} style={{textAlign: "left"}}>S???n ph???m</Col>
                                    <Col xs={1} style={{textAlign: "left"}}>S??? l?????ng</Col>
                                    <Col xs={1} style={{textAlign: "left"}}>T???ng ????n</Col>
                                    <Col xs={2} style={{textAlign: "left"}}>Tr???ng th??i</Col>
                                    <Col xs={2} style={{textAlign: "left"}}>V???n chuy???n</Col>
                                    <Col xs={2} style={{textAlign: "left"}}>K??nh b??n h??ng</Col>
                                    <Col xs={1} style={{textAlign: "left"}}>Thao t??c</Col>
                                </Row>
                                <div>
                                {orders && orders.map((item, i) =>{
                                return(
                                        <Row style={{borderStyle: "ridge", backgroundColor: "#f5f5f5", marginTop: "1rem"}}>
                                            <p style={{textAlign: "left", marginBottom: "0.1rem"}}>{getCustomerName(item.customerId)}</p>

                                            <Col xs={3} style={{textAlign: "left"}}>
                                                <div style={{display: "flex"}}>
                                                <img src= {getImage(item.orderDetail[0].productId)} style={{width: "4rem", height: "4rem"}}/>
                                                <Row>{item.orderDetail.map((pro, j) => getProductName(pro.productId))}</Row>
                                                </div>
                                            </Col>
                                            <Col xs={1} style={{textAlign: "left"}}>
                                                <Row>{item.orderDetail.map(pro => (<h7 style={{marginTop: "0rem"}}>{pro.quantity}</h7>))}</Row>
                                            </Col>
                                            <Col xs={1} style={{textAlign: "left"}}>
                                                <p style={{marginTop: "0rem"}}>{item.totalPayment} ??</p>
                                            </Col>
                                            <Col xs={2} style={{textAlign: "left"}}>
                                                <p style={{marginTop: "0rem"}}>{
                                                checkStateOrder(item)
                                                }</p>
                                            </Col>
                                            <Col xs={2} style={{textAlign: "left"}}>
                                                <p style={{marginTop: "0rem"}}>{item.ship.name}</p>
                                            </Col>
                                            <Col xs={2} style={{textAlign: "left"}}>
                                                <p style={{marginTop: "0rem"}}>{item.detail}</p>
                                            </Col>
                                            <Col xs={1} style={{textAlign: "left"}}>
                                                <p style={{marginTop: "0rem", cursor: 'pointer'}} onMouseOver={changeColorRed} onMouseOut={changeColorWhite}><a onClick={() => {handleShow2(); setViewOrder(item); setOrderState(item.state)}}>Xem th??m</a></p>
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
                    <Modal.Title>Th??m ????n h??ng</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>S???n ph???m</h5>
                            <label>ID s???n ph???m</label><br />
                            <input type="text" onChange={(event) => {setNewProduct(event.target.value)}} required/><br />
                            <label>S??? l?????ng</label><br />
                            <input type="text" onChange={(event) => {setNewQuantity(event.target.value)}} required/><br />

                             <label>ID s???n ph???m 2 (T??y ch???n)</label><br />
                            <input type="text" onChange={(event) => {setNewProduct2(event.target.value)}} required/><br />
                            <label>S??? l?????ng</label><br />
                            <input type="text" onChange={(event) => {setNewQuantity2(event.target.value)}} required/><br />

                             <label>ID s???n ph???m 3 (T??y ch???n)</label><br />
                            <input type="text" onChange={(event) => {setNewProduct3(event.target.value)}} required/><br />
                            <label>S??? l?????ng</label><br />
                            <input type="text" onChange={(event) => {setNewQuantity3(event.target.value)}} required/><br /><br />

                            <h5>K??nh b??n h??ng</h5>
                            <label>K??nh b??n h??ng</label><br />
                            <input type="text" onChange={(event) => {setNewChannel(event.target.value)}} required/><br /><br />

                            {/* Th??m kh??ch h??ng */}
                            <h5>Kh??ch h??ng</h5>
                            <label>H??? v?? t??n ?????m kh??ch h??ng</label><br />
                            <input type="text" onChange={(event) => {setNewFName(event.target.value)}} required/><br />

                            <label>T??n kh??ch h??ng</label><br />
                            <input type="text" onChange={(event) => {setNewLName(event.target.value)}} required/><br />

                            <label>S??T li??n h???</label><br />
                            <input type="text" onChange={(event) => {setNewPhone(event.target.value)}} required/><br />

                            <label>Email li??n h???</label><br />
                            <input type="text" onChange={(event) => {setNewEmail(event.target.value)}} required/><br />

                            <label>?????a ch??? giao h??ng</label><br />
                            <input type="text" onChange={(event) => {setNewAddress(event.target.value)}} required/><br /><br />
                            {/* Th??m kh??ch h??ng */}

                            <h5>T???ng gi?? ti???n</h5>
                            <input type="number" onChange={(event) => {setNewTotalPrice(event.target.value)}} required/><br /><br />

                            <h5>Ph?? ship</h5>
                            <input type="number" onChange={(event) => {setNewShipingFee(event.target.value)}} required/><br /><br />

                            <h5>T???ng thanh to??n</h5>
                            <input type="number" onChange={(event) => {setNewTotalPayment(event.target.value)}} required/><br /><br />

                            <h5>????n v??? v???n chuy???n</h5>
                            <input type="text" onChange={(event) => {setNewShipName(event.target.value)}} required/><br /><br />

                            <h5>Tr???ng th??i ????n h??ng</h5>
                            <select onChange={(even) => {setNewState(even.target.value); }}>
                                <option value="1">??ang v???n chuy???n</option>
                                <option value="2">Ho??n th??nh</option>
                                <option value="3">???? h???y</option>
                                <option value="4">Tr??? h??ng</option>
                            </select><br />
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Tho??t
                        </Button>
                        <Button variant="primary" onClick={() => {handleClose(); postOrder()}}>
                            Th??m ????n h??ng
                        </Button>
                </Modal.Footer>
        </Modal>
        <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton>
                    <Modal.Title>Xem chi ti???t ????n h??ng</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>S???n ph???m</h5>
                            {viewOrder && viewOrder.orderDetail.map((item, i) => { return(
                            <div>  
                                <p>{getProductName(item.productId)}</p>
                                <label>S??? l?????ng</label>
                                <p>{item.quantity}</p>
                            </div> )})}
                            <h5>Kh??ch h??ng</h5>
                            <label>T??n kh??ch h??ng</label><br />
                            <p>{getCustomerName(viewOrder.customerId)}</p>
                            <label>S??? ??i???n tho???i</label><br />
                            <p>{getCustomerPhone(viewOrder.customerId)}</p>
                            <label>?????a ch???</label><br />
                            <p>{getCustomerAddress(viewOrder.customerId)}</p>

                            <h5>K??nh b??n h??ng</h5>
                            <p>{viewOrder.detail}</p>
                            
                            <h5>????n v??? v???n chuy???n</h5>
                            <p>{viewOrder ? viewOrder.ship.name : " "}</p>

                            
                            
                            <h5>????n h??ng</h5>
                            <p>T???ng gi?? tr??? s???n ph???m</p>
                            <p>{viewOrder.totalPrice}</p>
                            <p>Ph?? ship</p>
                            <p>{viewOrder.shippingFee}</p>
                            <p>Ph?? d???ch v???</p>
                            <p>{viewOrder.trasitionFee}</p>
                            <p>T???ng thanh to??n</p>
                            <p>{viewOrder.totalPayment}</p>
                            <p>Ch???nh s???a tr???ng th??i:</p>
                            <select value={orderState} onChange={(even) => {setOrderState(even.target.value); console.log(orderState)}}>
                                <option value="1">??ang v???n chuy???n</option>
                                <option value="2">Ho??n th??nh</option>
                                <option value="3">???? h???y</option>
                                <option value="4">Tr??? h??ng</option>
                            </select>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={() => {handleClose2(); putOrder(viewOrder)}}>
                            Ho??n th??nh
                        </Button>
                </Modal.Footer>
        </Modal>
        </div>
    )
}