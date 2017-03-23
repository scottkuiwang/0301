/**
 * Created by apple on 2017/3/19.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tb_order_msSchema = new Schema({
    AgentId:Number,
    Oid:Number,//订单编号
    UserId:Number,//创建用户
    createdby:Number,//订单日期戳
    CusId:Number,//客户编号
    LinkMan:String,//客户名称
    QQ:String,//QQ
    Wechat:String,//微信号
    Ass:String,//收件地址
    Notes:String,//备注
    Stat:Number,//状态
    Amt:Number,//因收款
    Amt_payed:Number,//已收款
    Amt_unpayed:Number,//未收款
    Finishedby:Number//完成日期戳
});

module.exports = mongoose.model('tb_order_ms', tb_order_msSchema);