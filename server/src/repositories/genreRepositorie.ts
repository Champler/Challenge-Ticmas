import db from '../database/models'

export const createMovie = async (data) => {

    const movie = await db.genre.create(data)
    
    return movie;
};