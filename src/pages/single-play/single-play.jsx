import React from "react";
import { useParams } from "react-router-dom";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

import "./single-play.css";
import { Sidenav } from "../../components";
import { useData } from "../../context/data-context";

export function SinglePlay() {
  const { videoId } = useParams();
  const { state } = useData();
  const [video] = state.defaultVideos.filter((curr) => curr._id === videoId);

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
              <ThumbUpIcon />
              <p>Like</p>
            </div>
            <div className="sp-icon-sec">
              <BookmarkAddIcon />
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
