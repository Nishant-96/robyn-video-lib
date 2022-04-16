import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import "./single-play.css";
import { Sidenav } from "../../components";
import { addToLiked, addToWatchLater, fetchVideo } from "../../utils";
import { useAuth } from "../../context/authContext";
import { useData } from "../../context/data-context";

export function SinglePlay() {
  const { videoId } = useParams();
  const [video, setVideo] = useState({});
  const { token } = useAuth();
  const navigate = useNavigate();
  const { state, dispatch } = useData();

  const inWatchLater = state.watchLater.find((curr) => curr._id === video._id);
  const inLiked = state.likedVideos.find((curr) => curr._id === video._id);

  function likeHandler() {
    token ? !inLiked && addToLiked(dispatch, token, video) : navigate("/login");
  }
  function watchLaterClickHandler() {
    token
      ? !inWatchLater && addToWatchLater(dispatch, token, video)
      : navigate("/login");
  }

  useEffect(() => {
    (async () => {
      const fetchedVideo = await fetchVideo(videoId);
      setVideo(fetchedVideo);
    })();
  }, [videoId]);

  return (
    <div className="explore">
      <Sidenav />
      <div className="single-play-listing">
        <iframe
          className="sp-iframe"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen=""
        ></iframe>
        <div className="sp-listing-header">
          <h2>{video.title}</h2>
          <h5>{video.category}</h5>
          <p>{video.description}</p>
          <div className="sp-icons">
            <div className="sp-icon-sec">
              <ThumbUpIcon onClick={likeHandler} />
              <p>Like</p>
            </div>
            <div className="sp-icon-sec ">
              <WatchLaterIcon onClick={watchLaterClickHandler} />
              <p>Watch Later</p>
            </div>
            <div className="sp-icon-sec">
              <PlaylistAddIcon />
              <p>Add To Playlist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
