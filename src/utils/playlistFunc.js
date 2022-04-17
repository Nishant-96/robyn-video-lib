import axios from "axios";

export const createPlaylist = async (dispatch, token, playlistTitle) => {
  try {
    const {
      data: { playlists },
    } = await axios.post(
      "/api/user/playlists",
      { playlist: { title: playlistTitle } },
      {
        headers: {
          authorization: token,
        },
      }
    );
  
    dispatch({ type: "CREATE_PLAYLIST", payload: { playlists } });
  } catch (error) {
    console.log(error);
  }
};

export const removePlaylist = async (dispatch, token, id) => {
  try {
    const {
      data: { playlists },
    } = await axios.delete(`/api/user/playlists/${id}`, {
      headers: {
        authorization: token,
      },
    });
    dispatch({ type: "REMOVE_FROM_PLAYLIST", payload: { playlists } });
  } catch (error) {
    console.log(error);
  }
};

export const addToPlaylist = async (dispatch, token, playlistId, video) => {
  try {
    const {
      data: {
        playlist: { videos },
      },
    } = await axios.post(
      `/api/user/playlists/${playlistId}`,
      {
        video,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    dispatch({
      type: "ADD_VIDEO_TO_PLAYLIST",
      payload: { id: playlistId, videos },
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeFromPlaylist = async (
  dispatch,
  token,
  playlistId,
  videoId
) => {
  try {
    const {
      data: {
        playlist: { videos },
      },
    } = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
      headers: {
        authorization: token,
      },
    });

    dispatch({
      type: "REMOVE_VIDEO_FROM_PLAYLIST",
      payload: { id: playlistId, videos },
    });
  } catch (error) {
    console.log(error);
  }
};
