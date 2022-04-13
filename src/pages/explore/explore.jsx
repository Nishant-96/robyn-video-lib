import React from "react";
import { ExploreCard, Sidenav } from "../../components";

import "./explore.css";
export function Explore() {
  return (
    <div className="explore">
      <Sidenav />
      <div className="explore-cat-list">
        <div className="explore-chips active-chip">All</div>
        <div className="explore-chips">Marvel</div>
        <div className="explore-chips">Disney</div>
        <div className="explore-chips">Pixar</div>
        <div className="explore-chips">Starwars</div>
        <div className="explore-chips">DC</div>
      </div>
      <div className="explore-listing">
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
      </div>
    </div>
  );
}
