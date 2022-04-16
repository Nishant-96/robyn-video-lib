import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "../../context/data-context";
import { addToWatchLater } from "../../utils";
import { useAuth } from "../../context/authContext";

import "./explore-card.css";

import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

export function ExploreCard({ videos }) {
  const { state, dispatch } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();
  const inWatchLater = state.watchLater.find((curr) => curr._id === videos._id);
  function watchLaterClickHandler() {
    token ? !inWatchLater && addToWatchLater(dispatch, token, videos) : navigate("/login");
  }
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
          <BookmarkAddIcon onClick={watchLaterClickHandler} />
        </div>
      </div>
    </div>
  );
}
