import React from "react";
import { Link } from "react-router-dom";
import { RemoveCard, Sidenav } from "../../components";
import { useData } from "../../context/data-context";

export function WatchLater() {
  const { state } = useData();

  const flag = state.watchLater.length > 0;
  return (
    <div className="explore">
      <Sidenav />
      <h3>Watch Later ({state.watchLater.length} Videos)</h3>

      {!flag ? (
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
          {state.watchLater.map((curr) => (
            <RemoveCard key={curr._id} videos={curr} />
          ))}
        </div>
      )}
    </div>
  );
}
