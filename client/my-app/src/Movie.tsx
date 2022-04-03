import React, { useEffect, useState } from "react";
import Actor from "./components/Actor";
import Director from "./components/Director";
import Genre from "./components/Genre";
import Title from "./components/Title";
import Year from "./components/Year";
import { NavLink } from "react-router-dom";
import logo from "../src/utils/home_black_24dp.svg";
import { Button, Card, FloatingLabel, Form } from "react-bootstrap";

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
  const [movieParsed, setMovies] = useState<MoviesParsed>();
  const url = `http://localhost:3001/movie/getMovies?page=${pageNumber}&search=${search}`;

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setMovies(responseJSON.allMovies);
  };

  useEffect(() => {
    fetchApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <img src={logo} alt="home" style={{ width: 50, height: 50, marginBottom: 15 }} />
      </NavLink>
      <FloatingLabel
        controlId="floatingInput"
        label="Your favorite movie"
        className="mb-3"
      >
        <Form.Control
          type="text"
          onChange={(e) =>
            e.target.value !== "" &&
            setSearch(e.target.value.toLocaleLowerCase())
          }
          placeholder="Your favorite movie"
        />
      </FloatingLabel>
      <p className="lead"><strong>{pageNumber}</strong></p>
      <div className="btn-group">
        <Button
          type="submit"
          onClick={(e) =>
            pageNumber > 1 ? setPageNumber(pageNumber - 1) : setPageNumber(1)
          }
          variant="primary"
          size="lg"
        >
          {"<"}
        </Button>
        <Button
          type="submit"
          onClick={(e) => setPageNumber(1)}
          variant="primary"
          size="sm"
        >
          Back to page 1
        </Button>

        <Button
          type="submit"
          onClick={(e) => setPageNumber(pageNumber + 1)}
          variant="primary"
          size="lg"
        >
          {">"}
        </Button>
      </div>

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
                <div>
                  <Card
                    style={{ width: "22rem", height: "22rem", margin: "15px" }}
                  >
                    <Card.Body>
                      <Card.Title>
                        <Title movieTitle={movie.title} />
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        <Year movieYear={movie.year} />
                      </Card.Subtitle>
                      <Card.Subtitle className="mb-2 text-muted">
                        <Director movieDirector={movie.director} />
                      </Card.Subtitle>
                      <Card.Subtitle className="mb-2 text-muted">
                        <Genre movieGenre={movie.movie_Genre} />
                      </Card.Subtitle>
                      <Card.Text>
                        <Actor movieActor={movie.actors} />
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              )
            )}
      </ul>
    </div>
  );
}
