import React from "react";
import { Link } from "react-router-dom";
import { PlaylistFolderCard, Sidenav } from "../../components";
import { useData } from "../../context/data-context";

import "./playlist.css";
export function Playlist() {
  const { state } = useData();

  const flag = state.playlistsArr.length > 0;
  return (
    <div className="explore">
      <Sidenav />
      <h3>Your Playlist ( {state.playlistsArr.length} Playlist )</h3>

      {!flag ? (
        <div className="explore-listing">
          <div className="listing-empty">
            <div>Your Playlist is empty.</div>
            <Link to="/explore">
              <button className="btn btn-primary empty-btn">Watch Now</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="explore-listing">
          {state.playlistsArr.map((curr) => (
            <PlaylistFolderCard key={curr._id} playlist={curr} />
          ))}
          <div className="vdo-d-card"></div>
          <div className="vdo-d-card"></div>
          <div className="vdo-d-card"></div>
        </div>
      )}
    </div>
  );
}
