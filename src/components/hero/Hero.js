import "./Hero.scss";
import fullscreen from "../../assets/Icons/fullscreen.svg";
import play from "../../assets/Icons/play.svg";
import volume from "../../assets/Icons/volume_up.svg";

export default function Hero({ video }) {
  return (
    <section className="hero">
      <video className="hero__video-player" poster={video.image}>
        <source src={video.video} type="video/mp4" />
      </video>
      <div className="hero__video-controls">
        <div className="hero__play">
          <img className="hero__play-button" src={play} alt="" />
        </div>
        <div className="hero__bar">
          <div className="hero__bar-progress"></div>
          <div className="hero__bar-time">0:00/{video.duration}</div>
        </div>
        <div className="hero__controls">
          <img className="hero__controls-screen" src={fullscreen} alt="" />
          <img className="hero__controls-volume" src={volume} alt="" />
        </div>
      </div>
    </section>
  );
}
