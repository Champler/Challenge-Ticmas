const configs = {
    development: {
      DB_USERNAME: 'postgres',
      DB_PASSWORD: 'postgres',
      DB_NAME: 'postgres',
      DB_HOST_NAME: 'localhost',
      DB_PORT: 5432,
      HOSTNAME: 'http://localhost:3000',
    },
}
export const NODE_ENV = 'development'
  
export default configs[NODE_ENV]