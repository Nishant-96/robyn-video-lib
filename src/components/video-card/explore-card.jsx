import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useData } from "../../context/data-context";
import {
  addToHistory,
  addToWatchLater,
  removeFromWatchLater,
} from "../../utils";
import { useAuth } from "../../context/authContext";

import "./explore-card.css";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
export function ExploreCard({ videos }) {
  const { state, dispatch } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const inWatchLater = state.watchLater.find((curr) => curr._id === videos._id);

  const inHistory = state.historyVideos.find((curr) => curr._id === videos._id);

  function playlistClickHandler() {
    token
      ? dispatch({
          type: "PLAYLIST_MODAL",
          payload: { value: true, video: videos },
        })
      : navigate("/login", {
          replace: true,
          state: { from: location },
        });
  }
  function historyClickHandler() {
    navigate(`/singleplay/${videos._id}`);
    token && !inHistory && addToHistory(dispatch, token, videos);
  }
  function watchLaterClickHandler() {
    token
      ? !!inWatchLater
        ? removeFromWatchLater(dispatch, token, videos._id)
        : addToWatchLater(dispatch, token, videos)
      : navigate("/login", {
          replace: true,
          state: { from: location },
        });
  }

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
          <PlaylistAddIcon onClick={playlistClickHandler} />
          {!!inWatchLater ? (
            <WatchLaterIcon onClick={watchLaterClickHandler} />
          ) : (
            <WatchLaterOutlinedIcon onClick={watchLaterClickHandler} />
          )}
        </div>
      </div>
    </div>
  );
}
