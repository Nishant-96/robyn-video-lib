import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import { ExploreCard, Sidenav } from "../../components";
import { Link } from "react-router-dom";

export function History() {
  const flag = false;
  return (
    <div className="explore">
      <Sidenav />
      <div className="history-header">
        <h3>Watch History </h3>
        <button className="btn btn-danger clear-btn">
          <DeleteIcon />
          <p>Clear</p>
        </button>
      </div>

      {flag === false ? (
        <div className="explore-listing">
          <div className="listing-empty">
            <div>Looks like you haven't started watching.</div>
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
