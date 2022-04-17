import React from "react";
import "./explore-card.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useData } from "../../context/data-context";
import { useAuth } from "../../context/authContext";
import { removePlaylist } from "../../utils";
import { Link } from "react-router-dom";
export function PlaylistFolderCard({ playlist }) {
  const { dispatch } = useData();
  const { token } = useAuth();

  function removeFromPlaylist(event) {
    event.stopPropagation();
    token && removePlaylist(dispatch, token, playlist._id);
  }
  return (
    <div className="explore-card">
      <div className="card card-shadow exp-card-wrapper">
        <Link to={`/playlist/${playlist._id}`}>
          <img
            className="image-responsive"
            src={`https://i.ytimg.com/vi/${playlist?.videos[0]?._id}/0.jpg`}
            alt="explore-card"
          />
        </Link>
        <h3>{playlist.title}</h3>
        <div className="explore-card-badge playlist-folder">
          <DeleteIcon onClick={removeFromPlaylist} />
        </div>
        <div className="pfc-overlay">
          {playlist.videos.length > 0 && `+${playlist.videos.length}`}
        </div>
      </div>
    </div>
  );
}
