import React from "react";
import { ExploreCard, PlaylistModal, Sidenav } from "../../components";
import { useData } from "../../context/data-context";

import "./explore.css";
export function Explore() {
  const { state, dispatch } = useData();
  return (
    <div className="explore">
      <Sidenav />
      <div className="explore-cat-list">
        <div
          className={`explore-chips`}
          onClick={() =>
            dispatch({
              type: "EXPLORE_FILTER",
              payload: { value: "All" },
            })
          }
        >
          All
        </div>
        <PlaylistModal />
        {state.defaultCategories.map((curr) => (
          <div
            key={curr._id}
            className={`explore-chips`}
            onClick={() =>
              dispatch({
                type: "EXPLORE_FILTER",
                payload: { value: curr.categoryName },
              })
            }
          >
            {curr.categoryName}
          </div>
        ))}
      </div>
      <div className="explore-listing">
        {state.filteredVideos.map((curr) => (
          <ExploreCard key={curr._id} videos={curr} />
        ))}
      </div>
    </div>
  );
}
