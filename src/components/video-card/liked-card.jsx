import React from "react";
import "./explore-card.css";

import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { Link } from "react-router-dom";
import { useData } from "../../context/data-context";
import { useAuth } from "../../context/authContext";
import { removeFromLiked } from "../../utils";

export function LikedCard({ videos }) {
  const { dispatch } = useData();
  const { token } = useAuth();

  function removeLikeHandler() {
    token && removeFromLiked(dispatch, token, videos._id);
  }
  return (
    <div className="explore-card">
      <div className="card card-shadow exp-card-wrapper">
        <Link to={`/singleplay/${videos._id}`}>
          <img
            className="image-responsive"
            src={`https://i.ytimg.com/vi/${videos._id}/0.jpg`}
            alt="explore-card"
          />
        </Link>

        <h3>{videos.title}</h3>
        <p>{videos.category}</p>
        <div className="explore-card-badge">
          <ThumbDownIcon onClick={removeLikeHandler} />
        </div>
      </div>
    </div>
  );
}
