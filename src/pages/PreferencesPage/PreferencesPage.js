import "./PreferencesPage.scss";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { useState } from "react";
import LoadingComp from "../../components/Loading/LoadingComp";

const PreferencesPage = () => {
  const [genreSelected, setGenreSelected] = useState([]);
  const [regionSelected, setRegionSelected] = useState([]);
  const [durationSelected, setDurationSelected] = useState([]);

  const [movieTypeSelected, setMovieTypeSelected] = useState([]);
  const [preferencesSelectError, setPreferencesSelectError] = useState(false);

  const genreList = [
    "Action",
    "Adventure",
    "Animation",
    "Children & Family",
    "Classics",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Fantasy",
    "Historical",
    "Horror",
    "Musical",
    "Mystery",
    "Nature",
    "Romance",
    "Sci-fi",
    "Sports",
    "Thriller",
    "War",
  ];

  const regionList = [
    "Africa",
    "Asia",
    "South - America",
    "Eastern",
    "Western",
  ];
  const durationList = [
    "< 20 minutes",
    "< 60 minutes",
    "< 120 minutes",
    "3 - 4 hours",
    "4+ hours",
  ];
  const movieTypeList = ["TV Shows", "Movies", "Trailers"];

  const handleGenreSelect = (event) => {
    const genre = event.target.innerText;
    const updatedGenres = genreSelected.includes(genre)
      ? genreSelected.filter((selectedGenre) => selectedGenre !== genre)
      : [...genreSelected, genre];
    setGenreSelected(updatedGenres);
    setPreferencesSelectError(false);
  };

  const handleRegionSelect = (event) => {
    const region = event.target.innerText;
    const updatedRegions = regionSelected.includes(region)
      ? regionSelected.filter((selectedRegion) => selectedRegion !== region)
      : [...regionSelected, region];
    setRegionSelected(updatedRegions);
    setPreferencesSelectError(false);
  };

  const handleDurationSelect = (event) => {
    const duration = event.target.innerText;
    const updatedDurations = durationSelected.includes(duration)
      ? durationSelected.filter(
          (selectedDuration) => selectedDuration !== duration
        )
      : [...durationSelected, duration];
    setDurationSelected(updatedDurations);
    setPreferencesSelectError(false);
  };

  const handleMovieTypeSelect = (event) => {
    const movieType = event.target.innerText;
    const updatedmovieTypes = movieTypeSelected.includes(movieType)
      ? movieTypeSelected.filter(
          (selectedRegion) => selectedRegion !== movieType
        )
      : [...movieTypeSelected, movieType];
    setMovieTypeSelected(updatedmovieTypes);
    setPreferencesSelectError(false);
  };

  const isGenreSelected = (genre) => {
    return genreSelected.includes(genre);
  };

  const isRegionSelected = (region) => {
    return regionSelected.includes(region);
  };

  const isDurationSelected = (duration) => {
    return durationSelected.includes(duration);
  };

  const isMovieTypeSelected = (movieType) => {
    return movieTypeSelected.includes(movieType);
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();

    if (
      genreSelected.length === 0 ||
      regionSelected.length === 0 ||
      durationSelected.length === 0 ||
      movieTypeSelected.length === 0
    ) {
      setPreferencesSelectError(true);
    } else {
      console.log("genreSelected: ", genreSelected);
      console.log("regionSelected: ", regionSelected);
      console.log("durationSelected: ", durationSelected);
      console.log("movieTypeSelected: ", movieTypeSelected);
      setIsLoading(true);
    }
  };

  if (isLoading) {
    return <LoadingComp />;
  }

  return (
    <div className="main">
      <Header />
      <div className="preferences-page">
        <div className="preferences-page__container">
          <h1 className="preferences-page__title">
            What piques your fancy, Jane?
          </h1>
          <div className="preferences">
            <div className="preference">
              <p
                className={`preference__title ${
                  preferencesSelectError ? "error" : ""
                }`}
              >
                Choose a Genre
              </p>
              <ul className="preference__list">
                {genreList.map((genreListItem, index) => (
                  <li
                    key={index}
                    className={`preference__type ${
                      isGenreSelected(genreListItem) ? "selected" : ""
                    }`}
                    onClick={handleGenreSelect}
                  >
                    {genreListItem}
                  </li>
                ))}
              </ul>
            </div>

            <div className="preference">
              <p
                className={`preference__title ${
                  preferencesSelectError ? "error" : ""
                }`}
              >
                Choose a Region
              </p>
              <ul className="preference__list">
                {regionList.map((regionListItem, index) => (
                  <li
                    key={index}
                    className={`preference__type ${
                      isRegionSelected(regionListItem) ? "selected" : ""
                    }`}
                    onClick={handleRegionSelect}
                  >
                    {regionListItem}
                  </li>
                ))}
              </ul>
            </div>

            <div className="preference">
              <p
                className={`preference__title ${
                  preferencesSelectError ? "error" : ""
                }`}
              >
                Choose a Duration
              </p>
              <ul className="preference__list">
                {durationList.map((durationListItem, index) => (
                  <li
                    key={index}
                    className={`preference__type ${
                      isDurationSelected(durationListItem) ? "selected" : ""
                    }`}
                    onClick={handleDurationSelect}
                  >
                    {durationListItem}
                  </li>
                ))}
              </ul>
            </div>

            <div className="preference">
              <p
                className={`preference__title ${
                  preferencesSelectError ? "error" : ""
                }`}
              >
                Preferred Watch
              </p>
              <ul className="preference__list">
                {movieTypeList.map((movieTypeListItem, index) => (
                  <li
                    key={index}
                    className={`preference__type ${
                      isMovieTypeSelected(movieTypeListItem) ? "selected" : ""
                    }`}
                    onClick={handleMovieTypeSelect}
                  >
                    {movieTypeListItem}
                  </li>
                ))}
              </ul>
            </div>

            <Link to="" className="preferences__btn" onClick={handleClick}>
              Confirm Preferences
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferencesPage;
