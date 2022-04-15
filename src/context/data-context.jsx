import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";


const DataContext = createContext();

const useData = () => useContext(DataContext);

const initialState = {
  defaultCategories: [],
  defaultVideos: [],
  filteredVideos: [],
  userDetails: { email: "", password: "" },
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

  
    default:
      break;
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
