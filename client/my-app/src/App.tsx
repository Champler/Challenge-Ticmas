import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Movie from './Movie';
import { FileForm } from './components/FileForm';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <div className="App">
      <AppRouter/>
     {/*  <Header /> */}
{/*       <FileForm />
      <Movie/> */}
    </div>
  );
}

export default App;
