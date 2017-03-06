/**
 * Created by apple on 2017/3/6.
 */
var express = require('express');
var router = express.Router();
var finbaseinfo=require('./api/fin.baseinfo.controller.js');

router.get('/');

module.exports=router;