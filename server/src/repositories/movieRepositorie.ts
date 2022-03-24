import { Op } from 'sequelize';
import db from '../database/models'

export const createMovie = async (data) => {
    try {
        const movie = await db.movie.create(data)

        return movie
    }catch (error){
        throw new Error(error)
    }
};

export const checkMovieByName = async (data) => {
    try {
        const movieByName = await db.movie.findOne({where: {title: data}})

        return movieByName
    } catch (error) {
        throw new Error(error)
    }
}

export const checkMovieById = async (data) => {
    try {
        const movieByName = await db.movie.findById(data)

        return movieByName
    } catch (error) {
        throw new Error(error)
    }
}

export const getAllMovies = async () => {
    try {
        const movieByName = await db.movie.findAll({
            include: [
                {
                  model: db.genre,
                  as: 'movie_Genre',
                },
              ],
        })

        return movieByName
    } catch (error) {
        throw new Error(error)
    }
}
export const getMoviesWhere = async (data) => {
    try {
        const movieByName = await db.movie.findAll({
            include: [
                {
                  model: db.genre,
                  as: 'movie_Genre',
                },
              ],
              where: {
                    [Op.or]: [
                        {title: {[Op.substring]:`%${data}%`}},
                        {director: {[Op.substring]:`%${data}%`}},
                        {year: {[Op.substring]:`%${data}%`}},
                    ]
              }
        })

        return movieByName
    } catch (error) {
        throw new Error(error)
    }
}