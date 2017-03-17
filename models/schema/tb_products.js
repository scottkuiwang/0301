/**
 * Created by apple on 2017/3/8.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tb_productsSchema = new Schema({
    AgentId:Number,
    Pid:Number,
    Type:Number,
    ProductName:String,//名称
    Price:Number,//价格
    MinPrice:Number,//最低价格
    MaxPrice:Number,//最高价格
    DwId:Number,//单位id
    IsChanged:String,//是否可修改
    Stat:Number,//状态
    IsReg:String,//是否是注册项目
    IsBank:String,//是否是银行开户
    IsCommon:String,//是否是一般性的业务
    IsFinance:String,//是否是财务代理
    Months:Number,//财务代理月数
    IsUrgent:String//是否是加急项目(无流程)
});

module.exports = mongoose.model('tb_products', tb_productsSchema);