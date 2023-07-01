import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import QrCode from "./components/QrCode";

export default function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/qr" element={<QrCode/>}/>
      </Routes>
    </div>
  );
}
