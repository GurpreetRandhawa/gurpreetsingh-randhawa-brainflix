import "./Upload.scss";
import publish from "../../assets/Icons/publish.svg";
import { Link } from "react-router-dom";
import upload from "../../assets/images/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Upload() {
  let input1 = null;
  let flag1 = null;
  let input2 = null;
  let flag2 = null;
  let navigate = useNavigate();

  const BACK_END = process.env.REACT_APP_BACKEND_URL;

  const handleClick = (e) => {
    if (flag1 === true && flag2 === true) {
      axios
        .post(BACK_END + "/videos/", {
          title: input1,
          description: input2,
        })
        .then((res) => {
          setTimeout(() => {
            window.alert("Video uploaded successfully");
            navigate("/");
          }, 2000);
        })
        .catch((err) => console.log(err));
    } else {
      window.alert("Please enter details");
    }
  };

  const handleInputTitle = (event) => {
    flag1 = event.target.value && true;
    input1 = event.target.value;
  };
  const handleInputDes = (event) => {
    flag2 = event.target.value && true;
    input2 = event.target.value;
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
              onChange={handleInputTitle}
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
              onChange={handleInputDes}
              placeholder="Add a description to your video"
              required
            ></textarea>
          </div>
        </div>
        <div className="upload__buttons">
          <div className="upload__publish" onClick={handleClick}>
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
