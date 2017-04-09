/**
 * Created by apple on 2017/3/16.
 */
var express = require('express');
var router = express.Router();
var product=require('../api/product.controller.js');

/* GET home page. */
router.get('/create', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/new', function(req, res, next) {
    res.render('product-new', { title: 'Express' });
});
router.get('/test', function(req, res, next) {
    res.render('test', { title: 'Express' });
});
//新增
//router.post('/',procedure.createProcedure);
////校验数据
//router.get('/check',procedure.checkProcedure);
////修改
//router.post('/:Id/update',procedure.updateProcedure);
//列表
router.get('/list',product.list);
//查询
router.get('/query',product.query);
////获取详细数据
//router.get('/:Id/getProdureById',procedure.getProdureById);
////删除
//router.post('/:Id/remove',procedure.removeProcedure);

module.exports = router;
