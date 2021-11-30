import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LandingPage from "./page/LandingPage";
import CocktailPage from "./page/CocktailPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cocktail/:id" element={<CocktailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
