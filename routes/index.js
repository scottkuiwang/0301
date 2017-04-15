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
router.get('/test', function(req, res, next) {
    res.render('test');
});
/* vue. */
router.get('/vue', function(req, res, next) {
    res.render('vue');
});

/* order. */
router.get('/neworder', function(req, res, next) {
    res.render('order-new');
});

/* order. */
router.get('/form', function(req, res, next) {
    res.render('admin-form');
});

router.get('/inifrm',index.inifrm);


router.get('/:id/app',index.test);


module.exports = router;
