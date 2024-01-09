import Header from "../../components/Header/Header";
import "./RecommendationPage.scss";
import avatarOne from "../../assets/avatars/Ellipse1.png";
import { Link } from "react-router-dom";
import Recommendations from "../../components/Recommendations/Recommendations";

const RecommendationPage = () => {
  return (
    <div className="main">
      <Header />
      <div className="recommendation-page">
        <div className="user">
          <img
            src={avatarOne}
            alt="signed-in user avatar"
            className="user__avatar"
          />
          <h1 className="user__username">Welcome, Jane</h1>
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
