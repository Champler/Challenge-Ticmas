import { createActorMovie } from "../repositories/actorMovieRepositorie";

export const postActorMovie = async (movie_id, actor_id) => {
  try {
    await createActorMovie(movie_id, actor_id);

    return "Actors created successfully on middle table";
  } catch (error) {
    console.log(error);
  }
};
