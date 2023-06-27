import axios from "axios";
import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Loader from '../assets/loader.gif'

const Results = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenLink(res.data.result.full_short_link);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  if (loading) {
    return <p 
    style={{
      textAlign: 'center',
      height: '50px',
      scale: '0.1'
    }}
    className="noData"><img src={Loader}/></p>;
  }
  if (error) {
    return <p className="noData">Something went wrong :(</p>;
  }

  function copyText () {
    document.getElementById('copyTextFunction').innerHTML = 'Copied.'
  }

  return (
    <>
      {shortenLink && (
        <div className="result">
          <p
            style={{
              // textDecoration: "underline",
              // color: "blue",
              textAlign: 'center'
            }}
          >
            {shortenLink}
          </p>
          <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
            <button
              style={{ 
                cursor: "pointer", 
                display: 'flex',
                justifyContent: 'center',
                border: '1px solid #0065fe',
                backgroundColor: '#fff',
                margin: 'auto',
                padding: '0.6rem 1rem',
                borderRadius: '10px'
              
              }}
              className={copied ? "copied" : ""}
              id="copyTextFunction"
              onClick={copyText}
            >
              Copy
            </button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default Results;
