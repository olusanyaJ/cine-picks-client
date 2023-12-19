import { Link } from "react-router-dom";
import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <div className="main">
      <div className="landing-page">
        <h1 className="landing-page__title">CinePicks</h1>
        <div className="box">
          <ul className="box1">
            <li className="list">Select</li>
            <li className="list">discover</li>
            <li className="list">enjoy</li>
          </ul>
          <ul className="box2">
            <li className="list">your preferences</li>
            <li className="list">new entertainment</li>
            <li className="list">the show</li>
          </ul>
        </div>
        <p className="landing-page__subtitle">Ready to watch?</p>
        <Link to="/home" className="link">
          <button className="text">Start exploring</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
