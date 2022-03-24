import {  checkMovieByName, createMovie, getAllMovies, getMoviesWhere } from "../repositories/movieRepositorie";
import fs from "fs";
import path from "path";
import { parsedMovies } from "./csvToJson";
import { postGenre } from "./genreService";

const pathCsv = path.join(__dirname, "../uploads/currentcsv.csv");
const pathJson = path.join(__dirname, "../uploads/currentcsv.json");

let newMovie: any;
const createdMovies = []
const alreadyCreatedMovies = [];

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
        await postGenre(movie.genero, movie = newMovie.dataValues.id)
        createdMovies.push(newMovie.dataValues.id);
        
      } else {
        alreadyCreatedMovies.push(movie.titulo);
      }
    } catch (error) {
      console.log(error);
    }
  });
  console.log(createdMovies);
  console.log(alreadyCreatedMovies);
  
  //(movie.id, genreData)

  try {
    fs.unlinkSync(path.join(__dirname, "../uploads/currentcsv.csv"));
    fs.unlinkSync(path.join(__dirname, "../uploads/currentcsv.json"));
  } catch (err) {
    console.error(err);
  }
  console.log('hola', newMovie);
  
  return newMovie;
};

export const getMovies = async () => {  
  const allMovies = await getAllMovies()
  
  return allMovies;
};

export const getSearchedMovies = async (data) => {  
  const searchedMovies = await getMoviesWhere(data)
  
  return searchedMovies;
};
