import db from '../database/models'

export const createGenre = async (data) => {

    const genre = await db.genre.create(data)
    
    return genre;
};