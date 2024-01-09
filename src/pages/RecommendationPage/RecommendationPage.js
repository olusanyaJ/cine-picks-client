import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../../components/Header/Header";
import "./RecommendationPage.scss";
import avatarOne from "../../assets/avatars/Ellipse1.png";
import imgg from "../../assets/card-shows.png";
import img1 from "../../assets/card-shows copy.png";
import img2 from "../../assets/card-shows (1).png";
import img3 from "../../assets/card-shows (2).png";

import { Link } from "react-router-dom";

const RecommendationPage = () => {
  const movieImagesArray = [imgg, img1, img2, img3, imgg, img1, img2, img3];

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
            <Swiper
              spaceBetween={16}
              slidesPerView={3.49}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
              // loop
              autoplay={{ delay: 2000 }}
            >
              {movieImagesArray.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`movie img-card ${index}`}
                    className="recommendation__img"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationPage;
