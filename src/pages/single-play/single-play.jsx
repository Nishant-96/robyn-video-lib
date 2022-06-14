import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ShareIcon from "@mui/icons-material/Share";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import "./single-play.css";
import { PlaylistModal, Sidenav } from "../../components";
import {
  addToLiked,
  addToWatchLater,
  fetchVideo,
  removeFromLiked,
  removeFromWatchLater,
} from "../../utils";
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

  function playlistClickHandler() {
    dispatch({
      type: "PLAYLIST_MODAL",
      payload: { value: true, video: video },
    });
  }
  function likeHandler() {
    token
      ? !!inLiked
        ? removeFromLiked(dispatch, token, video._id)
        : addToLiked(dispatch, token, video)
      : navigate("/login");
  }
  function watchLaterClickHandler() {
    token
      ? !!inWatchLater
        ? removeFromWatchLater(dispatch, token, video._id)
        : addToWatchLater(dispatch, token, video)
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
      <PlaylistModal />
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
              {!!inLiked ? (
                <ThumbUpIcon onClick={likeHandler} />
              ) : (
                <ThumbUpOutlinedIcon onClick={likeHandler} />
              )}

              <p>Like</p>
            </div>
            <div className="sp-icon-sec ">
              {!!inWatchLater ? (
                <WatchLaterIcon onClick={watchLaterClickHandler} />
              ) : (
                <WatchLaterOutlinedIcon onClick={watchLaterClickHandler} />
              )}

              <p>Watch Later</p>
            </div>
            <div
              className="sp-icon-sec"
              onClick={() =>
                navigator.clipboard.writeText(
                  `https://robyntube.netlify.app/singleplay/${videoId}`
                )
              }
            >
              <ShareIcon />
              <p>Share</p>
            </div>
            <div className="sp-icon-sec">
              <PlaylistAddIcon onClick={playlistClickHandler} />
              <p>Add To Playlist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
