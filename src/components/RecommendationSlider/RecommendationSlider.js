import "./RecommendationSlider.scss";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import imgg from "../../assets/card-shows.png";
import img1 from "../../assets/card-shows copy.png";
import img2 from "../../assets/card-shows (1).png";
import img3 from "../../assets/card-shows (2).png";

import { Link } from "react-router-dom";

const RecommendationSlider = () => {
  const movieImagesArray = [imgg, img1, img2, img3, imgg, img1, img2, img3];

  return (
    <>
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
            <Link to="/film-details" className="">
              <img
                src={image}
                alt={`movie img-card ${index}`}
                className="recommendation__img"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default RecommendationSlider;
