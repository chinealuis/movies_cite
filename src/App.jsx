import styles from "./App.module.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  Link } from "react-router-dom";
import { MovieDetails } from "./pages/movieDetails";
import { LandingPage } from "./pages/landingPage";


export function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <h1 className={styles.title}> Movies </h1>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
