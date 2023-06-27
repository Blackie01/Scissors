import React, { useState } from "react";
import InputShortener from "./InputShortener";
import Results from "./Results";
import Navbar from "./Nav";

function Home() {
  const [inputValue, setInputValue] = useState("");

  return (
    <section>
        <Navbar/>
      <section className="home-shortener-function">
        <InputShortener setInputValue={setInputValue} inputValue={inputValue} />
        <Results inputValue={inputValue} />
      </section>
    </section>
  );
}

export default Home;
