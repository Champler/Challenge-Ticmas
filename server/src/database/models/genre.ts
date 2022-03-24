import { DataTypes, Model, Sequelize } from 'sequelize'

interface GenreAttributes {
  id: string
  genre: string
  movie_id: string
}

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  class Genre extends Model<GenreAttributes> implements GenreAttributes {
    id: string
    genre: string
    movie_id: string

    static associate(models: any) {
      Genre.belongsTo(models.movie, {
        as: 'Genre',
        foreignKey: 'movie_id',
      })
    }
  }

  Genre.init(
    {
      id: {
        type: dataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: dataTypes.UUIDV4,
      },
      genre: {
        type: dataTypes.UUID,
        allowNull: false,
      },
      movie_id: {
        type: dataTypes.UUID,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      sequelize,
      modelName: 'genre',
    }
  )

  return Genre
}