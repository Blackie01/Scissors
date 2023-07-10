import React, {useState} from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import QrCode from "./components/QrCode";
import Signup from "./components/Signup";
import Dashboard from "./components/dashboard";
import Login from "./components/Login";
import CustomLinkGenerator from "./components/CustomLinkShortener";
// import PrivateRoute from "./components/AuthCheck";

export default function App() {
 const [username, setUsername] = useState('')

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/qr" element={<QrCode/>}/>
        <Route setUsername={setUsername} username={username} path="/signup" element={<Signup/>}/>
        {/* <Route element={<PrivateRoute/>} path="/authcheck" exact/> */}


        <Route username={username} path="/dashboard" element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/custom' element={<CustomLinkGenerator/>}/>
      </Routes>
    </div>
  );
}
