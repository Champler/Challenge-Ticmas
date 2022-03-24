import { createMovie } from '../repositories/movieRepositorie'

export const postMovie = async (data) => {
   const movie = await createMovie(data)

   if(!movie){
       const error = {status: 500, msg: 'Movie could not be created'}

       throw error
   }
   //(movie.id, genreData)

   return movie
}

