import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from "react-router-dom";
import './Signup.css'

const supabaseUrl = 'https://ombrrbjpqdrongsmxfvs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tYnJyYmpwcWRyb25nc214ZnZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgxNzk1ODcsImV4cCI6MjAwMzc1NTU4N30.K5eRqZCR4FKMZ4GTYLsgA8CwPXKZgLZJTVCxSe0d4eg';
const supabase = createClient(supabaseUrl, supabaseKey);

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const { user, error } = await supabase.auth.signUp({ email, password });

      if (error) {
        console.error(error.message);
      } else {
        console.log(user.email);
        // Redirect or show success message
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div id='signup-page'>
        <section className='signup-container'>
        <h3>Sign Up</h3>
      <form onSubmit={handleSignUp}>
        <input
        placeholder='Enter email'
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
        placeholder='Enter password'
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        /><br /><br />

        <button type="submit">Sign Up</button>
      </form>

        </section>
    </div>
  );
}

export default Signup;
