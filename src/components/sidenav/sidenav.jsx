import React from "react";
import { NavLink } from "react-router-dom";

import "./sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import HistoryIcon from "@mui/icons-material/History";

export function Sidenav() {
  return (
    <div className="sidenav">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "sidenav-active" : undefined)}
      >
        <div className="sidenav-section">
          <HomeIcon />
          <p>Home</p>
        </div>
      </NavLink>
      <NavLink
        to="/explore"
        className={({ isActive }) => (isActive ? "sidenav-active" : undefined)}
      >
        <div className="sidenav-section">
          <ExploreIcon />
          <p>Explore</p>
        </div>
      </NavLink>
      <NavLink
        to="/playlist"
        className={({ isActive }) => (isActive ? "sidenav-active" : undefined)}
      >
        <div className="sidenav-section">
          <PlayCircleIcon />
          <p>Playlist</p>
        </div>
      </NavLink>

      <NavLink
        to="/watch-later"
        className={({ isActive }) => (isActive ? "sidenav-active" : undefined)}
      >
        <div className="sidenav-section">
          <WatchLaterIcon />
          <p>Watch Later</p>
        </div>
      </NavLink>

      <NavLink
        to="/liked"
        className={({ isActive }) => (isActive ? "sidenav-active" : undefined)}
      >
        <div className="sidenav-section">
          <ThumbUpAltIcon />
          <p>Liked</p>
        </div>
      </NavLink>

      <NavLink
        to="/history"
        className={({ isActive }) => (isActive ? "sidenav-active" : undefined)}
      >
        <div className="sidenav-section">
          <HistoryIcon />
          <p>History</p>
        </div>
      </NavLink>
    </div>
  );
}
