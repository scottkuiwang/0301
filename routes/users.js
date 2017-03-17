var express = require('express');
var router = express.Router();
var user=require('../api/users.controller.js');
/* GET users list. */
router.get('/list',user.list);



module.exports = router;
