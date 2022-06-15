import axios from "axios";
import { toast } from "react-toastify";
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
    toast.success(`Saved To Watch Later`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
    toast.success(`Removed From Watch Later`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    console.log(error);
  }
};
