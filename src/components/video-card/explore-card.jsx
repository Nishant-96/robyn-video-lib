import React from "react";

import "./explore-card.css";

import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { Link } from "react-router-dom";
export function ExploreCard() {
  return (
    <div className="explore-card">
      <div class="card card-shadow exp-card-wrapper">
        <Link to="/singleplay">
          <img
            className="image-responsive"
            src="https://i.ytimg.com/vi/UNnKAk79wws/0.jpg"
            alt="explore-card"
          />
        </Link>

        <h3>Video Title</h3>
        <p>Video Category</p>
        <div className="explore-card-badge">
          <PlaylistAddIcon />
          <BookmarkAddIcon />
        </div>
      </div>
    </div>
  );
}
