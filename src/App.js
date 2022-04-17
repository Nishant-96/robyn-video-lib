import "./App.css";
import { Navbar, RequireAuth } from "./components";
import {
  Explore,
  Forgot,
  History,
  Home,
  Liked,
  Login,
  Playlist,
  SignUp,
  SinglePlay,
  SinglePlaylist,
  WatchLater,
} from "./pages";

import { Routes, Route, useLocation } from "react-router-dom";
import Mockman from "mockman-js";
import { useEffect } from "react";
import { useData } from "./context/data-context";
function App() {
  const { pathname } = useLocation();




  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route
          path="/playlist"
          element={
            <RequireAuth>
              <Playlist />
            </RequireAuth>
          }
        />
        <Route
          path="/history"
          element={
            <RequireAuth>
              <History />
            </RequireAuth>
          }
        />
        <Route
          path="/liked"
          element={
            <RequireAuth>
              <Liked />
            </RequireAuth>
          }
        />
        <Route
          path="/watch-later"
          element={
            <RequireAuth>
              <WatchLater />
            </RequireAuth>
          }
        />
        <Route path="/playlist/:playlistId" element={<SinglePlaylist />} />
        <Route path="/singleplay/:videoId" element={<SinglePlay />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
