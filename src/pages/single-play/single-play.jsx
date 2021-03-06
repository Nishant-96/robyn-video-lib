import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

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
  const location = useLocation();
  const { state, dispatch } = useData();

  const inWatchLater = state.watchLater.find((curr) => curr._id === video._id);
  const inLiked = state.likedVideos.find((curr) => curr._id === video._id);

  function playlistClickHandler() {
    token
      ? dispatch({
          type: "PLAYLIST_MODAL",
          payload: { value: true, video: video },
        })
      : navigate("/login", {
          replace: true,
          state: { from: location },
        });
  }
  function likeHandler() {
    token
      ? !!inLiked
        ? removeFromLiked(dispatch, token, video._id)
        : addToLiked(dispatch, token, video)
      : navigate("/login", {
          replace: true,
          state: { from: location },
        });
  }
  function watchLaterClickHandler() {
    token
      ? !!inWatchLater
        ? removeFromWatchLater(dispatch, token, video._id)
        : addToWatchLater(dispatch, token, video)
      : navigate("/login", {
          replace: true,
          state: { from: location },
        });
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
            <div className="sp-icon-sec" onClick={likeHandler}>
              {!!inLiked ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
              <p>Like</p>
            </div>
            <div className="sp-icon-sec " onClick={watchLaterClickHandler}>
              {!!inWatchLater ? <WatchLaterIcon /> : <WatchLaterOutlinedIcon />}
              <p>Watch Later</p>
            </div>
            <div
              className="sp-icon-sec"
              onClick={() => {
                navigator.clipboard.writeText(
                  `https://robyntube.netlify.app/singleplay/${videoId}`
                );
                toast.success(`Link Copied To Clipboard`, {
                  position: "top-right",
                  autoClose: 1500,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              }}
            >
              <ShareIcon />
              <p>Share</p>
            </div>
            <div className="sp-icon-sec" onClick={playlistClickHandler}>
              <PlaylistAddIcon />
              <p>Add To Playlist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
