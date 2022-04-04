import { createActorMovie } from "../repositories/actorMovieRepositorie";
import { createActor, findActor } from "../repositories/actorRepositorie";

export const postActors = async (actors, movie_id) => {
  let newActor;
 
  actors.forEach(async actor => {
    //return console.log(actor.split(' ')); //Llega mas de un actor
       
      const exists = await findActor(actor)

      if (exists) {
        await createActorMovie(movie_id, exists.id);
        console.log('¿nazhe')
        return exists;
      } 
      if (!exists) {
        const actorSorted: {full_name: string } = {
          full_name: actor,
        };

        newActor = await createActor(actorSorted);
      }
      
      if (!newActor) {
        return new Error('actor not created');
      }

      await createActorMovie(movie_id, newActor.id);
      return newActor;
    
    })

};
