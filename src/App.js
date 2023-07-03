import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import QrCode from "./components/QrCode";
import Signup from "./components/Signup";
import Dashboard from "./components/dashboard";

export default function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/qr" element={<QrCode/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}
