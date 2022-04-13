import React from "react";
import { Link } from "react-router-dom";
import { CategoryCard } from "../../components";

import "./home.css";
export function Home() {
  return (
    <div className="home">
      <div className="home-wrapper">
        <div className="home-background">
          <div className="home-background-title">
            <h2>Robyn Tube</h2>
            <h3>See the world of fiction come Alive</h3>
            <Link to="/explore">
              <button className="btn btn-primary home-btn">Watch Now</button>
            </Link>
          </div>
        </div>

        <div className="home-categories">
          <h2>Featured Categories</h2>
          <div className="home-card-container">
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </div>
        </div>
      </div>
    </div>
  );
}
