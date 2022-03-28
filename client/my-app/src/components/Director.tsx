import React from 'react'

interface DirectorProps { 
    movieDirector: string
}

export default function Director({ movieDirector }: DirectorProps) {
  return (
    <h2 style={{fontSize: 16, }}>Directed by: { movieDirector }</h2>
  )
}
