import React from "react";

function Dashboard () {
    return (
        <section>
            <section className="dashboard-panel">
                <div id="dashboard-logo"></div>
                <div id="user-image-name"></div>
                <hr></hr>
                <section id="dashboard-panel-options">
                    <p>Link Shortener</p>
                    <p>Custom URL</p>
                    <p>QR Code</p>
                    <p>Analytics</p>
                    <p>Settings</p>
                </section>
            </section>

            <section className="dashboard-main-display">

            </section>

        </section>
    )
}

export default Dashboard;