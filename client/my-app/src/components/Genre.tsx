interface GenreArrayProps { 
    movieGenre: [GenreProps]
}
interface GenreProps { 
    genre: string
}


export default function Genre( { movieGenre } : GenreArrayProps) {

    return (
        <div>
            <p style= {{fontSize: 12}}>{movieGenre[0].genre}</p>
        
      </div>
  )
}
