import React, { useState } from "react";
import "./AdminNavbar.css";

export default function AdminNavbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="adminNavbar">

      {/* LOGO */}
      <div className="logo">
        <span>🩺 LifeLink Admin</span>
      </div>

      {/* MOBILE MENU ICON */}
      <div
        className="menu-icon"
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>

      {/* NAV LINKS */}
      <div className={`links ${open ? "active" : ""}`}>

        <a href="/admin" onClick={() => setOpen(false)}>
          Dashboard
        </a>

        <a href="/admin/requests" onClick={() => setOpen(false)}>
          Requests
        </a>

        <a href="/admin/camps" onClick={() => setOpen(false)}>
          Camps
        </a>

        <a href="/admin/users" onClick={() => setOpen(false)}>
          Users
        </a>

      </div>

      {/* LOGOUT */}
      <div className="logout">
        <button onClick={() => setOpen(false)}>
          Logout
        </button>
      </div>

    </nav>
  );
}