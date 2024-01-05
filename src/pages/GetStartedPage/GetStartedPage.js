import { Link } from "react-router-dom";
import "./GetStartedPage.scss";
import avatarOne from "../../assets/avatars/Ellipse1.png";
import avatarTwo from "../../assets/avatars/Ellipse2.png";
import avatarThree from "../../assets/avatars/Ellipse3.png";
import avatarFour from "../../assets/avatars/Ellipse4.png";
import avatarFive from "../../assets/avatars/Ellipse5.png";
import avatarSix from "../../assets/avatars/Ellipse6.png";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import InputSelect from "../../components/InputSelect/InputSelect";

const GetStartedPage = () => {
  return (
    <div className="main">
      <Header />
      <div className="get-started-page">
        <div className="get-started-page__left-wrapper">
          <p className="get-started-page__title">Get Started</p>
          <Input type="text" name="username" label="Username" />
          <InputSelect name="language-select" label="Choose a Language" />
        </div>
        <div className="get-started-page__right-wrapper">
          <p className="get-started-page__subtitle">Choose Avatar</p>
          <div className="img-contaienr">
            <img src={avatarOne} alt="" className="get-started-page__avatar" />
            <img src={avatarTwo} alt="" className="get-started-page__avatar" />
            <img
              src={avatarThree}
              alt=""
              className="get-started-page__avatar"
            />
            <img src={avatarFour} alt="" className="get-started-page__avatar" />
            <img src={avatarFive} alt="" className="get-started-page__avatar" />
            <img src={avatarSix} alt="" className="get-started-page__avatar" />
          </div>
        </div>
        <Link to="/" className="get-started-page__link">
          <span className="get-started-page__btn">Confirm details</span>
        </Link>
      </div>
    </div>
  );
};

export default GetStartedPage;
