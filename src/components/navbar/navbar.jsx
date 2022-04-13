import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
export function Navbar() {
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
          <button className="btn nav-btn">LOGIN</button>
        </NavLink>
      </div>
    </div>
  );
}
