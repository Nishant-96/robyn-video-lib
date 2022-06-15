import "./playlist-modal.css";

import React, { useState } from "react";
import { useData } from "../../context/data-context";
import CloseIcon from "@mui/icons-material/Close";
import { addToPlaylist, createPlaylist, removeFromPlaylist } from "../../utils";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
export function PlaylistModal() {
  const { state, dispatch } = useData();
  const [playlistState, setPlaylistState] = useState({
    title: "",
  });
  const navigate = useNavigate();
  const { token } = useAuth();

  function createPlaylistHandler() {
    token
      ? playlistState.title !== "" &&
        createPlaylist(dispatch, token, playlistState.title)
      : navigate("/login");
  }

  if (!state.playlistModalState.value) return null;
  return (
    <div
      className="modal-container"
      onClick={() => {
        dispatch({
          type: "PLAYLIST_MODAL",
          payload: { value: false },
        });
        setPlaylistState((prev) => ({
          ...prev,
          title: "",
        }));
      }}
    >
      <div
        className="modal modal-wrapper"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className="modal-header">
          <h3 className="modal-title">Save To</h3>
          <CloseIcon
            onClick={() => {
              dispatch({
                type: "PLAYLIST_MODAL",
                payload: { value: false },
              });
              setPlaylistState((prev) => ({
                ...prev,
                title: "",
              }));
            }}
          />
        </div>
        <div className="modal-body">
          {state.playlistsArr.map((curr) => (
            <label key={curr._id}>
              <input
                name="playlist-list"
                type="checkbox"
                id={curr._id}
                value={curr._id}
                checked={curr.videos.some(
                  (element) =>
                    element._id === state.playlistModalState.video._id
                )}
                onChange={(event) =>
                  event.target.checked
                    ? token &&
                      addToPlaylist(
                        dispatch,
                        token,
                        curr._id,
                        state.playlistModalState.video
                      )
                    : token &&
                      removeFromPlaylist(
                        dispatch,
                        token,
                        curr._id,
                        state.playlistModalState.video._id
                      )
                }
              />
              {curr.title}
            </label>
          ))}
          <div className="modal-body-creater">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Playlist Name"
              value={playlistState.title}
              onChange={(event) =>
                setPlaylistState((prev) => ({
                  ...prev,
                  title: event.target.value,
                }))
              }
            />
          </div>
        </div>

        <button
          className="btn btn-primary modal-button"
          onClick={createPlaylistHandler}
        >
          Create Playlist
        </button>
      </div>
    </div>
  );
}
