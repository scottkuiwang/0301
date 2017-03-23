/**
 * Created by apple on 2017/3/18.
 */
var express = require('express');
var router = express.Router();
var index=require('../api/index.controller.js');

router.get('/movedata',function(req,res,next){
   res.render('tec-movedata');
});
router.get('/move-div-0',function(req,res,next){
   res.render('tec-move-div-0');
});

module.exports=router;