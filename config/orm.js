const Burger = require('../models/burger');

const orm = {
    selectAll: function (callback) {
        Burger.findAll().then(burgers => callback(burgers));
    },
    insertOne: function (name, callback) {
        Burger.create({burger_name: name, devoured: false}).then(result => callback(result));
    },
    updateOne: function (id, callback) {
        Burger.findByPk(id).then(burger => {
            burger.update({ devoured: true }).then((result) => callback(result));
        })
    }
}

module.exports = orm;