import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import GetStartedPage from "./pages/GetStartedPage/GetStartedPage";
import RecommendationPage from "./pages/RecommendationPage/RecommendationPage";
import FilmDetailsPage from "./pages/FilmDetailsPage/FilmDetailsPage";
import PreferencesPage from "./pages/PreferencesPage/PreferencesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/get-started" element={<GetStartedPage />}></Route>
        <Route path="/recommendations" element={<RecommendationPage />}></Route>
        <Route path="/film-details" element={<FilmDetailsPage />}></Route>
        <Route path="/preferences" element={<PreferencesPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
