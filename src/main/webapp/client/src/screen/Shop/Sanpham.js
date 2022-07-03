import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarLogin from '../../component/NavBarLogin.js';
import Nav from '../../component/Nav.js';
import { Carousel, img, Button, Container, Row, Col, Tabs, Tab, Card,Modal, Image } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import ImageUpload from 'image-upload-react'
import 'image-upload-react/dist/index.css'
import SweetPagination from "sweetpagination";

export default function Sanpham(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

  const [products, setProducts] = useState('');
  const [viewProduct, setViewProduct] = useState('');
  const [fixProduct, setFixProduct] = useState('');

  const [newCategory, setNewCategory] = useState('');
  const [newProductName, setNewProductName] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newAvailable, setNewAvailable] = useState('');
  const [newDetail, setNewDetail] = useState('');
  const [newImage, setNewImage] = useState();
  const [newImage2, setNewImage2] = useState();

  const [urlImage, setUrlImage] = useState();

  
  const [category, setCategory] = useState('');
  const [getNewCategory, setGetNewCategory] = useState('');
  

  // update product
  const [fixPrice, setFixPrice] = useState('');
  const [fixCategory, setFixCategory] = useState('');
  const [fixProductName, setFixProductName] = useState('');
  const [fixDetail, setFixDetail] = useState('');
  const [fixImage, setFixImage] = useState('');
  const [fixAvailable, setFixAvailable] = useState('');

  const [deleteProduct, setDeleteProduct] = useState('');

  // get product
    useEffect(() => {
        fetch("http://localhost:8080/ShopsManager_war_exploded/product/shop/" + idShop)
        .then(res => res.json())
        .then(data => setProducts(data.listResult))

        fetch("http://localhost:8080/ShopsManager_war_exploded/category")
        .then(res => res.json())
        .then(data => setCategory(data.listResult))
      },[])

      const handleImageSelect = (e) => {
        setNewImage(URL.createObjectURL(e.target.files[0]));
        setNewImage2(URL.createObjectURL(e.target.files[0]))
      }

      let idShop;
      const dataLocal = localStorage.getItem('user');
      const userLocal  = JSON.parse(dataLocal);
      if (userLocal  && userLocal.role == "shop") { idShop= userLocal.shopId[0]} else {return <Navigate to={"/login"}  />};
      
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

  const postProduct = () => {
    const postIt = {
        shopId: idShop,
        category: newCategory, 
        name: newProductName, 
        description: newDetail, 
        price: newPrice, 
        image: dataUrl[0], 
        available: newAvailable, 
        createdDay: today}

    axios.post('http://localhost:8080/ShopsManager_war_exploded/product', postIt)
        .then(res => console.log(res))
        console.log(postIt);
    window.location.reload();
  }

  const updateProduct = () => {
    const putIt = {
        shopId: idShop,
        category: fixProduct.category, 
        name: fixProduct.name, 
        description: fixProduct.description, 
        price: fixProduct.price, 
        image: fixProduct.image,
        available: fixProduct.available, 
        createdDay: today}

    if (fixPrice) {putIt.price = fixPrice}
    if (fixDetail) {putIt.description = fixDetail}
    if (fixProductName) {putIt.name = fixProductName}
    if (fixAvailable) {putIt.available = fixAvailable}
    if (fixCategory) {putIt.category = fixCategory}
    if(dataUrl2[0]) {putIt.image = dataUrl2[0]}


    axios.put('http://localhost:8080/ShopsManager_war_exploded/product/'+ fixProduct.id, putIt)
        .then(res => console.log(res))
    window.location.reload();
  }
// delete product
const dataUrl = [];
const uploadImage = (e) => {
  const formData = new FormData();
  formData.append("file", newImage);
  formData.append("upload_preset", "project2");
  // Tải ảnh lên cloudinary
  // API: https://api.cloudinary.com/v1_1/{Cloudinary-Name}/image/upload
  axios
    .post("https://api.cloudinary.com/v1_1/huong-pham-van/image/upload", formData)
    .then((response) => {/*setTimeout(setUrlImage(response.data.url), 2200);*/ console.log(urlImage); dataUrl.push(response.data.url)})
    .catch((err) => console.error(err));

  setTimeout(postProduct, 2000);
};

