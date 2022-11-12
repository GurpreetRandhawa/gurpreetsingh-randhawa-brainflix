import "./Upload.scss";
import publish from "../../assets/Icons/publish.svg";
import { Link } from "react-router-dom";
import upload from "../../assets/images/Upload-video-preview.jpg";

export default function Upload() {
  const alert = (e) => {
    window.alert("Video uploaded successfully");
  };
  return (
    <section className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <form className="upload__form">
        <div className="upload__form-container">
          <div className="upload__side-left">
            <p className="upload__side-title">VIDEO THUMBNAIL</p>
            <div className="upload__side-container">
              <img
                className="upload__side-thumbnail"
                src={upload}
                alt="Blue bike"
              />
            </div>
          </div>
          <div className="upload__side-right">
            <label className="upload__label" htmlFor="title">
              TITLE YOUR VIDEO
            </label>
            <input
              className="upload__input"
              id="title"
              name="title"
              placeholder="Add a title to your video"
              required
            ></input>
            <label className="upload__label" htmlFor="text">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className="upload__textarea"
              id="text"
              name="text"
              placeholder="Add a description to your video"
              required
            ></textarea>
          </div>
        </div>
        <div className="upload__buttons">
          <div className="upload__publish" onClick={alert}>
            <img
              className="upload__publish-button"
              src={publish}
              alt="Publish Icon"
            />
            <h4 className="upload__publish-text">PUBLISH</h4>
          </div>
          <Link to="/" className="upload__cancel">
            <h4 className="upload__cancel-text">CANCEL</h4>
          </Link>
        </div>
      </form>
    </section>
  );
}
