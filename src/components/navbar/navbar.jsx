import React from "react";
import "./navbar.css";

import SearchIcon from "@mui/icons-material/Search";
export function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">RobynTube</div>
      <div className="nav-right">
        <div className="nav-right-input">
          <input placeholder="Search" />
          <SearchIcon className="nav-right-icon" />
        </div>
        <button className="btn">LOGIN</button>
      </div>
    </div>
  );
}

