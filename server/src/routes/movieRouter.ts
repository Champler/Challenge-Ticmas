import express from 'express'
import { create } from '../controllers/movieController'

const router = express.Router() 

router.post('/', create)

export default router