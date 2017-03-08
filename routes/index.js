var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
module.exports = router;
