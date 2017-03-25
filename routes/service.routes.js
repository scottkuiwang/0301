/**
 * Created by apple on 2017/3/23.
 */
var express = require('express');
var router = express.Router();
var product=require('../api/product.controller.js');

/* GET home page. */
router.get('/new', function(req, res, next) {
    res.render('service-new', { title: 'Express' });
});

module.exports = router;