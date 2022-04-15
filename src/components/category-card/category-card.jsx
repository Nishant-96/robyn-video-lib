import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../../context/data-context";

import "./category-card.css";
export function CategoryCard({ category }) {
  const { dispatch } = useData();
  return (
    <Link
      to="/explore"
      onClick={() =>
        dispatch({
          type: "EXPLORE_FILTER",
          payload: { value: category.categoryName },
        })
      }
    >
      <div className="cat-card-wrapper">
        <img
          className="image-responsive cat-card-img"
          src={category.imgUrl}
          alt="category-card"
        />
        <video
          className="cat-card-video"
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
        >
          <source src={category.videoUrl} type="video/mp4" />
        </video>
      </div>
    </Link>
  );
}
