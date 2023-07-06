import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

// my Supabase client
const supabaseUrl = "https://ombrrbjpqdrongsmxfvs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tYnJyYmpwcWRyb25nc214ZnZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgxNzk1ODcsImV4cCI6MjAwMzc1NTU4N30.K5eRqZCR4FKMZ4GTYLsgA8CwPXKZgLZJTVCxSe0d4eg";
const supabase = createClient(supabaseUrl, supabaseKey);

function Login() {
  // state for email input data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // function to navigate to dashboard onSubmit
  const navigate = useNavigate();

  // login auth function
  const handleSignin = async (e) => {
    e.preventDefault();

    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      document.getElementById("UI-error-message").style.color = "red";
      document.getElementById("UI-error-message").innerHTML =
        "Email or password incorrect. Try again";
    } else {
      document.getElementById("UI-error-message").style.color = "green";
      document.getElementById("UI-error-message").innerHTML =
        "Login successful.";
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    }
  };

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

      <section className="login-container">
        <h4>
          Login Your{" "}
          <span>
            <Link style={{ textDecoration: "none", color: "#0065fe" }} to="/">
              Scissors
            </Link>
          </span>{" "}
          Account
        </h4>
        <form onSubmit={handleSignin}>
          <input
            placeholder="enter email"
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            style={{
              height: "2.5rem",
              borderRadius: "10px",
              border: "1px solid #0065fe",
              paddingLeft: "2rem",
            }}
          />

          <input
            placeholder="enter password"
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              height: "2.5rem",
              borderRadius: "10px",
              border: "1px solid #0065fe",
              paddingLeft: "2rem",
            }}
          />

          <p
            style={{
              height: "2.5rem",
              fontSize: "smaller",
              textAlign: "center",
            }}
            id="UI-error-message"
          ></p>

          <button
            style={{
              height: "2.5rem",
              borderRadius: "10px",
              border: "1px solid #0065fe",
              paddingLeft: "2rem",
              backgroundColor: "#0065fe",
              color: "white",
            }}
            type="submit"
          >
            Login
          </button>
        </form>

        <p style={{ height: "2.5rem", fontSize: "smaller" }}>
          Don't have an account?
          <Link
            style={{ textDecoration: "none", color: "#0065fe" }}
            to="/signup"
          >
            {" "}
            Sign up
          </Link>
        </p>
      </section>
    </section>
  );
}

export default Login;
