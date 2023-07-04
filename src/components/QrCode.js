import React, { useState } from "react";
import QRCode from "qrcode";

function QrCode() {
  //state to handle QR name
  const [nameInput, setNameInput] = useState("");
  const [qrName, setQrName] = useState("");

  // state to handle link
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState("");

  //onClick function for the button
  const GenerateQR = () => {
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
    <section>
      <p>Create QR Code</p>

      <input
        type="text"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
        placeholder="Give your QR Code a name"
      />

      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Paste your link here"
      />

      <button onClick={GenerateQR}>Get QR</button>

      <div>
        {qrCode && (
          <>
            <img id="qr-image" src={qrCode} />
            <a href={qrCode} download={`${qrName}-qrCode.png`}>
              Download QR Code
            </a>
          </>
        )}
      </div>
    </section>
  );
}

export default QrCode;
