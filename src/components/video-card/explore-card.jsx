import React from "react";

import "./explore-card.css";

import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { Link } from "react-router-dom";
export function ExploreCard({ videos }) {
  return (
    <div className="explore-card">
      <div className="card card-shadow exp-card-wrapper">
        <Link to={`/singleplay/${videos._id}`}>
          <img
            className="image-responsive"
            src={`https://i.ytimg.com/vi/${videos._id}/0.jpg`}
            alt="explore-card"
          />
        </Link>

        <h3>{videos.title}</h3>
        <p>{videos.category}</p>
        <div className="explore-card-badge">
          <PlaylistAddIcon />
          <BookmarkAddIcon />
        </div>
      </div>
    </div>
  );
}
