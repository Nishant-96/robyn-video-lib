import React from "react";
import { Link, useParams } from "react-router-dom";
import { PlaylistCard, Sidenav } from "../../components";
import { useData } from "../../context/data-context";

import "./playlist.css";

export function SinglePlaylist() {
  const { playlistId } = useParams();
  const { state } = useData();

  const [playlistVideos] = state.playlistsArr.filter(
    (curr) => curr._id === playlistId
  );
  const flag = playlistVideos.videos.length > 0;
  return (
    <div className="explore">
      <Sidenav />
      <h3>Your Playlist Videos ( {playlistVideos.videos.length} Videos )</h3>

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
          {playlistVideos.videos.map((curr) => (
            <PlaylistCard
              key={curr._id}
              videos={curr}
              playlistId={playlistId}
            />
          ))}
        </div>
      )}
    </div>
  );
}
