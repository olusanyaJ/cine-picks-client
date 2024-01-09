import "./FilmDetailsPage.scss";
import Header from "../../components/Header/Header";
import RecommendationSlider from "../../components/RecommendationSlider/RecommendationSlider";
import { Link } from "react-router-dom";
import backIcon from "../../assets/icon-back.png";
import movieImg from "../../assets/images/Rectangle14.png";

const FilmDetailsPage = () => {
  return (
    <div className="main">
      <Header />
      <div className="details">
        <div className="details__banner">
          <Link to="/recommendations" className="details__icon">
            <img src={backIcon} alt="backIcon" />
          </Link>
          <p className="details__title">Shadow Protocol</p>
        </div>
        <img src={movieImg} alt="movieImg" className="details__img" />
        <p className="details__desc">
          In the heart of present-day New York, unfolds the intense story of
          Alex Mercer, an up-and-coming spy armed with cutting-edge technology
          and unwavering courage. Recruited by a mysterious government agency,
          Alex dives into a web of corruption reaching the highest echelons of
          power, orchestrated by a charismatic but nefarious mastermind. As the
          city's last line of defence, Alex navigates iconic landmarks, facing
          betrayal and shifting alliances.
        </p>
        <Link to="/" className="details__link">
          Watch Now
        </Link>

        <div className="recommendations">
          <div className="recommendation">
            <p className="recommendation__genre">Similar Recommendations</p>
            <RecommendationSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmDetailsPage;