const dataUrl2 = [];
const uploadImage2 = (e) => {
  const formData = new FormData();
  formData.append("file", newImage2);
  formData.append("upload_preset", "project2");
  // Tải ảnh lên cloudinary
  // API: https://api.cloudinary.com/v1_1/{Cloudinary-Name}/image/upload
  axios
    .post("https://api.cloudinary.com/v1_1/huong-pham-van/image/upload", formData)
    .then((response) => {/*setTimeout(setUrlImage(response.data.url), 2200);*/ dataUrl2.push(response.data.url)})
    .catch((err) => console.error(err));

  setTimeout(updateProduct, 2000);
};



    const deleteProductFunction = (ID) => {

      const payload = {
        idProduct: ID
      };

      axios.delete('http://localhost:8080/ShopsManager_war_exploded/product/' + ID, payload)
        .then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
          console.log(error);
      });
     window.location.reload();
  }
  
  console.log(products)
    return (
        <div>
          <NavBarLogin />
          <Container style = {{maxWidth: '100%', height:" 100%", marginTop: 0}}>
              <Row>

                  <Col xs={3}> <div style={{paddingBottom: "11rem", backgroundColor: "#f5f5f5", marginTop: '6rem', position: "fixed", paddingLeft: "7rem", paddingRight: "7rem",position: "fixed", zIndex: 999}}>
                    <h5 style={{paddingTop: '2rem'}}>
                        <a href={"/dashboard"} style = {{textDecoration: 'none', color: '#221e1e'}}>Dashboard</a></h5>
                    <h5 style={{paddingTop: '2.5rem'}}>
                        <a href={"/don-hang"} style = {{textDecoration: 'none', color: '#221e1e'}}>Đơn hàng</a></h5>
                    <h5 style={{paddingTop: '2.5rem'}}>
                        <a href={"/san-pham"} style = {{textDecoration: 'none', color: '#221e1e'}}>Sản phẩm</a></h5>

                    <h5 style={{paddingTop: '2.5rem', paddingBottom: '1rem'}}>
                        <a href={"/khach-hang"} style = {{textDecoration: 'none', color: '#221e1e'}}>Khách hàng</a></h5>
                    <h5 style={{paddingTop: '2.5rem', paddingBottom: '4.5rem'}}>
                        <a href={"/tai-khoan"} style = {{textDecoration: 'none', color: '#221e1e'}}>Tài khoản</a></h5>
                </div> </Col>
                  <Col xs={9} style={{marginTop: "6rem"}}>
                    <Tabs defaultActiveKey="tatCa" id="uncontrolled-tab-example" className="mb-3">
                      <Tab eventKey="tatCa" title="Tất cả">
                        <div style={{display: "flex"}}>
                            <h3 style ={{marginRight: "33rem"}}>{products.length} sản phẩm</h3>
                            <Button variant="info" style={{marginBottom: "2rem"}} onClick={handleShow}>Thêm sản phẩm mới</Button>
                        </div>
                        <div>
                          <Row>
                          { products && products.map((pro, i) => { return (
                            <Card style={{ width: '11.5rem', height: "18rem", marginRight: "0.8rem", marginBottom: "1rem"}} >
                              <Card.Img variant="top" src={pro.image} style={{ width: '9rem', height: "9rem"}}/>
                              <Card.Body style= {{paddingLeft: 0}}>
                                <h6 style= {{ whiteSpace: "nowrap", width: "10.5rem", overflow: "hidden", textOverflow: "ellipsis"}}>{pro.name}</h6>
                                <div style={{display: "flex"}}>
                                  <h9 style={{textAlign: "left", marginRight: "0.6rem"}}>Price: {pro.price}đ</h9>
                                  <h9 style={{textAlign: "right"}}>Stock: {pro.available}</h9>
                                </div>
                                <Button variant="info" size="sm" style={{marginRight: "0.3rem"}} onClick={() => {handleShow3(); setViewProduct(pro)}}>Xem</Button>
                                <Button variant="outline-info" size="sm" onClick={() => {handleShow2(); setFixProduct(pro)}}>Sửa</Button>
                                <Button variant="info" size="sm" style={{marginLeft: "0.3rem"}} onClick={() => {deleteProductFunction(pro.id);}}>Xóa</Button>
                              </Card.Body>
                            </Card>)})}
                          </Row>

                        </div>
                      </Tab>
                   
                    </Tabs>
                </Col>
            </Row>
        </Container>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                    <Modal.Title>Thêm sản phẩm</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Thêm sản phẩm</h5>
                            <label>Ngành hàng</label><br />                       
                              <select onChange={(even) => {setNewCategory(even.target.value);}}>
                                {category && category.map((item) => {return(
                                      <option value={item.categoryName}>{item.categoryName}</option>
                                    )})}
                              </select><br />
                            

                            <label>Tên sản phẩm</label><br />
                            <input type="text"  onChange={(event) =>setNewProductName(event.target.value)} required/><br />

                            <label>Mô tả sản phẩm</label><br />
                            <input type="text"  onChange={(event) =>setNewDetail(event.target.value)} required/><br />

                            <label>Giá</label><br />
                            <input type="text"  onChange={(event) =>setNewPrice(event.target.value)} required/><br />

                            <label>Tồn kho</label><br />
                            <input type="number"  onChange={(event) =>setNewAvailable(event.target.value)} required/><br />
                        
                            <h5>Hình ảnh</h5>
                            <input
                              type="file"
                              accept="image/png, image/gif, image/jpeg"
                              onChange={(e) => setNewImage(e.target.files[0])}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Thoát
                        </Button>
                        <Button variant="primary" onClick={() => {handleClose(); uploadImage();}}>
                            Thêm sản phẩm
                        </Button>
                </Modal.Footer>
        </Modal>
        <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton>
                    <Modal.Title>Chỉnh sửa sản phẩm</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Chỉnh sửa sản phẩm</h5>
                            <label>Ngành hàng</label><br />
                            
                            <select onChange={(even) => {setFixCategory(even.target.value);}}>
                                {category && category.map((item) => {return(
                                      <option value={item.categoryName}>{item.categoryName}</option>
                                    )})}
                              </select><br />
                            {/* <label>Mã shop</label><br />
                            <input type="text" value={fixProduct.shopid}></input><br /> */}
                            <label>Tên sản phẩm</label><br />
                            <input type="text" placeholder={fixProduct.productName} onChange={(event) =>setFixProductName(event.target.value)}/><br />

                            <label>Mô tả sản phẩm</label><br />
                            <input type="text" placeholder={fixProduct.description} onChange={(event) =>setFixDetail(event.target.value)}/><br />

                            <label>Giá</label><br />
                            <input type="text" placeholder={fixProduct.price} onChange={(event) =>setFixPrice(event.target.value)}/><br />

                            <label>Tồn kho</label><br />
                            <input type="number" placeholder={fixProduct.available} onChange={(event) =>setFixAvailable(event.target.value)}/><br />
                            

                            <h5>Hình ảnh</h5>
                            <input
                              type="file"
                              accept="image/png, image/gif, image/jpeg"
                              onChange={(e) => setNewImage2(e.target.files[0])}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose2}>
                            Thoát
                        </Button>
                        <Button variant="primary" onClick={() => {handleClose2(); uploadImage2();}}>
                            Sửa sản phẩm
                        </Button>
                </Modal.Footer>
        </Modal>
        <Modal show={show3} onHide={handleClose3}>
            <Modal.Header closeButton>
                    <Modal.Title>Xem sản phẩm</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <label>Ngành hàng</label><br />
                            <p>{viewProduct.category}</p><br />

                            <label>ID sản phẩm</label><br />
                            <p>{viewProduct.id}</p><br />

                            <label>Tên sản phẩm</label><br />
                            <p>{viewProduct.name}</p><br />

                            <label>Mô tả sản phẩm</label><br />
                            <p>{viewProduct.description}</p><br />

                            <label>Giá</label><br />
                            <p>{viewProduct.price}</p><br />

                            <label>Tồn kho</label><br />
                            <p>{viewProduct.available}</p><br />
                            

                            <h5>Hình ảnh</h5>
                            <img src={viewProduct.image} style={{height: "10rem", width: "10rem"}}/>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose3}>
                            Thoát
                        </Button>
                </Modal.Footer>
        </Modal>
      
        </div>
    )
}