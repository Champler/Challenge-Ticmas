import { postMovie, getMovies, getSearchedMovies } from '../services/movieService'

export const create = async (req, res, next) => {

    try {
      const movie = await postMovie();
      
      res.status(201).json({
        status: 201,
        msg: `movie created`,
        movie,
      })
    } catch (error) {
      next(error);
    }
};
export const getMoviesController = async (req, res, next) => {

    try {
      const allMovies = await getMovies();
      
      res.status(201).json({
        status: 201,
        msg: `movie created`,
        allMovies,
      })
    } catch (error) {
      next(error);
    }
};

export const searchMoviesController = async (req, res, next) => {

    try {
      const allMovies = await getSearchedMovies(req.body.search);
      
      res.status(201).json({
        status: 201,
        msg: `movie created`,
        allMovies,
      })
    } catch (error) {
      next(error);
    }
};