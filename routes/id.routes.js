/**
 * Created by apple on 2017/3/8.
 */
var express=require('express');
var router=express.Router();
var ids=require('../api/id.controller.js');
router.get('/',ids.getMaxId);
module.exports=router;