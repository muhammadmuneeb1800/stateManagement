import React from "react";
import { Route, Routes } from "react-router-dom";

import Frontend from "./Frontend";
import Dashboard from "./Dashboard";
import Auth from "./Auth";
import Header from "../components/Header";

export default function Index() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<Frontend />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route
          path="*"
          element={<h1 className="mt-5 text-center">404 Page Not Found</h1>}
        />
      </Routes>
      <h1 className="mt-5 text-center">Footer</h1>
    </>
  );
}
