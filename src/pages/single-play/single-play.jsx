import React from "react";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

import "./single-play.css";
import { Sidenav } from "../../components";

export function SinglePlay() {
  return (
    <div className="explore">
      <Sidenav />
      <div className="single-play-listing">
        <iframe
          className="sp-iframe"
          src={`https://www.youtube.com/embed/UNnKAk79wws`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen=""
        ></iframe>
        <div className="sp-listing-header">
          <h2>Video Title</h2>
          <h5>Video Category</h5>
          <p>Description</p>
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
