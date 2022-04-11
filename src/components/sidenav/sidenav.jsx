import React from "react";

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
      <div className="sidenav-section">
        <HomeIcon />
        <p>Home</p>
      </div>
      <div className="sidenav-section">
        <ExploreIcon />
        <p>Explore</p>
      </div>

      <div className="sidenav-section">
        <PlayCircleIcon />
        <p>Playlist</p>
      </div>
      <div className="sidenav-section">
        <WatchLaterIcon />
        <p>Watch Later</p>
      </div>
      <div className="sidenav-section">
        <ThumbUpAltIcon />
        <p>Liked</p>
      </div>
      <div className="sidenav-section">
        <HistoryIcon />
        <p>History</p>
      </div>
    </div>
  );
}
