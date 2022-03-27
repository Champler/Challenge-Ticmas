import React from 'react'

interface YearProps { 
    movieYear: string
}

export default function Year({ movieYear }: YearProps) {
  return (
    <h3>{ movieYear }</h3>
  )
}
