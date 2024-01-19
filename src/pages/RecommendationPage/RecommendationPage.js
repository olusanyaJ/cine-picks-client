import Header from "../../components/Header/Header";
import "./RecommendationPage.scss";
import { Link } from "react-router-dom";
import Recommendations from "../../components/Recommendations/Recommendations";

const RecommendationPage = () => {
  const username = localStorage.getItem("username");
  const avatarSelected = localStorage.getItem("avatarSelected");

  return (
    <div className="main">
      <Header />
      <div className="recommendation-page">
        <div className="user">
          <img
            src={avatarSelected}
            alt="signed-in user avatar"
            className="user__avatar"
          />
          <h1 className="user__username">Welcome, {username}</h1>
        </div>
        <div className="recommendation-page__banner">
          <p className="recommendation-page__desc">Here are some suggestions</p>
          <Link to="/preferences" className="recommendation-page__edit-btn">
            Edit
          </Link>
        </div>

        <Recommendations />
      </div>
    </div>
  );
};

export default RecommendationPage;
