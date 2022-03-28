import React from 'react'

interface TitleProps { 
    movieTitle: string
}

export default function Title({ movieTitle }: TitleProps) {
  return (
    <h1 style={{fontSize: 18, }}>{ movieTitle }</h1>
  )
}
