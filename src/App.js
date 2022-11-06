import "./App.scss";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import SideBar from "./components/side-bar/SideBar";
import { useState } from "react";
import getVideoDetails, { getVideos } from "./utils/utils";

function App() {
  const [videoId, setVideoId] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
  const [videos, setVideos] = useState(getVideos(videoId));
  const [videoDetails, setVideoDetails] = useState(getVideoDetails(videoId));

  const handleClick = (videoIdClickedOn) => {
    setVideoId(videoIdClickedOn);
    setVideos(getVideos(videoIdClickedOn));
    setVideoDetails(getVideoDetails(videoIdClickedOn));
  };

  return (
    <>
      <Header />
      <Hero video={videoDetails} />
      <Main video={videoDetails} />
      <SideBar videos={videos} onClick={handleClick} />
    </>
  );
}

export default App;
