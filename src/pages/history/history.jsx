import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import { HistoryCard, Sidenav } from "../../components";
import { Link } from "react-router-dom";
import { useData } from "../../context/data-context";
import { useAuth } from "../../context/authContext";
import { removeAllHistory } from "../../utils";
export function History() {
  const { state, dispatch } = useData();
  const { token } = useAuth();

  const flag = state.historyVideos.length > 0;

  function clearAllHandler() {
    token && flag && removeAllHistory(dispatch, token);
  }
  return (
    <div className="explore">
      <Sidenav />
      <div className="history-header">
        <h3>Watch History </h3>
        <button className="btn btn-danger clear-btn" onClick={clearAllHandler}>
          <DeleteIcon />
          <p>Clear</p>
        </button>
      </div>

      {!flag ? (
        <div className="explore-listing">
          <div className="listing-empty">
            <div>Looks like you haven't started watching.</div>
            <Link to="/explore">
              <button className="btn btn-primary empty-btn">Watch Now</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="explore-listing">
          {state.historyVideos.map((curr) => (
            <HistoryCard key={curr._id} videos={curr} />
          ))}
          <div className="vdo-d-card"></div>
          <div className="vdo-d-card"></div>
          <div className="vdo-d-card"></div>
        </div>
      )}
    </div>
  );
}
