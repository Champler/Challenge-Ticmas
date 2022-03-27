import React, { useState } from 'react'
import EachMovie from './components/EachMovie'
import useFetch from './hooks/useFetch';
import Movie from './Movie';

export default function Header() {
  const { data, setData } = useFetch(1, 'a');
  return (

    <div>
        <input
        type="text"
        placeholder="Type your favorite movie"
        value={data.slug}
        onChange={(e) => setData({ ...data, slug: e.target.value })}
      />
      <br />
      {data.results.length > 1? <Movie /> : null}
    </div>
  )
}
