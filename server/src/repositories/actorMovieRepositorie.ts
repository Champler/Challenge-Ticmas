import db from "../database/models";

export const createActorMovie = async (movie_id, actor_id) => {
  try {
    const actor = await db.actor_movie.create({
      movie_id,
      actor_id,
    });

    return actor;
  } catch (error) {
    console.log(error);
  }
};
