import axios from "axios";

export const addToWatchLater = async (dispatch, token, video) => {
  try {
    const {
      data: { watchlater },
    } = await axios.post(
      "/api/user/watchlater",
      { video },
      {
        headers: {
          authorization: token,
        },
      }
    );
    dispatch({ type: "ADD_TO_WATCH_LATER", payload: { watchlater } });
  } catch (error) {
    console.log(error);
  }
};

export const removeFromWatchLater = async (dispatch, token, id) => {
  try {
    const {
      data: { watchlater },
    } = await axios.delete(`/api/user/watchlater/${id}`, {
      headers: {
        authorization: token,
      },
    });
    dispatch({ type: "REMOVE_FROM_WATCH_LATER", payload: { watchlater } });
  } catch (error) {
    console.log(error);
  }
};
