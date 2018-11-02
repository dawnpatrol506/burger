const Sequelize = require('sequelize');
const sequelize = new Sequelize('burgers_db', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;