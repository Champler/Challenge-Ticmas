import React, { useEffect, useState } from "react";
import Actor from "./components/Actor";
import Director from "./components/Director";
import Genre from "./components/Genre";
import Title from "./components/Title";
import Year from "./components/Year";

interface MoviesParsed {
  allMovies: Array<allMovies>;
}

interface allMovies {
  movies: [];
}

export default function Movie() {
  const pageNumber = 1;
  const search = "a";
  const url = `http://localhost:3001/movie/getMovies?page=${pageNumber}&search=${search}`;

  const [movieParsed, setMovies] = useState<MoviesParsed>();

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setMovies(responseJSON);
    
  };
  
  useEffect(() => {
    fetchApi();
  }, []);
  
  
  return (
    <div>
      <ul>
        {!movieParsed
          ? "Cargando"
          : movieParsed.allMovies.movies.map(
              (
                movie: {
                  title: string;
                  year: string;
                  director: string;
                  movie_Genre: [];
                  actors: [];
                },
                index: number
              ) => (
                <div>
                  <Title movieTitle={movie.title} />
                  <Director movieDirector={movie.director} />
                  <Year movieYear={movie.year} />
                  <Actor movieActor={movie.actors} />
                  <Genre movieGenre={movie.movie_Genre} />
                </div>
              )
            )}
      </ul>
    </div>
  );
}
