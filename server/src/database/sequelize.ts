import { Sequelize } from 'sequelize'
import config from '../services/env'

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST_NAME, DB_PORT } = config

export const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST_NAME,
  port: DB_PORT,
  logging: console.log,
  dialect: 'postgres',
})
