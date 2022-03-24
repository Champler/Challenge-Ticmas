import { DataTypes, Model, Sequelize } from 'sequelize'

interface ActorAttributes {
  id: string
  full_name: string
}

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  class Actor extends Model<ActorAttributes> implements ActorAttributes {
    id: string
    full_name: string

    static associate(models: any) {
      Actor.belongsToMany(models.actor_movie, {
        as: 'actors',
        through: 'actor_movie',
        foreignKey: 'actor_id',
        otherKey: 'movie_id',
        timestamps: false,
      })
    }
  }

  Actor.init(
    {
      id: {
        type: dataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: dataTypes.UUIDV4,
      },
      full_name: {
        type: dataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      sequelize,
      modelName: 'admin',
    }
  )

  return Actor
}