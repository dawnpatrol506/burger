const Sequelize = require('sequelize');
const sequelize = new Sequelize('heroku_23c874120a90694', 'bc88f1c38d3232', '6dde125b', {
    host: 'us-cdbr-iron-east-01.cleardb.net',
    dialect: 'mysql'
});

module.exports = sequelize;