const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    first_name: {type: DataTypes.STRING},
    last_name: {type: DataTypes.STRING},
    date_of_birth: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    id_patient: {type: DataTypes.INTEGER},
    id_doctor: {type: DataTypes.INTEGER},
    date: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING, allowNull: false},
    text: {type: DataTypes.STRING},
    recomendation: {type: DataTypes.STRING},
})

module.exports = {
    User,
    Type

}





