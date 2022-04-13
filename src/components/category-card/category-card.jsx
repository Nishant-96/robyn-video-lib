import React from "react";
import { Link } from "react-router-dom";

import "./category-card.css";
export function CategoryCard() {
  return (
    <Link to="/explore">
      <div className="cat-card-wrapper">
        <img
          className="image-responsive cat-card-img"
          src="/assets/images/disney.png"
          alt="category-card"
        />
        <video
          className="cat-card-video"
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
        >
          <source src="/assets/videos/disney.mp4" type="video/mp4" />
        </video>
      </div>
    </Link>
  );
}
