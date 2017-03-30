/**
 * Created by apple on 2017/3/28.
 */
var express = require('express');
var router = express.Router();
var order=require('../api/order.controller.js');


router.get('/getTaskmInfos',order.getTaskmInfos);


module.exports=router;