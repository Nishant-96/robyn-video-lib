import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

const DataContext = createContext();

const useData = () => useContext(DataContext);

const initialState = {
  defaultCategories: [],
  defaultVideos: [],
  filteredVideos: [],
  userDetails: { email: "", password: "" },
  searchInput: "",
  searchedVideos: [],
  watchLater: [],
  likedVideos: [],
  historyVideos: [],
  playlistModalState: {},
  playlistsArr: [],
};
function reducerFunc(state, action) {
  switch (action.type) {
    case "UPDATE_DEFAULT":
      return {
        ...state,
        defaultCategories: [...action.payload.categoryList],
        defaultVideos: [...action.payload.videoList],
        filteredVideos: [...action.payload.videoList],
      };
    case "EXPLORE_FILTER":
      state = {
        ...state,
        filteredVideos:
          action.payload.value === "All"
            ? [...state.defaultVideos]
            : [...state.defaultVideos].filter(
                (curr) => curr.category === action.payload.value
              ),
      };
      break;

    case "SET_SEARCH_INPUT":
      state = {
        ...state,
        searchInput: action.payload.value,
      };
      break;
    case "SEARCHED_VIDEO":
      state = {
        ...state,
        searchedVideos: [...state.defaultVideos].filter((curr) =>
          curr.title.toLowerCase().includes(state.searchInput.toLowerCase())
        ),
      };
      break;

    case "ADD_TO_WATCH_LATER":
      state = { ...state, watchLater: [...action.payload.watchlater] };
      break;

    case "REMOVE_FROM_WATCH_LATER":
      state = { ...state, watchLater: [...action.payload.watchlater] };
      break;
    case "ADD_TO_LIKED":
      state = { ...state, likedVideos: [...action.payload.likes] };
      break;

    case "REMOVE_FROM_LIKED":
      state = { ...state, likedVideos: [...action.payload.likes] };
      break;

    case "ADD_TO_HISTORY":
      state = { ...state, historyVideos: [...action.payload.history] };
      break;
    case "REMOVE_FROM_HISTORY":
      state = { ...state, historyVideos: [...action.payload.history] };
      break;
    case "REMOVE_ALL_HISTORY":
      state = { ...state, historyVideos: [...action.payload.history] };
      break;
    case "PLAYLIST_MODAL":
      state = {
        ...state,
        playlistModalState: action.payload,
      };
      break;

    case "CREATE_PLAYLIST":
   
      state = { ...state, playlistsArr: [...action.payload.playlists] };
      break;
    case "REMOVE_FROM_PLAYLIST":
      state = { ...state, playlistsArr: [...action.payload.playlists] };
      break;
    case "ADD_VIDEO_TO_PLAYLIST":
      state = {
        ...state,
        playlistsArr: [...state.playlistsArr].map((curr) => {
          if (curr._id === action.payload.id) {
            return { ...curr, videos: [...action.payload.videos] };
          }
          return { ...curr };
        }),
      };
      break;
    case "REMOVE_VIDEO_FROM_PLAYLIST":
      state = {
        ...state,
        playlistsArr: [...state.playlistsArr].map((curr) => {
          if (curr._id === action.payload.id) {
            return { ...curr, videos: [...action.payload.videos] };
          }
          return { ...curr };
        }),
      };
      break;
    default:
      break;
  }
  if (state.searchedVideos.length > 0) {
    state = { ...state, filteredVideos: [...state.searchedVideos] };
  }
  return state;
}

const DataProvider = function ({ children }) {
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  useEffect(() => {
    (async () => {
      try {
        const responseOne = await axios.get("/api/categories");
        const responseTwo = await axios.get("/api/videos");
        dispatch({
          type: "UPDATE_DEFAULT",
          payload: {
            categoryList: responseOne.data.categories,
            videoList: responseTwo.data.videos,
          },
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export { useData, DataProvider };
