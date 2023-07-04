import React, {useState} from "react";
import Logo from "../assets/Logo (1).png";
import "./dashboard.css";
import Avatar from "../assets/avatar.png";
import { Link } from "react-router-dom";
import LinkShortener from "./LinkShortener";
import QrCode from "./QrCode";

function Dashboard({ username }) {

    const [dashcontent, setDashcontent] = useState('')

   const dashDisplay = (option) => {
    setDashcontent(option)
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
