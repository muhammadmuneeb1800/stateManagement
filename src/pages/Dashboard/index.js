import React from "react";
import { Route, Routes } from "react-router-dom";

import Users from "./Users";
import Services from "./Services";
import Carts from "./Carts";
import Home from "./Home";

export default function index() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<Users />} />
        <Route path="/services" element={<Services />} />
        <Route path="/carts" element={<Carts />} />
      </Routes>
    </>
  );
}
