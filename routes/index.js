var express = require('express');
var router = express.Router();
var index=require('../api/index.controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin-index', { title: 'Express' });
});
/* GET home page. */
router.get('/product', function(req, res, next) {
    res.render('admin-product', { title: 'Express' });
});
/* GET home page. */
router.get('/procedure', function(req, res, next) {
    res.render('admin-procedure', { title: 'Express' });
});
/*move div from one place to anther place*/
router.get('/movediv',function(req,res,next){
    res.render('movediv',{});
});
/*drag div from one place to anther place*/
router.get('/dragdiv',function(req,res,next){
  res.render('dragdiv',{});
});
/* Login. */
router.get('/login', function(req, res, next) {
    res.render('login');
});

/* vue. */
router.get('/vue', function(req, res, next) {
    res.render('vue');
});

/* order. */
router.get('/neworder', function(req, res, next) {
    res.render('order-new');
});

router.get('/inifrm',index.inifrm);


module.exports = router;
