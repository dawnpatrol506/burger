const connection = require('../config/connection');
const Sequelize = require('sequelize');
const Burger = connection.define('burger', {
    burger_name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN,
}, {timestamps: false});

module.exports = Burger;

