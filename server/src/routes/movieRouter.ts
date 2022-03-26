import express from 'express'
import { create, getMoviesController } from '../controllers/movieController'
import { searchMiddleware } from '../middlewares/searchMiddleware'
import {upload} from '../middlewares/uploadCSV'

const router = express.Router() 

router.post('/', upload.single('csv'), create)
router.get('/getMovies', searchMiddleware, getMoviesController)

export default router