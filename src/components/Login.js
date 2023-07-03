import React from "react";
import './Login.css'
import { Link } from "react-router-dom";

function Login () {
    return (
        <section id="login-page">

<div
      className="overlays"
        style={{
          width: 1058,
          height: 404.9,
          left: 191,
          top: 0,
          // position: "absolute",
        }}
      >
        <div
      className="overlays"
          style={{
            width: 199.1,
            height: 215.08,
            left: 0,
            top: 0,
            // position: "absolute",
            background: "#D60505",
            boxShadow: "700px 700px 700px ",
            borderRadius: 9999,
            filter: "blur(700px)",
          }}
        />
        <div
      className="overlays"
          style={{
            width: 199.1,
            height: 215.08,
            left: 270,
            top: 11.9,
            // position: "absolute",
            background: "#067808",
            boxShadow: "700px 700px 700px ",
            borderRadius: 9999,
            filter: "blur(700px)",
          }}
        />
        <div
      className="overlays"
          style={{
            width: 271,
            height: 293,
            left: 787,
            top: 111.9,
            // position: "absolute",
            background: "#EAC81F",
            boxShadow: "700px 700px 700px ",
            borderRadius: 9999,
            filter: "blur(700px)",
          }}
        />
      </div>

      <section className='login-container'>
        <h4>Login Your <span><Link style={{textDecoration: 'none', color: '#0065fe'}} to="/">Scissors</Link></span> Account</h4>
      <form onSubmit>

        <input
        placeholder='enter email'
          type="email"
          id="email"
          name="email"
          required
          style={{
            height: '2.5rem',
            borderRadius: '10px',
            border: "1px solid #0065fe",
            paddingLeft: '2rem',
          }}
        />

        <input
        
        placeholder='enter password'
          type="password"
          id="password"
          name="password"
          required
          style={{
            height: '2.5rem',
            borderRadius: '10px',
            border: "1px solid #0065fe",
            paddingLeft: '2rem',
          }}
        />

        <p
        style={{height: '2.5rem', fontSize: 'smaller'}}
        id='UI-error-message'></p>

        <button 
         style={{
            height: '2.5rem',
            borderRadius: '10px',
            border: "1px solid #0065fe",
            paddingLeft: '2rem', 
            backgroundColor: "#0065fe",
            color:'white'
            
          }}
        type="submit">
            Login
            </button>
      </form>

      <p style={{height: '2.5rem', fontSize: 'smaller'}}>
        Don't have an account?<Link style={{textDecoration: 'none', color: '#0065fe'}} to='/signup'> Sign up</Link>
      </p>

        </section>

        </section>
    )
}

export default Login;