interface ActorProps {
  full_name: string;
}
interface ActorArrayProps {
  movieActor: Array<ActorProps>;
}

export default function Actor({ movieActor }: ActorArrayProps) {
  return (
    <div>
      <h3>Actors:</h3>
      {movieActor.map((actor) => (
        <div>
          <h4 style={{fontSize: 12, }}>{actor.full_name}</h4>
        </div>
      ))}
    </div>
  );
}
