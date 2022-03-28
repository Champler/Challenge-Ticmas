import React, { useEffect, useState } from "react";
import Actor from "./components/Actor";
import Director from "./components/Director";
import Genre from "./components/Genre";
import Title from "./components/Title";
import Year from "./components/Year";
import {NavLink} from 'react-router-dom'
import logo from '../src/utils/home_black_24dp.svg'

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
    <div style={{ backgroundColor: "#EEEEEE", height: "100%"}}>
      <NavLink aria-current="page" to="/">
      <img src={logo} alt='home' style= {{width: 50, height: 50}}/>
      </NavLink>
      <ul style={{ display: "flex", flexWrap: 'wrap', flexDirection: "row", gap: '15', justifyContent: "center", alignItems: "center"}}>
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
                <div style= {{margin: 20, border: '1px solid', borderRadius: 10, padding: 20, width:350, height: 350}}>
                  <Title movieTitle={movie.title} />
                  <Year movieYear={movie.year} />
                  <Director movieDirector={movie.director} />
                  <Actor movieActor={movie.actors} />
                  <Genre movieGenre={movie.movie_Genre} />
                </div>
              )
            )}
      </ul>
      
    </div>
  );
}
