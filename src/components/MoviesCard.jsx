import styles from "./MovieCard.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { getImg } from "../utils/getImg";


export function MovieCard({ movie }) {//este componente recibe las peliculas y lo hace una lista en html        
                 
    const imgURL = getImg(movie.poster_path, 300);

    return (
    <li className={styles.movieCard}>
      <Link to={"/movie/" + movie.id}>
        <img
          className={styles.movieImage}
          src={imgURL}
          alt={movie.title}
          width={230}
          height={345}
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
}
