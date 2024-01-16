import Header from "../Header/Header";
import "./LoadingComp.scss";

import { useNavigate } from "react-router-dom";

import loaderImg from "../../assets/images/HomeCinema1.png";

const LoadingComp = () => {
  const navigate = useNavigate();

  const handleAnimationEnd = () => {
    navigate("/recommendations");
  };
  return (
    <>
      <div className="main">
        <Header />
        <div className="loading-comp" onAnimationEnd={handleAnimationEnd}>
          <p className="loading-comp__desc">
            Just a moment while we find some recommendations for you...
          </p>
          <div className="loading-comp__loader"></div>
          <img src={loaderImg} alt="" className="loading-comp__img" />
        </div>
      </div>
    </>
  );
};

export default LoadingComp;
