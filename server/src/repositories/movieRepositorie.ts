import db from '../database/models'

export const createMovie = async (data) => {

    const movie = await db.movie.create(data)
    // aca creo la pelicula, el actor y el genero
    return movie
};