import React from "react";
import { Link } from "react-router-dom";
import { Sidenav } from "../../components";

import "./playlist.css";
export function Playlist() {
  // for empty data
  const flag = false;
  return (
    <div className="explore">
      <Sidenav />
      <h3>Your Playlist (Count)</h3>

      {flag === false ? (
        <div className="explore-listing">
          <div className="listing-empty">
            <div>Your Playlist is empty.</div>
            <Link to="/explore">
              <button className="btn btn-primary empty-btn">Watch Now</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="explore-listing">{/* playlist cards here */}</div>
      )}
    </div>
  );
}
