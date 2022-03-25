import { createActorMovie } from "../repositories/actorMovieRepositorie";
import { createActor, findActor } from "../repositories/actorRepositorie";

export const postActors = async (actors, movie_id) => {
  actors.forEach(async actor => {
    
      const exists = await findActor(actor)

      if (!exists) {
        const actorSorted: {full_name: string; } = {
          full_name: actor,
        };

        const newActor = await createActor(actorSorted);
        
        await createActorMovie(movie_id, newActor.id)
      } else {
        await createActorMovie(movie_id, exists.dataValues.id)
      }
    })

    return 'Actors created successfully';
};
