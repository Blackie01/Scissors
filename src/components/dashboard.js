import React, {useState} from "react";
import Logo from "../assets/Logo (1).png";
import "./dashboard.css";
import Avatar from "../assets/avatar.png";
import { Link, useNavigate } from "react-router-dom";
import LinkShortener from "./LinkShortener";
import QrCode from "./QrCode";
import { createClient } from "@supabase/supabase-js";
import CustomLinkGenerator from "./CustomLinkShortener";


// my Supabase client
const supabaseUrl = "https://ombrrbjpqdrongsmxfvs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tYnJyYmpwcWRyb25nc214ZnZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgxNzk1ODcsImV4cCI6MjAwMzc1NTU4N30.K5eRqZCR4FKMZ4GTYLsgA8CwPXKZgLZJTVCxSe0d4eg";
const supabase = createClient(supabaseUrl, supabaseKey);


function Dashboard() {

  // state for the content that will show up in the dashboard
  const [dashcontent, setDashcontent] = useState('option1')

  // onClick function for content to be displayed on dashboard
 
  const dashDisplay = (option) => {
      setDashcontent(option)
   }
   

  //  navigation 
   const navigate = useNavigate()


  //  Sign out
  async function signOut() {
    const { error } = await supabase.auth.signOut()
    navigate('/')
  }
  

    return (
      <section className="dashboard-container">
        <section className="dashboard-panel">
          <div id="wrapper-1" className="wrapper-div">
              <Link to='/'>
              <img id="dashboard-logo" src={Logo} />
              </Link>
              
            <div id="user-image-name">
              <img id="profile-image" src={Avatar} />
              <span>User's Name</span>
            </div>
          </div>
  
          <hr id="dashboard-hr"></hr>
  
            <section id="dashboard-panel-options">
              <p 
              className={dashcontent === 'option1' ? 'active' : ''}
              onClick={() => dashDisplay('option1')}
              >URL Clip
              </p>
              <p>Custom URL</p>
              <p 
              className={dashcontent === 'option3' ? 'active' : ''}
              onClick={() => dashDisplay('option3')}
              >Make QR Code
              </p>
              <p>Analytics</p>
              <p>Settings</p>
              <p onClick={signOut}>Log out</p>
            </section>
        </section>
  
        <section className="dashboard-main-display">
          { dashcontent && (
              <section className="component-container">
                  {dashcontent === 'option1' && <LinkShortener/>}
                  
                  {dashcontent === 'option3' && <QrCode/>}
              </section>
          )}
        
  
        </section>
      </section>
    );
  

  
}

export default Dashboard;
