import { Link } from "react-router-dom";
import "./GetStartedPage.scss";
import imgBanner from "../../assets/images/image1.png";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";

const GetStartedPage = () => {
  return (
    <div className="main">
      <div className="get-started-page">
        <Header />
        <p>Get Started</p>
        <Input />
        <Link to="/" className="get-started-page__link">
          <span className="get-started-page__btn">Confirm details</span>
        </Link>
        <img src={imgBanner} alt="" className="get-started-page__img" />
      </div>
    </div>
  );
};

export default GetStartedPage;
