import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "../../context/data-context";
import { addToHistory, addToWatchLater } from "../../utils";
import { useAuth } from "../../context/authContext";

import "./explore-card.css";

import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
export function ExploreCard({ videos }) {
  const { state, dispatch } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();
  const inWatchLater = state.watchLater.find((curr) => curr._id === videos._id);

  const inHistory = state.historyVideos.find((curr) => curr._id === videos._id);

  function historyClickHandler() {

    navigate(`/singleplay/${videos._id}`);
    token && !inHistory && addToHistory(dispatch, token, videos);
  }
  function watchLaterClickHandler() {
    token
      ? !inWatchLater && addToWatchLater(dispatch, token, videos)
      : navigate("/login");
  }
  // to={`/singleplay/${videos._id}`}
  // onClick={historyClickHandler}
  return (
    <div className="explore-card">
      <div className="card card-shadow exp-card-wrapper">
        <div onClick={historyClickHandler}>
          <img
            className="image-responsive"
            src={`https://i.ytimg.com/vi/${videos._id}/0.jpg`}
            alt="explore-card"
          />
        </div>

        <h3>{videos.title}</h3>
        <p>{videos.category}</p>
        <div className="explore-card-badge">
          <PlaylistAddIcon />
          <WatchLaterIcon onClick={watchLaterClickHandler} />
        </div>
      </div>
    </div>
  );
}
