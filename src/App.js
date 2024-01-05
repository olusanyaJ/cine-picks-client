import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import GetStartedPage from "./pages/GetStartedPage/GetStartedPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/get-started" element={<GetStartedPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
