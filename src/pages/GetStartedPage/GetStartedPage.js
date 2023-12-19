import { Link } from "react-router-dom";
import "./GetStartedPage.scss";
import imgHero from "../../assets/images/Horror1.png";
import Header from "../../components/Header/Header";

const GetStartedPage = () => {
  return (
    <div className="main">
      <div className="get-started-page">
        <Header />
        <h1>Get Started Page</h1>
      </div>
    </div>
  );
};

export default GetStartedPage;
