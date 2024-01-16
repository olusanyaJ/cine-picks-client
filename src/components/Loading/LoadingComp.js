import Header from "../Header/Header";
import "./LoadingComp.scss";

import loaderImg from "../../assets/images/HomeCinema1.png";

const LoadingComp = () => {
  return (
    <>
      <div className="main">
        <Header />
        <div className="loading">
          <p>Just a moment while we find some recommendations for you...</p>
          <div class="loader"></div>
          <img src={loaderImg} alt="" className="" />
        </div>
      </div>
    </>
  );
};

export default LoadingComp;
