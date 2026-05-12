import React from "react";
import Navbar from "../components/AdminNavbar";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  return (
    <div className="dashboard">
      <Navbar />

      <div className="content">

        {/* HERO */}
        <div className="hero">
          <img
            src="https://images.unsplash.com/photo-1584982751601-97dcc096659c"
            alt="medical"
          />

          <div className="heroText">
            <h1>LifeLink Admin Panel</h1>
            <p>Manage verified medical donation requests securely</p>
          </div>
        </div>

        {/* STATS */}
        <div className="stats">
          <div className="card"><h3>Total Requests</h3><p>120</p></div>
          <div className="card"><h3>Approved</h3><p className="green">85</p></div>
          <div className="card"><h3>Rejected</h3><p className="red">15</p></div>
          <div className="card"><h3>Users</h3><p>300</p></div>
        </div>

        {/* NAV CARDS */}
        <div className="navCards">

          <div className="navCard">
            <h2>Request Management</h2>
            <p>Approve or reject medical requests</p>
            <button>Open</button>
          </div>

          <div className="navCard">
            <h2>Blood Camps</h2>
            <p>Create and manage donation camps</p>
            <button>Open</button>
          </div>

        </div>

      </div>

      {/* RECENT ACTIVITY */}
      <div className="activityBox">
        <h2>Recent Activity</h2>

        <ul>
          <li>🟢 New medical request submitted (5 min ago)</li>
          <li>✅ Request approved by admin (20 min ago)</li>
          <li>🩸 New blood camp created in Colombo</li>
          <li>⚠️ Request pending verification</li>
        </ul>
      </div>

      {/* FOOTER */}
        <footer className="footer">
        <p>© 2026 LifeLink | HackElite 3.0</p>
        <span>Verified Medical Donation Platform</span>
        </footer>
    </div>

    
  );
}