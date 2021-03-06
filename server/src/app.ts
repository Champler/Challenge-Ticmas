import express  from 'express'
import type { ErrorRequestHandler } from "express";
import movieRouter from './routes/movieRouter';
import cors from 'cors';

const app: express.Application = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cors());

app.use('/movie', movieRouter)

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  res.status(400).json({
    error: {
      status: error.status,
      message: error.message || 'Internal Server Error.',
    },
  })
};
app.use(errorHandler);

app.listen(3001, function () {
  console.log('Movies app listening on port 3001!');
});