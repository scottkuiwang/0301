/**
 * Created by apple on 2017/3/6.
 */
var express = require('express');
var router = express.Router();
var finbaseinfo=require('../api/fin.baseinfo.controller.js');

//新增记账科目
router.post('/',finbaseinfo.createFinItemInfo);

module.exports=router;