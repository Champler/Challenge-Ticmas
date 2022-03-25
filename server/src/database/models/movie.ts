import { DataTypes, Model, Sequelize } from 'sequelize'

interface MovieAttributes {
  id: string
  title: string
  director: string
  year: number
}

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  class Movie extends Model<MovieAttributes> implements MovieAttributes {
    id: string
    title: string
    director: string
    year: number

    static associate(models: any) {
        Movie.belongsToMany(models.actor_movie, {
          as: 'actors',
          through: 'actor_movie',
          foreignKey: 'movie_id',
          otherKey: 'actor_id',
        })
        Movie.hasMany(models.genre, {
          as: 'movie_Genre',
          foreignKey: 'movie_id',
        })
      }
  }

  Movie.init(
    {
      id: {
        type: dataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: dataTypes.UUIDV4,
      },
      title: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      director: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      year: {
        type: dataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      sequelize,
      modelName: 'movie',
    }
  )

  return Movie
}