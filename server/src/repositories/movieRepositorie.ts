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

export const getAllMovies = async () => {
    try {
        const movieByName = await db.movie.findAll({
            include: [
                {
                  model: db.genre,
                  as: 'movie_Genre',
                  attributes: ['genre']
                },
                {
                  association: 'actors',
                  attributes: ['full_name']
                },
              ],
        })

        return movieByName
    } catch (error) {
        throw new Error(error)
    }
}

export const checkMovieByName = async (data) => {
    try {
        const movieByName = await db.movie.findOne({where: {title: data}})

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
                    attributes: ['genre']
                  },
                  {
                    association: 'actors',
                    attributes: ['full_name']
                  },
              ],
              limit: 20,
              offset: data.page,
              where: {
                    [Op.or]: [
                        {title: {[Op.substring]:`%${data.search}%`}},
                        {director: {[Op.substring]:`%${data.search}%`}},
                        {year: {[Op.substring]:`%${data.search}%`}},
                    ]
              }
        })

        return movieByName
    } catch (error) {
        throw new Error(error)
    }
}