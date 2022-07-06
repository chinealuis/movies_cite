import { MovieCard } from "./MoviesCard";
import styles from "./MoviesGrids.module.css";
import React, { useEffect, useState } from "react";
import { get } from "../utils/urlClient";
import { Spinner } from "./Spinner";
import { useQuery } from "../hooks/useQuery";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isloading, setisloading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  
  const query = useQuery();
  const search = query.get("search");                        //se guarda el valor del paramatro de busqueda de la url

  useEffect(() => {
    setisloading(true);                                     //para q muetre el spinning
    const searchUrl = search                                // si la condicion "search" se cumple
      ? "/search/movie?query=" + search + "&page=" + page   // asigno este valor a URL pa buscar un pelicula o cargar otra pag nueva
      : "/discover/movie?page=" + page;                     // de lo contrario le paso este q es el discover mas la nueva pag del scroll infinito

    get(searchUrl).then((data) => {                         //metodo para traer de la API
                                                             
    setMovies((prevMovies)=> prevMovies.concat(data.results)); //se concatenan las peliculas anteriores a las nuevas
    setisloading(false);                                     //para quitar el spinning
    sethasMore (data.page < data.total_pages);              //compara si ya llego al final de las pags. son parametros q entrega la api  
   
    });
  }, [search, page]);                                       // se pasa como dependencia el valor "search" y "page" pa q se ejecute el useEffect si cambia uno d estos valores
                                                            //De lo contrario hay q pasar la dependencia vacia pq sino se keda en ciclo infinito

  if (movies.length === 0 && !isloading){
    return <Empty/>
  }
  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      next={() =>setPage((prevPage)=>prevPage + 1)}
      loader={<Spinner />}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} /> // paso como parametro el objeto movie q contiene el mapeo de las peliculas
        ))}
      </ul>
    </InfiniteScroll>
  );
}
