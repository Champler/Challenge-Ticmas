import React from 'react'

interface TitleProps { 
    movieTitle: string
}

export default function Title({ movieTitle }: TitleProps) {
  return (
    <h1>{ movieTitle }</h1>
  )
}
