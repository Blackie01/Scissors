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
          
          // marginTop: "3rem",
          justifyContent: "center",
        }}
      >
        <input
        className="type-link-input"
          style={{
            // width: "30%",
            height: "3rem",
            borderRadius: "25px",
            border: "1px solid #0065fe",
            // padding: "0 2rem",
          }}
          type="text"
          placeholder="Paste a link to shorten it"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
        className="type-link-button"
          style={{
            // marginLeft: "1.5rem",
            padding: "0 2rem",
            borderRadius: "25px",
            border: "none",
            backgroundColor: "#0065fe",
            color: "#fff",
            cursor: "pointer",
            height: '3rem',
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
