import React, { useState } from "react"

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }

  return (
    <div className="inputContainer">
      <div 
      style={{
        display: 'flex',
        marginTop: '3rem',
        justifyContent: 'center'
      }}
      >
        <input
        style={{
          width: '30%',
          height: '3rem',
          borderRadius: '25px',
          border: '1px solid #0065fe',
          paddingLeft: '2rem'
          
        }}
          type="text"
          placeholder="Paste a link to shorten it"
          value={value}
          onChange={e => setValue(e.target.value)}  
        />
        <button 
        style={{
          marginLeft: '1.5rem',
          padding: '0 2rem',
          borderRadius: '25px',
          border: 'none',
          backgroundColor: '#0065fe',
          color: '#fff'
        }}
        type= 'button' 
        onClick={handleClick}
        >
          shorten
        </button>
      </div>
    </div>
  )
}

export default InputShortener;