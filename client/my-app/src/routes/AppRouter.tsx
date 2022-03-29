import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { FileForm } from "../components/FileForm";
import Movie from "../Movie";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<FileForm />} />
          <Route path="/movie/getMovies" element={<Movie />} />
          <Route path="/*" element={<Navigate replace to="/" />}/>
      </Routes>
    </BrowserRouter>
  );
}
