import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import GetStartedPage from "./pages/GetStartedPage/GetStartedPage";
import RecommendationPage from "./pages/RecommendationPage/RecommendationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/get-started" element={<GetStartedPage />}></Route>
        <Route path="/recommendations" element={<RecommendationPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
