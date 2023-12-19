import { Link } from "react-router-dom";
import "./LandingPage.scss";
import imgHero from "../../assets/images/Horror1.png";

const LandingPage = () => {
  return (
    <div className="main">
      <div className="landing-page">
        <h1 className="landing-page__title">CinePicks</h1>
        <div className="landing-page__inner">
          <ul className="landing-page__list-left">
            <li className="landing-page__item">Select</li>
            <li className="landing-page__item">Discover</li>
            <li className="landing-page__item">Enjoy</li>
          </ul>
          <ul className="landing-page__list-right">
            <li className="landing-page__item">your preferences</li>
            <li className="landing-page__item">new entertainment</li>
            <li className="landing-page__item">the show</li>
          </ul>
        </div>
        <p className="landing-page__subtitle">Ready to watch?</p>
        <Link to="/get-started" className="landing-page__link">
          <button className="landing-page__btn">Start exploring</button>
        </Link>
        <img src={imgHero} alt="" className="landing-page__img" />
      </div>
    </div>
  );
};

export default LandingPage;
