import React, { useState } from "react";
import Navbar from "./Nav";
import "./Home.css";
import Vector2 from "../assets/Vector 2.png";
import Line7 from "../assets/Line 7.png";
import Link2 from "../assets/link-2.png";
import vector3 from "../assets/Vector 3.png";
import LinkShortener from "./LinkShortener";
import { Link } from "react-router-dom";

function Home() {
  // unavailable snippet to unregistered users.
  function RegisterToStart() {
    return (
      <section style={{ height: "8.6rem" }}>
        <Link style={{ textDecoration: "none" }} to="/signup">
          <div className="unavailable-button">
            Register to access this feature.
          </div>
        </Link>
      </section>
    );
  }

  // Manage state for the snippet of features of the app
  const [snippet, setSnippet] = useState("select1");

  // toggle function for the snippet showcase
  const showSnippet = (select) => {
    setSnippet(select);
  };

  return (
    <section className="overhome-home">
      <Navbar />

      <div
        className="overlays"
        style={{
          width: 1058,
          height: 404.9,
          left: 191,
          top: 0,
          // position: "absolute",
        }}
      >
        <div
          className="overlays"
          style={{
            width: 199.1,
            height: 215.08,
            left: 0,
            top: 0,
            // position: "absolute",
            background: "#D60505",
            boxShadow: "700px 700px 700px ",
            borderRadius: 9999,
            filter: "blur(700px)",
          }}
        />
        <div
          className="overlays"
          style={{
            width: 199.1,
            height: 215.08,
            left: 270,
            top: 11.9,
            // position: "absolute",
            background: "#067808",
            boxShadow: "700px 700px 700px ",
            borderRadius: 9999,
            filter: "blur(700px)",
          }}
        />
        <div
          className="overlays"
          style={{
            width: 271,
            height: 293,
            left: 787,
            top: 111.9,
            // position: "absolute",
            background: "#EAC81F",
            boxShadow: "700px 700px 700px ",
            borderRadius: 9999,
            filter: "blur(700px)",
          }}
        />
      </div>

      <section className="jumbo-area">
        <h1>
          Optimize Your Online Experience with Our <br />
          Advanced{" "}
          <div id="shortening-span">
            URL Shortening <img className="colored-vector-img" src={vector3} />
          </div>{" "}
          Solution
        </h1>
        <p>
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, <br />
          branded links, and domain customization options to reinforce your
          brand presence and <br />
          enhance user engagement.
        </p>
      </section>

      <div className="homepage-feature-selector">
        <p
          className={snippet === "select1" ? "active" : ""}
          onClick={() => showSnippet("select1")}
        >
          Link Shortener
        </p>
        <p
          className={snippet === "select2" ? "active" : ""}
          onClick={() => showSnippet("select2")}
        >
          Custom Link
        </p>
        <p
          className={snippet === "select3" ? "active" : ""}
          onClick={() => showSnippet("select3")}
        >
          QR Code
        </p>
      </div>

      {snippet && (
        <section className="home-shortener-function">
          {snippet === "select1" && <LinkShortener />}
          {snippet === "select2" && <RegisterToStart />}
          {snippet === "select3" && <RegisterToStart />}
        </section>
      )}

      <section className="vector-image-section">
        <span>
          <img id="vector2" src={Vector2} />
        </span>

        <div className="image-container-1">
          <span className="image-container-span">
            <img className="image-item" src={Link2} />
            <img className="image-item" src={Link2} />
            <img className="image-item" src={Link2} />
            <img id="line-arrow" src={Line7} />
            <img className="image-item" src={Link2} />
          </span>

          <p>
            Seamlessly transform your long URLs into concise <br />
            and shareable links with just few clicks.
          </p>
        </div>
      </section>
    </section>
  );
}

export default Home;
