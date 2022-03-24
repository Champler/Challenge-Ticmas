import { DataTypes, Model, Sequelize } from 'sequelize'

interface ActorMovieAttributes {
  id: string
  movie_id: string
  actor_id: string
}

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  class ActorMovie extends Model<ActorMovieAttributes> implements ActorMovieAttributes {
    id: string
    movie_id: string
    actor_id: string
  }

  ActorMovie.init(
    {
      id: {
        type: dataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: dataTypes.UUIDV4,
      },
      movie_id: {
        type: dataTypes.UUID,
        allowNull: false,
      },
      actor_id: {
        type: dataTypes.UUID,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      sequelize,
      modelName: 'actor_movie',
    }
  )

  return ActorMovie
}