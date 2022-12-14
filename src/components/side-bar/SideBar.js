import "./SideBar.scss";
import { Link } from "react-router-dom";
export default function Sidebar({ videos }) {
  return (
    <section className="videoList">
      <div className="videoList__title">NEXT VIDEOS</div>
      {videos.map((video) => (
        <Link to={"/" + video.id} className="videoList__list" key={video.id}>
          <div className="videoList__image-container">
            <img className="videoList__image" src={video.image} alt="" />
          </div>
          <div className="videoList__video-text">
            <div className="videoList__video-title">{video.title}</div>
            <div className="videoList__channel">{video.channel}</div>
          </div>
        </Link>
      ))}
    </section>
  );
}
