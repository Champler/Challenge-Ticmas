import {  checkMovieByName, createMovie, getMoviesWhere } from "../repositories/movieRepositorie";
import fs from "fs";
import path from "path";
import csvToJson from "./csvToJson";
import { postGenre } from "./genreService";
import { postActors } from "./actorService";

let newMovie: any;
const pathCsv = path.join(__dirname, "../uploads/currentcsv.csv");

export const postMovie = async () => {
  const movies = await csvToJson(pathCsv); 

  movies.forEach(async (movie) => { 
    try {

    const exists = await checkMovieByName(movie.titulo);
    
  
      if (!exists) {
        const movieSorted: { title: string; director: string; year: string } = {
          title: movie.titulo,
          director: movie.director,
          year: movie.año,
        };
        
        newMovie =  await createMovie(movieSorted);
        const actors = movie.actores.split(',')
        await postActors(actors, newMovie.dataValues.id)

        await postGenre(movie.genero, movie= newMovie.dataValues.id)        
      }
    } catch (error) {
      console.log(error);
      
    }
  });

  try {
    fs.unlinkSync(path.join(__dirname, "../uploads/currentcsv.csv"));
    /* fs.unlinkSync(path.join(__dirname, "../uploads/currentcsv.json")); */
  } catch (err) {
    console.error(err);
  }

  return 'movies created succesfully';
};

export const getMovies = async (data) => {  
  const page = (data.page - 1) * 20
  const allMovies = await getMoviesWhere({page,search: data.search.toLowerCase() })
  
  allMovies.forEach(movie =>{
    movie.actors.forEach(actor => {

      actor.dataValues.actor_movie.dataValues = undefined
    })
  })
  return { movies: allMovies, page: data.page };
};


