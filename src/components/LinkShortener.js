import React, { useState } from "react";
import InputShortener from "./InputShortener";
import Results from "./Results";

function LinkShortener() {
  const [inputValue, setInputValue] = useState("");

  return (
    <section style={{height: '8.6rem', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      {/* Styles for these are in Home.css */}
      <InputShortener setInputValue={setInputValue} inputValue={inputValue} />
      <Results inputValue={inputValue} />
    </section>
  );
}

export default LinkShortener;
