import React from "react";
import { Link } from "react-router-dom";
import { Sidenav } from "../../components";

export function WatchLater() {
  // for data set
  const flag = false;
  return (
    <div className="explore">
      <Sidenav />
      <h3>Watch Later (Count)</h3>

      {flag === false ? (
        <div className="explore-listing">
          <div className="listing-empty">
            <div>Looks like you haven't added anything in Watch Later yet.</div>
            <Link to="/explore">
              <button className="btn btn-primary empty-btn">Explore Now</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="explore-listing">
          {/* watch later cards will go here */}
        </div>
      )}
    </div>
  );
}
