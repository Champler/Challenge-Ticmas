interface GenreArrayProps { 
    movieGenre: [GenreProps]
}
interface GenreProps { 
    genre: string
}


export default function Genre( { movieGenre } : GenreArrayProps) {

    return (
        <div>
            {movieGenre[0].genre}
        
      </div>
  )
}
