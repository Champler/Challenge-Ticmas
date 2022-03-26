import {  checkMovieByName, createMovie, getAllMovies, getMoviesWhere } from "../repositories/movieRepositorie";
import fs from "fs";
import path from "path";
import { parsedMovies } from "./csvToJson";
import { postGenre } from "./genreService";
import { postActors } from "./actorService";

const pathCsv = path.join(__dirname, "../uploads/currentcsv.csv");
const pathJson = path.join(__dirname, "../uploads/currentcsv.json");

let newMovie: any;

export const postMovie = async () => {
  const movies = await parsedMovies(pathCsv, pathJson);

  movies.forEach(async (movie) => {
    const exists = await checkMovieByName(movie.titulo);
    
    try {
      if (!exists) {
        const movieSorted: { title: string; director: string; year: number } = {
          title: movie.titulo,
          director: movie.director,
          year: movie.año,
        };
        
        newMovie = await createMovie(movieSorted);
        const actors = movie.actores.split(',')
        await postActors(actors, newMovie.dataValues.id)

        await postGenre(movie.genero, movie= newMovie.dataValues.id)        
      }
    } catch (error) {
      throw new Error(error)
    }
  });

  try {
    fs.unlinkSync(path.join(__dirname, "../uploads/currentcsv.csv"));
    fs.unlinkSync(path.join(__dirname, "../uploads/currentcsv.json"));
  } catch (err) {
    console.error(err);
  }

  return 'mmovies created succesfully';
};

export const getMovies = async (data) => {  
  const page = (data.page - 1) * 20
  const allMovies = await getMoviesWhere({page,search: data.search })
  
  allMovies.forEach(movie =>{
    movie.actors.forEach(actor => {

      actor.dataValues.actor_movie.dataValues = undefined
    })
  })
  return { movies: allMovies, page: data.page };
};


