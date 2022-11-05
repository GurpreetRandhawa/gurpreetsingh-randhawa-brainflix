import "./Header.scss";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import search from "../../assets/Icons/search.svg";
import upload from "../../assets/Icons/upload.svg";

export default function Header() {
  return (
    <section className="header">
      <header className="header__container">
        <div className="header__logo">
          <img className="header__logo" src={logo} alt="Brainflix blue logo" />
        </div>
        <div className="header__searchbar-mohan">
          <div className="header__searchbar">
            <img className="header__search-icon" src={search} alt="" />
            <h4 className="header__search-text">Search</h4>
          </div>
          <div className="header__search-mohan"></div>
        </div>
        <div className="header__uploadbar">
          <div className="header__upload">
            <img
              className="header__upload-icon"
              src={upload}
              alt="Upload Icon"
            />
            <h4 className="header__upload-text">UPLOAD</h4>
          </div>
          <div className="header__upload-mohan"></div>
        </div>
      </header>
    </section>
  );
}
