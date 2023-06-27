import React, { useState } from "react";
import InputShortener from "./InputShortener";
import Results from "./Results";
import Navbar from "./Nav";
import "./Home.css";

function Home() {
  const [inputValue, setInputValue] = useState("");

  return (
    <section>
      <div
        style={{
          width: 1058,
          height: 404.9,
          left: 191,
          top: 0,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: 199.1,
            height: 215.08,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#D60505",
            boxShadow: "700px 700px 700px ",
            borderRadius: 9999,
            filter: "blur(700px)",
          }}
        />
        <div
          style={{
            width: 199.1,
            height: 215.08,
            left: 270,
            top: 11.9,
            position: "absolute",
            background: "#067808",
            boxShadow: "700px 700px 700px ",
            borderRadius: 9999,
            filter: "blur(700px)",
          }}
        />
        <div
          style={{
            width: 271,
            height: 293,
            left: 787,
            top: 111.9,
            position: "absolute",
            background: "#EAC81F",
            boxShadow: "700px 700px 700px ",
            borderRadius: 9999,
            filter: "blur(700px)",
          }}
        />
      </div>
      <Navbar />

      <section className="jumbo-area">
        <h1>
          Optimize Your Online Experience with Our <br />
          Advanced <span id="shortening-span">URL Shortening</span> Solution
        </h1>

        <p>
        Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, <br/>
        branded links, and domain customization options to reinforce your brand presence and <br/> 
        enhance user engagement.
        </p>
      </section>
      <section className="home-shortener-function">
        <InputShortener setInputValue={setInputValue} inputValue={inputValue} />
        <Results inputValue={inputValue} />
      </section>
    </section>
  );
}

export default Home;
