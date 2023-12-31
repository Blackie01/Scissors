import React, { useState } from "react";
import "./Home.css";

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  };

  return (
    <div className="inputContainer">
      <div
        className="type-link-section"
        style={{
          justifyContent: "center",
          borderRadius: "25px",
          
        }}
       >
        <input
          className="type-link-input"
          style={{
            height: "3rem",
            borderRadius: "25px",
          }}
          type="text"
          placeholder="Paste a link to shorten it"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="type-link-button"
          style={{
            padding: "0 2rem",
            borderRadius: "25px",
            border: "none",
            backgroundColor: "#0065fe",
            color: "#fff",
            cursor: "pointer",
            height: "3rem",
            hover: { scale: "1.2" },
          }}
          type="button"
          onClick={handleClick}
        >
          Shorten
        </button>
      </div>
    </div>
  );
};

export default InputShortener;
