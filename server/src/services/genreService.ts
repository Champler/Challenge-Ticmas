import { createGenre } from "../repositories/genreRepositorie";

let newGenre;
export const postGenre = async (genre, movie) => {
    try {
      const genreSorted: { movie_id: string; genre: string; } = {
        genre: genre,
        movie_id: movie,
      };

      newGenre = await createGenre(genreSorted);
    } catch (error) {
      console.log(error);
    }

  return newGenre;
};
