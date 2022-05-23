import Home from './screen/Customer/Home.js';
import Tinhnang from './screen/Customer/Tinhnang.js';
import Banggia from './screen/Customer/Banggia.js';
import Dangky from './screen/Customer/Dangky.js';
import Dashboard from './screen/Shop/Dashboard.js';
import Donhang from './screen/Shop/Donhang.js';
import Sanpham from './screen/Shop/Sanpham.js';
import Gianhang from './screen/Shop/Gianhang.js';
import Khachhang from './screen/Shop/Khachhang.js';
import Taikhoan from './screen/Shop/Taikhoan.js';
import Dashboardadmin from './screen/Admin/Dashboardadmin.js';
import Quanlydata from './screen/Admin/Quanlydata.js';
import Quanlydichvu from './screen/Admin/Quanlydichvu.js';
import Quanlyshop from './screen/Admin/Quanlyshop.js';
import Login from './screen/Login.js';
import Register from './screen/Register.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/admin" element={<Dashboardadmin />}> </Route>
        <Route path="/quan-ly-dich-vu" element={<Quanlydichvu />}> </Route>
        <Route path="/quan-ly-data" element={<Quanlydata />}> </Route>
        <Route path="/quan-ly-shop" element={<Quanlyshop />}> </Route>
        <Route path="/tinh-nang" element={<Tinhnang />}> </Route>
        <Route path="/dashboard" element={<Dashboard />}> </Route>
        <Route path="/don-hang" element={<Donhang />}> </Route>
        <Route path="/san-pham" element={<Sanpham />}> </Route>
        <Route path="/gian-hang" element={<Gianhang />}> </Route>
        <Route path="/khach-hang" element={<Khachhang />}> </Route>
        <Route path="/tai-khoan" element={<Taikhoan />}> </Route>
        <Route path="/bang-gia" element={<Banggia />}> </Route>
        <Route path="/dang-ky" element={<Dangky />}> </Route>
        <Route path="/login" element={<Login />}> </Route>
        <Route path="/register" element={<Register />}> </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

