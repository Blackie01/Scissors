import React, { useState } from "react";
import InputShortener from "./components/InputShortener";
import Results from "./components/Results";



export default function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      This is an app
      <InputShortener setInputValue={setInputValue} inputValue={inputValue} />
      <Results inputValue={inputValue} />
    </div>
  );
}
