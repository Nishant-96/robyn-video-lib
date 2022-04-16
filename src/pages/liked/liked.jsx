import React from "react";
import { Link } from "react-router-dom";
import { LikedCard, Sidenav } from "../../components";
import { useData } from "../../context/data-context";
export function Liked() {
  const { state } = useData();

  const flag = state.likedVideos.length > 0;

  return (
    <div className="explore">
      <Sidenav />
      <h3>Liked Videos ( {state.likedVideos.length} Videos )</h3>

      {!flag ? (
        <div className="explore-listing">
          <div className="listing-empty">
            <div>Looks like you haven't liked anything yet.</div>
            <Link to="/explore">
              <button className="btn btn-primary empty-btn">Watch Now</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="explore-listing">
          {state.likedVideos.map((curr) => (
            <LikedCard key={curr._id} videos={curr} />
          ))}
        </div>
      )}
    </div>
  );
}
