import db from '../database/models'

export const createMovie = async (data) => {

    const movie = await db.actor.create(data)
    
    return movie;
};