import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <p>Welcome</p>
              <h1>CinePicks Landing Page!</h1>
              <button className="App__btn">welcome</button>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
