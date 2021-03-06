import axios from "axios";
import { toast } from "react-toastify";
export const addToHistory = async (dispatch, token, video) => {
  try {
    const {
      data: { history },
    } = await axios.post(
      "/api/user/history",
      { video },
      {
        headers: {
          authorization: token,
        },
      }
    );
    dispatch({ type: "ADD_TO_HISTORY", payload: { history } });
  } catch (error) {
    console.log(error);
  }
};

export const removeFromHistory = async (dispatch, token, id) => {
  try {
    const {
      data: { history },
    } = await axios.delete(`/api/user/history/${id}`, {
      headers: {
        authorization: token,
      },
    });
    dispatch({ type: "REMOVE_FROM_HISTORY", payload: { history } });
    toast.success(`Removed From History`, {
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

export const removeAllHistory = async (dispatch, token) => {
  try {
    const {
      data: { history },
    } = await axios.delete(`/api/user/history/all`, {
      headers: {
        authorization: token,
      },
    });
    dispatch({ type: "REMOVE_ALL_HISTORY", payload: { history } });
    toast.success(`Watch History Cleared`, {
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
