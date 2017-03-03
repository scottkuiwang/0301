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
module.exports = router;
