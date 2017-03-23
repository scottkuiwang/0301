/**
 * Created by apple on 2017/3/19.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tb_order_dsSchema = new Schema({
    AgentId:Number,
    Oid:Number,//订单编号
    Did:Number,//订单明细编号
    UserId:Number,//创建用户
    createdby:Number,//订单日期戳
    Pid:Number,//产品编号
    ProductName:String,//产品名称
    Price:Number,//单价
    Price_payed:Number,//最终交易单价
    Num:Number,//数量
    Amt:Number,//金额
    Stat:Number,//状态
    Seted:Number,//流程是否设置（0：表示不需要设置流程，1：未设置，2：已设置）
    Finishedby:Number//完成日期戳
});

module.exports = mongoose.model('tb_order_ds', tb_order_dsSchema);