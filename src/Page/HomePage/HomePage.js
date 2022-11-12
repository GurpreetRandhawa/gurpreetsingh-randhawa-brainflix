import "./HomePage.scss";
import Hero from "../../components/hero/Hero";
import Main from "../../components/main/Main";
import SideBar from "../../components/side-bar/SideBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL, API_KEY } from "../../utils/api";

function HomePage() {
  const [videos, setVideos] = useState([]);
  const defaultVideoId = videos.length > 0 ? videos[0].id : null;
  const { videoId } = useParams();
  const videoToDisplay = videoId || defaultVideoId;

  useEffect(() => {
    axios
      .get(API_URL + "/videos" + API_KEY)
      .then((response) => {
        setVideos(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filteredVideos = videos.filter((video) => video.id !== videoToDisplay);

  return (
    <>
      <Hero videoId={videoToDisplay} />
      <section className="dividing-container">
        <Main videoId={videoToDisplay} />
        <SideBar videos={filteredVideos} />
      </section>
    </>
  );
}
export default HomePage;
