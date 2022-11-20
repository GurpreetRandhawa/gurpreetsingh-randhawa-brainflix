import "./Main.scss";
import eye from "../../assets/Icons/views.svg";
import heart from "../../assets/Icons/likes.svg";
import comment from "../../assets/Icons/add_comment.svg";
import { useEffect, useState } from "react";
import axios from "axios";

// const BACK_END = "http://localhost:8080";
const BACK_END = process.env.REACT_APP_BACKEND_URL;

export default function Main({ videoId }) {
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

  const getTimeFull = (d) => {
    const da = new Date(d);
    const year = da.getFullYear();
    const month = da.getMonth() + 1;
    const date = da.getDate();
    return `${month > 9 ? "" : 0}${month}/${date > 9 ? "" : 0}${date}/${year}`;
  };

  return (
    <section className="mainCon">
      <div className="mainCon__title">{selectedVideo[0].title}</div>
      <div className="mainCon__videoInfo">
        <div className="mainCon__author-time">
          <div className="mainCon__author">By {selectedVideo[0].channel}</div>
          <div className="mainCon__time">
            {getTimeFull(selectedVideo[0].timestamp)}
          </div>
        </div>
        <div className="mainCon__views-likes">
          <div className="mainCon__views-icon">
            <img className="mainCon__views" src={eye} alt="" />
            <p className="mainCon__views-text">{selectedVideo[0].views}</p>
          </div>
          <div className="mainCon__likes-icon">
            <img className="mainCon__likes" src={heart} alt="" />
            <p className="mainCon__likes-text">{selectedVideo[0].likes}</p>
          </div>
        </div>
      </div>
      <div className="mainCon__descrip">{selectedVideo.description}</div>
      <div className="mainCon__total-comments">
        {selectedVideo[0].comments.length} Comments
      </div>
      <div className="mainCon__comment-box">
        <div className="mainCon__comment-icon"></div>
        <div className="mainCon__comment-form">
          <div className="mainCon__input">
            <div className="mainCon__label">JOIN THE CONVERSATION</div>
            <input
              className="mainCon__input-box"
              type="text"
              placeholder="Add a new comment"
            ></input>
          </div>
          <button className="mainCon__com-button">
            <img className="mainCon__button-image" src={comment} alt="" />
            COMMENT
          </button>
        </div>
      </div>

      {selectedVideo[0].comments.length > 0 ? (
        <div>
          {selectedVideo[0].comments.map((comment) => (
            <section className="mainCon__comm-list" key={comment.id}>
              <div className="mainCon__blank-image"></div>
              <div className="mainCon__text-right">
                <div className="mainCon__upper-text">
                  <div className="mainCon__comm-name">{comment.name}</div>
                  <div className="mainCon__comm-time">
                    {getTimeFull(comment.timestamp)}
                  </div>
                </div>
                <div className="mainCon__comm-full">{comment.comment}</div>
              </div>
            </section>
          ))}
        </div>
      ) : (
        {}
      )}
    </section>
  );
}
