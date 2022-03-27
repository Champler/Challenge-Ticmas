import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { FileForm } from '../components/FileForm'
import Movie from '../Movie'

export default function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element= {<FileForm/>} />
        <Route path='/movie/getMovies' element= {<Movie/>} />
    </Routes>
    </BrowserRouter>
  )
}
