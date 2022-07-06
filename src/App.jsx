import styles from "./App.module.css";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
        <Route path="*" element={<Navigate replace to= "/" />} />     {/* esta ruta es pa si el usuario pone un ruta erronea en la url lo redirccione al home */}
      </Routes>
    </BrowserRouter>
  );
}
