import Header from "../../components/Header/Header";
import "./RecommendationPage.scss";
import avatarOne from "../../assets/avatars/Ellipse1.png";
import imgg from "../../assets/card-shows.png";
import { Link } from "react-router-dom";

const RecommendationPage = () => {
  const handleClick = () => {
    console.log("working");
  };
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
          <Link
            to=""
            className="recommendation-page__edit-btn"
            onClick={handleClick}
          >
            Edit
          </Link>
        </div>

        <div className="recommendations">
          <div className="recommendation">
            <p className="recommendation__genre">Action-Thriller</p>
            <div className="recommendation__slider">
              <img
                src={imgg}
                alt="movie img-card"
                className="recommendation__img"
              />
              <img
                src={imgg}
                alt="movie img-card"
                className="recommendation__img"
              />
              <img
                src={imgg}
                alt="movie img-card"
                className="recommendation__img"
              />
              <img
                src={imgg}
                alt="movie img-card"
                className="recommendation__img"
              />
              <img
                src={imgg}
                alt="movie img-card"
                className="recommendation__img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationPage;
