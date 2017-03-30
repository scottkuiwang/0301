/**
 * Created by apple on 2017/3/30.
 */
var express = require('express');
var router = express.Router();
var taskm=require('../api/taskm.controller.js');


router.post('/:Id/updateTaskm',taskm.updateTaskm);


module.exports=router;