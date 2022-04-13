import "./App.css";
import { Navbar } from "./components";
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
  WatchLater,
} from "./pages";

import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Explore /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/history" element={<History />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="/history" element={<History />} />
        <Route path="/singleplay" element={<SinglePlay />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
