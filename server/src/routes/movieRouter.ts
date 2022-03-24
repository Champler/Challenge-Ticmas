import express from 'express'
import { create, getMoviesController, searchMoviesController } from '../controllers/movieController'
import {upload} from '../middlewares/uploadCSV'

const router = express.Router() 

router.post('/', upload.single('csv'), create)
router.get('/getMovies', getMoviesController)
router.get('/movieSearch', searchMoviesController)

export default router