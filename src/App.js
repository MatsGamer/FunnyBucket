import "./CSS/App.css";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import FavoritesPage from "./Pages/FavoritesPage";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <h1>FunnyBucket</h1>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home/:message" element={<HomePage />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
