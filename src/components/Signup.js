import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useNavigate, Link } from "react-router-dom";
import './Signup.css'
import Loader from '../assets/loader.gif'


const supabaseUrl = 'https://ombrrbjpqdrongsmxfvs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tYnJyYmpwcWRyb25nc214ZnZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgxNzk1ODcsImV4cCI6MjAwMzc1NTU4N30.K5eRqZCR4FKMZ4GTYLsgA8CwPXKZgLZJTVCxSe0d4eg';
const supabase = createClient(supabaseUrl, supabaseKey);

function Signup({setUsername}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [getUsername, setGetUsername] = useState('')

//   loading state
const [loading, setLoading] = useState(false);


  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();

    if (password.length < 6) {

        document.getElementById('password-req-message').innerHTML = 'Password must be 6 characters or more'

    } else {

        try {
      setLoading(true);

            const { user, error } = await supabase.auth.signUp({ email, password });
      
            if (error) {
              console.error(error.message);
            } else {
              console.log(user);
              // Redirect or show success message
              navigate("/dashboard");
          setUsername(getUsername)

            }
          } catch (error) {
            console.error(error.message);
          } finally {
            setLoading(false);
          }

        };

    }

    function LoadingL () {
        return   <p 
        style={{
            textAlign: 'center',
            height: '50px',
            scale: '0.1'
          }}
        className="noData"><img src={Loader}/></p>
    }

    if (loading) {
        document.getElementById('sign-in-button').innerHTML = `${LoadingL}`
      
      }
     
  

  return (
    
    <div id='signup-page'>
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

        <section className='signup-container'>
        <h4>Create Your <span><Link style={{textDecoration: 'none', color: '#0065fe'}} to="/">Scissors</Link></span> Account</h4>
      <form onSubmit={handleSignUp}>

      <input
        className='signup-input'
        placeholder='enter username'
          type="text"
          id="username"
          name="username"
          required
          value={getUsername}
          style={{
            height: '2.5rem',
            borderRadius: '10px',
            border: "1px solid #0065fe",
            paddingLeft: '2rem',
          }}
          onChange={(event) => setGetUsername(event.target.value)}
        />

        <input
        className='signup-input'
        placeholder='enter email'
          type="email"
          id="email"
          name="email"
          required
          value={email}
          style={{
            height: '2.5rem',
            borderRadius: '10px',
            border: "1px solid #0065fe",
            paddingLeft: '2rem',
          }}
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
        
        className='signup-input'
        placeholder='enter password'
          type="password"
          id="password"
          name="password"
          required
          value={password}
          style={{
            height: '2.5rem',
            borderRadius: '10px',
            border: "1px solid #0065fe",
            paddingLeft: '2rem',
          }}
          onChange={(event) => setPassword(event.target.value)}
        />

        <p
        style={{height: '2.5rem', fontSize: 'smaller'}}
        id='password-req-message'></p>

        <button 
         style={{
            height: '2.5rem',
            borderRadius: '10px',
            border: "1px solid #0065fe",
            paddingLeft: '2rem', 
            backgroundColor: "#0065fe",
            color:'white'
            
          }}
          id='sign-in-button'
        type="submit">
            Sign Up
            </button>
      </form>

      <p style={{height: '2.5rem', fontSize: 'smaller'}}>
        Already have an account? <Link style={{textDecoration: 'none', color: '#0065fe'}} to='/login'>Login</Link>
      </p>

        </section>
    </div>
  );
}

export default Signup;
