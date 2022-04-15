import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { useAuth } from "../../context/authContext";
export function Navbar() {
  const { isLoggedIn, logoutHandler } = useAuth();
  return (
    <div className="navbar">
      <div className="nav-left">
        <Link to="/">RobynTube</Link>
      </div>
      <div className="nav-right">
        <div className="nav-right-input">
          <input placeholder="Search" />
          <SearchIcon className="nav-right-icon" />
        </div>
        <NavLink to="/login">
          <button className={`btn nav-btn ${isLoggedIn() ? "hide-btn" : null}`}>
            Login
          </button>
        </NavLink>
        <button
          className={`btn nav-btn logout-btn ${
            isLoggedIn() ? null : "hide-btn"
          }`}
          onClick={() => {
            logoutHandler();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
