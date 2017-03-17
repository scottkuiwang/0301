/**
 * Created by apple on 2017/3/12.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tb_product_duresSchema = new Schema({
    AgentId:Number,//公司用户编号
    OrderId:Number,//序号
    CPId:Number,//产品ID
    PDId:Number//过程ID
});

module.exports = mongoose.model('tb_product_dures', tb_product_duresSchema);