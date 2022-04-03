interface GenreProps { 
    genre: string
}
interface GenreArrayProps { 
    movieGenre: Array<GenreProps>
}


export default function Genre( { movieGenre } : GenreArrayProps) {

    return (
        <div>
            <p style= {{fontSize: 12}}>{movieGenre[0].genre}</p>
        
      </div>
  )
}
