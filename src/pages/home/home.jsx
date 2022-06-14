import React from "react";
import { useData } from "../../context/data-context";
import { Link } from "react-router-dom";
import { CategoryCard } from "../../components";

import "./home.css";
export function Home() {
  const { state, dispatch } = useData();

  return (
    <div className="home">
      <div className="home-wrapper">
        <div className="home-background">
          <div className="home-background-title">
            <h2>Robyn Tube</h2>
            <h3>See the world of fiction come Alive</h3>
            <Link to="/explore">
              <button
                className="btn btn-primary home-btn"
                onClick={() =>
                  dispatch({
                    type: "EXPLORE_FILTER",
                    payload: { value: "All" },
                  })
                }
              >
                Watch Now
              </button>
            </Link>
          </div>
        </div>

        <div className="home-categories">
          <h2>Featured Categories</h2>
          <div className="home-card-container">
            {state.defaultCategories.map((curr) => (
              <CategoryCard key={curr._id} category={curr} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
