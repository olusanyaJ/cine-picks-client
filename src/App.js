import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import GetStartedPage from "./pages/GetStartedPage/GetStartedPage";
import RecommendationPage from "./pages/RecommendationPage/RecommendationPage";
import FilmDetailsPage from "./pages/FilmDetailsPage/FilmDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/get-started" element={<GetStartedPage />}></Route>
        <Route path="/recommendations" element={<RecommendationPage />}></Route>
        <Route path="/film-details" element={<FilmDetailsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
