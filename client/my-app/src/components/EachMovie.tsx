import React from 'react'
import Actor from './Actor';
import Director from './Director';
import Genre from './Genre';
import Title from './Title';
import Year from './Year';

interface MoviesParsed {
    allMovies: Array<allMovies>;
  }
  interface allMovies {
    movies: [];
  }

export default function EachMovie(movieParsed: MoviesParsed) {
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
                }
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
  )
}
