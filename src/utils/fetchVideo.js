import axios from "axios";

export const fetchVideo = async (videoId) => {
  try {
    const {
      data: { video },
    } = await axios.get(`/api/video/${videoId}`);
    if (video) {
      return video;
    }
    return {};
  } catch (error) {
    console.log(error);
  }
};
