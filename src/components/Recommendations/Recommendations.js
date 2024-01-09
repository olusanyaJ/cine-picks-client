import RecommendationSlider from "../RecommendationSlider/RecommendationSlider";
import "./Recommendations.scss";

const Recommendations = () => {
  const movieGenreArray = [
    "Action-Thriller",
    "Action-Crime",
    "Thriller",
    "Action-Mystery",
  ];
  return (
    <div className="recommendations">
      {movieGenreArray.map((genre, index) => (
        <div className="recommendation" key={index}>
          <p className="recommendation__genre">{genre}</p>
          <RecommendationSlider />
        </div>
      ))}
    </div>
  );
};

export default Recommendations;
