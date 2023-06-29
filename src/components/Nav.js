import React from "react";
import "./Nav.css";
import Logo from "../assets/Logo (1).png";

function Navbar() {
  return (
    <section className="overall-nav">
      <img src={Logo} />

      <section className="mid-nav-section">
        <p id="url-text-for-nav">My URLS</p>
        <p>
          <select name="features" id="features">
            <option>Features</option>
            <option value="link-shortening">Link Shortening</option>
            <option value="qr-codes">QR Codes</option>
            <option value="custom-urls">Custom URLs</option>
            <option value="data-analytics">Data Analytics</option>
          </select>
        </p>

        <p style={{marginLeft: '1.5rem'}}>Pricing</p>
        <p>Analytics</p>
        <p>FAQs</p>
      </section>

      <section className="login-signup-section">
        <p id="login-button">Login</p>
        <p id="signup-button">Try for free</p>
      </section>
    </section>
  );
}

export default Navbar;
