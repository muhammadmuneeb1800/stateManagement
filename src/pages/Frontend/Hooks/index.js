import React from "react";
import { Route, Routes } from "react-router-dom";

import UseState from "./UseState";
import UseEffect from "./UseEffect";
import UseReducer from "./UseReducer";
import UseContext from "./UseContext";

export default function index() {
  return (
    <>
      <Routes>
        <Route path="/usestate" element={<UseState />} />
        <Route path="/useeffect" element={<UseEffect />} />
        <Route path="/usereducer" element={<UseReducer />} />
        <Route path="/usecontext" element={<UseContext />} />
      </Routes>
    </>
  );
}
