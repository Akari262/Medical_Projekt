const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME, //Назва бази даних
    process.env.DB_USER, //Назва бази даних
    process.env.DB_PASSWORD, //Назва бази даних
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)