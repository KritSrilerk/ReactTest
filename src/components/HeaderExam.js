import React from "react";
import logo from "../images/logo.jpg";
import Developer from "../pages/Developer";
import TaxiCal from "../pages/TaxiCal";
import { Link, Routes, Route } from "react-router-dom";

function HeaderExam() {
  return (
    <>
      <br />
      <img src={logo} />
      <h1>React Test 2023</h1>
      <div>
        <Link to="./Developer" style={{ padding: 10 }}>
          <span>ผู้พัฒนา</span>
        </Link>
        <Link to="./TaxiCal" style={{ padding: 10 }}>
          <span>คำนวณค่าแท็กซี่</span>
        </Link>
      </div>
      <br />
      <hr />
      <br />
      <Routes>
        <Route path="/Developer" element={<Developer />} />
        <Route path="/TaxiCal" element={<TaxiCal />} />
      </Routes>
    </>
  );
}

export default HeaderExam;
