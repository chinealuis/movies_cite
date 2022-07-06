import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { get } from "../utils/urlClient";
import styles from "./movieDetails.module.css";
import { getImg } from "../utils/getImg";

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [movieId]); // hay q pasarle la dependencia pa q no se kede en ciclo infinito. Se va a repetir solo si movieId cambia

  if (isLoading) {
    return <Spinner />;
  }
  /*   if (!movie) {
    return null;
  } */

  const imgURL = getImg(movie.poster_path, 500);

  return (
    <div className={styles.detailsContainer}>
      <img
        src={imgURL}
        alt={movie.title}
        className={`${styles.col} ${styles.movieImage}`}
      />
      <div className={`${styles.col} ${styles.movieTexts}`}>
        <p>
          <strong>Title:</strong> {movie.title}{" "}
        </p>
        <p>
          <strong>Genres: </strong>{" "}
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
