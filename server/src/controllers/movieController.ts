import { postMovie } from '../services/movieService'

export const create = async (req, res, next) => {
    try {
      const movie = await postMovie(req.body);
      
      res.status(201).json({
        status: 201,
        msg: 'Movie createed succesfully',
        movie,
      })
    } catch (error) {
      next(error);
    }
};