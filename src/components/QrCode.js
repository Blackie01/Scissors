import React, { useState } from "react";
import QRCode from "qrcode";
import './QrCode.css'

function QrCode() {
  //state to handle QR name
  const [nameInput, setNameInput] = useState("");
  const [qrName, setQrName] = useState("");

  // state to handle link
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState("");

  //onClick function for the button
  const GenerateQR = (event) => {
    event.preventDefault();
    
    // to set the name for the qr code to be used in the download name
    setQrName(nameInput);

    QRCode.toDataURL(
      url,
      {
        scale: 10,
        margin: 1,
        errorCorrectionLevel: "H",
      },
      (err, url) => {
        if (err) return console.error(err);
        console.log(url);
        setQrCode(url);
      }
    );

    setUrl("");
  };

  return (
    <section className="qr-container">
      <div className="qr-left-div">
        <p>Create QR Code</p>

<form>

        <input
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          placeholder="Give your QR Code a name"
          style={{
            // width: '100%',
            height: "2.5rem",
            borderRadius: "10px",
            border: "1px solid #0065fe",
            paddingLeft: "1rem",
          }}
        />

        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste your link here"
          style={{
            // width: '100%',
            height: "2.5rem",
            borderRadius: "10px",
            border: "1px solid #0065fe",
            paddingLeft: "1rem",
          }}
        />

        <button
        style={{
          height: "2.5rem",
          borderRadius: "10px",
          border: "1px solid #0065fe",
          backgroundColor: "#0065fe",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: '1.5rem'
        }}
        onClick={GenerateQR}>Get QR</button>
</form>

      </div>

      <div className="qr-right-div">
        {qrCode && (
          <div style={{border: '2px solid #0065fe', width: 'max-content', padding: '1rem', borderRadius: '10px'}}>
            <img id="qr-image" src={qrCode} />
            <a className="download-qr" href={qrCode} download={`${qrName}-qrCode.png`}>
              <p>Download QR Code</p>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default QrCode;
