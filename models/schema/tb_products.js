/**
 * Created by apple on 2017/3/8.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tb_productsSchema = new Schema({
    Id:Number,
    ProductName:String,//名称
    Price:Number,//价格
    MinPrice:Number,//最低价格
    MaxPrice:Number,//最高价格
    DwId:Number,//单位id
    IsChanged:Number,//是否可修改
    Stat:Number,//状态
    IsReg:Number,//是否是注册项目
    IsBank:Number,//是否是银行开户
    IsCommon:Number,//是否是一般性的业务
    IsUrgent:Number//是否是加急项目(无流程)
});

module.exports = mongoose.model('tb_products', tb_productsSchema);