import React, { useEffect, useState } from "react";
import Actor from "./components/Actor";
import Director from "./components/Director";
import Genre from "./components/Genre";
import Title from "./components/Title";
import Year from "./components/Year";
import { NavLink } from "react-router-dom";
import logo from "../src/utils/home_black_24dp.svg";

interface MovieInt {
  title: string;
  year: string;
  director: string;
  movie_Genre: [];
  actors: [];
}

interface MoviesParsed {
  movies: Array<MovieInt>;
}


export default function Movie() {
  const [search, setSearch] = useState("a");
  const [pageNumber, setPageNumber] = useState(1);

  const url = `http://localhost:3001/movie/getMovies?page=${pageNumber}&search=${search}`;

  const [movieParsed, setMovies] = useState<MoviesParsed>();

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setMovies(responseJSON.allMovies);
  };

  useEffect(() => {
    fetchApi();
  }, [pageNumber, search]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <NavLink aria-current="page" to="/">
        <img src={logo} alt="home" style={{ width: 50, height: 50 }} />
      </NavLink>
      <input
        type="text"
        placeholder="Type your favorite movie"
        onChange={(e) => e.target.value !== "" && setSearch(e.target.value)}
        style={{ padding: 10, border: "1px solid", borderRadius: 10 }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={(e) =>
            pageNumber > 1 ? setPageNumber(pageNumber - 1) : setPageNumber(1)
          }
          style={{
            backgroundColor: "#1C658C",
            color: "#EEEEEE",
            padding: "3px",
            fontSize: 12,
            border: "1px solid",
            borderRadius: "5px",
            height: 40,
          }}
        >
          {" "}
          Volver{" "}
        </button>
        <p style={{ fontSize: 16, fontWeight: "bold" }}>{pageNumber}</p>
        <button
          onClick={(e) => setPageNumber(pageNumber + 1)}
          style={{
            backgroundColor: "#1C658C",
            color: "#EEEEEE",
            padding: "3px",
            fontSize: 12,
            border: "1px solid",
            borderRadius: "5px",
            height: 40,
          }}
        >
          {" "}
          Siguiente{" "}
        </button>
      </div>

      <button
        onClick={(e) => setPageNumber(1)}
        style={{
          backgroundColor: "#1C658C",
          color: "#EEEEEE",
          padding: "3px",
          fontSize: 12,
          border: "1px solid",
          borderRadius: "5px",
          height: 40,
        }}
      >
        Volver al inicio
      </button>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          gap: "15",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!movieParsed
          ? "Cargando"
          : movieParsed.movies.map(
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
                <div
                  style={{
                    margin: 20,
                    border: "1px solid",
                    borderRadius: 10,
                    padding: 20,
                    width: 350,
                    height: 380,
                  }}
                >
                  <Title movieTitle={movie.title} />
                  <Year movieYear={movie.year} />
                  <Director movieDirector={movie.director} />
                  {/* @ts-ignore */}
                  <Actor movieActor={movie.actors} />
                  {/* @ts-ignore */}
                  <Genre movieGenre={movie.movie_Genre} />
                </div>
              )
            )}
      </ul>
    </div>
  );
}
