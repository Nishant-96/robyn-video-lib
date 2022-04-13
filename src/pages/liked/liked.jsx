import React from "react";
import { Link } from "react-router-dom";
import { Sidenav } from "../../components";

export function Liked() {
  // for data set
  const flag = false;
  return (
    <div className="explore">
      <Sidenav />
      <h3>Liked Videos (Count)</h3>

      {flag === false ? (
        <div className="explore-listing">
          <div className="listing-empty">
            <div>Looks like you haven't liked anything yet.</div>
            <Link to="/explore">
              <button className="btn btn-primary empty-btn">Watch Now</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="explore-listing">{/* liked cards will go here */}</div>
      )}
    </div>
  );
}
