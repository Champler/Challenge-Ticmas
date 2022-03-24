import { SequelizeStorage, Umzug } from 'umzug'
import { sequelize } from '../../sequelize'

export const umzug = new Umzug({
  migrations: { glob: './src/database/migrations/*.ts' },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
})
