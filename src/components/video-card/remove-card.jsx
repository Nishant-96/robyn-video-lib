import React from "react";
import "./explore-card.css";
import DeleteIcon from "@mui/icons-material/Delete";
export function RemoveCard() {
  return (
    <div className="explore-card">
      <div class="card card-shadow exp-card-wrapper">
        <img
          className="image-responsive"
          src="https://i.ytimg.com/vi/UNnKAk79wws/0.jpg"
          alt="explore-card"
        />

        <h3>Video Title</h3>
        <p>Video Category</p>
        <div className="explore-card-badge">
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
}
