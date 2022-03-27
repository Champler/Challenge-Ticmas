interface ActorArrayProps {
  movieActor: [ActorProps];
}
interface ActorProps {
  full_name: string;
}

export default function Actor({ movieActor }: ActorArrayProps) {
  return (
    <div>
      {movieActor.map((actor) => (
        <div>
          <h4>{actor.full_name}</h4>
        </div>
      ))}
    </div>
  );
}
