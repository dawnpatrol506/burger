const express = require('express');
const router = express.Router();
const orm = require('../config/orm');
const Burger = require('../models/burger');


router.get('/', (req, res) => {
    orm.selectAll(burgers => {
        res.render('index', {burgers});
    })
});

router.put('/', (req, res) => {
    orm.updateOne(req.body.burger, (result) => {
        if(result){
            res.send({status: 200});
        }
    });
})

module.exports = router;