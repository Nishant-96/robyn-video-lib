import axios from "axios";
import { toast } from "react-toastify";
export const addToLiked = async (dispatch, token, video) => {
  try {
    const {
      data: { likes },
    } = await axios.post(
      "/api/user/likes",
      {
        video,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    dispatch({ type: "ADD_TO_LIKED", payload: { likes } });
    toast.success(`Added To Liked Videos`, {
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

export const removeFromLiked = async (dispatch, token, id) => {
  try {
    const {
      data: { likes },
    } = await axios.delete(`/api/user/likes/${id}`, {
      headers: {
        authorization: token,
      },
    });
    dispatch({ type: "REMOVE_FROM_LIKED", payload: { likes } });
    toast.success(`Removed From Liked Videos`, {
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
