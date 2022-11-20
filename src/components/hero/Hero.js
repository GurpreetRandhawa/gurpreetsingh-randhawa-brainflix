import "./Hero.scss";
import fullscreen from "../../assets/Icons/fullscreen.svg";
import play from "../../assets/Icons/play.svg";
import volume from "../../assets/Icons/volume_up.svg";
import { useEffect, useState } from "react";
import axios from "axios";

// const BACK_END = "http://localhost:8080";
const BACK_END = process.env.REACT_APP_BACKEND_URL;

export default function Hero({ videoId }) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    if (!videoId) return;

    axios
      .get(BACK_END + "/videos/" + videoId)
      .then((response) => {
        setSelectedVideo(response.data);
      })
      .catch((err) => console.log(err));
  }, [videoId]);

  if (!selectedVideo) {
    return <div>Loading</div>;
  }
  return (
    <section className="hero">
      <video
        className="hero__video-player"
        poster={`${BACK_END}/images/${selectedVideo.image}`}
      >
        <source src={""} type="video/mp4" />
      </video>
      <div className="hero__video-controls">
        <div className="hero__play">
          <img className="hero__play-button" src={play} alt="" />
        </div>
        <div className="hero__bar">
          <div className="hero__bar-progress"></div>
          <div className="hero__bar-time">0:00/{selectedVideo.duration}</div>
        </div>
        <div className="hero__controls">
          <img className="hero__controls-screen" src={fullscreen} alt="" />
          <img className="hero__controls-volume" src={volume} alt="" />
        </div>
      </div>
    </section>
  );
}
