const Burger = require('../models/burger');

const orm = {
    selectAll: function (callback) {
        Burger.findAll().then(burgers => callback(burgers));
    },
    insertOne: function () { },
    updateOne: function (id, callback) {
        Burger.findByPk(id).then(burger => {
            burger.update({ devoured: true }).then((result) => callback(result));
        })
    }
}

module.exports = orm;