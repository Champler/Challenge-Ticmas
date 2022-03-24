import { DataTypes, Sequelize } from 'sequelize'
import { sequelize } from '../sequelize'
import actor from './actor'
import movie from './movie'
import genre from './genre'
import actor_movie from './actor_movie'

const db: any = {
  actor: actor(sequelize, DataTypes),
  movie: movie(sequelize, DataTypes),
  genre: genre(sequelize, DataTypes),
  actor_movie: actor_movie(sequelize, DataTypes),
}

Object.keys(db).forEach((k) => {
  if (db[k].associate != undefined) {
    db[k].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize
