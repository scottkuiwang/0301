/**
 * Created by apple on 2017/3/17.
 */
var express = require('express');
var router = express.Router();
var customer=require('../api/customer.controller.js');

/* GET home page. */
router.get('/create', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
//列表
router.get('/query',customer.query);

module.exports = router;
