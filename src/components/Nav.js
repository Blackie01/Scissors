import React from "react";
import "./Nav.css";
import Logo from "../assets/Logo (1).png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className="overall-nav">
      <img src={Logo} />

      <section className="mid-nav-section">
        <p>
          <select name="features" id="features">
            <option>Features</option>
            <p>Go home</p>
            <option value="link-shortening">Link Shortening</option>
            <option onchange="location = this./qr;" value="qr-codes">QR Codes</option>
            <option value="custom-urls">Custom URLs</option>
            <option value="data-analytics">Data Analytics</option>
          </select>
        </p>

        <p style={{marginLeft: '1.5rem'}}>Pricing</p>
        <p>Analytics</p>
        <p>FAQs</p>
      </section>

      <section className="login-signup-section">
      <Link style={{textDecoration: 'none'}} to='/login'>
        <p id="login-button">Login</p>
        </Link>

        <Link style={{textDecoration: 'none'}} to='/signup'>
        <p id="signup-button">Try for free</p>
        </Link>
      </section>
    </section>
  );
}

export default Navbar;
