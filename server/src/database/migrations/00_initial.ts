import { DataTypes } from 'sequelize'

export async function up({ context: queryInterface }) {
  const TIMESTAMPS = {
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }
  await queryInterface.createTable('movie', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ...TIMESTAMPS,
  })

  await queryInterface.createTable('actor', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ...TIMESTAMPS,
  })
  await queryInterface.createTable('genre', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    movie_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'movie',
        key: 'id',
      },
    },
    ...TIMESTAMPS,
  })
  await queryInterface.createTable('actor_movie', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    actor_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'actor',
          key: 'id',
        },
      },
    movie_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'movie',
        key: 'id',
      },
    },
    ...TIMESTAMPS,
  })
}

export async function down({ context: queryInterface }) {
  await queryInterface.dropTable('actor_movie')
  await queryInterface.dropTable('actor')
  await queryInterface.dropTable('genre')
  await queryInterface.dropTable('movie')
}
