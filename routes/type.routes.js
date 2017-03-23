/**
 * Created by apple on 2017/3/18.
 */
var express = require('express');
var router = express.Router();
var type=require('../api/type.controller.js');

router.get('/query',type.query);


module.exports=router;