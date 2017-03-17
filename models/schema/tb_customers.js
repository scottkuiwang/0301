/**
 * Created by apple on 2017/3/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tb_customersSchema = new Schema({
    Id:Number,
    AgentId:Number,
    LinkName:String,
    Mobile:String,
    QQ:String,
    Wechat:String,
    Ass:String,
    BkInfo:String,
    Notes:String,
    Stat:Number
});

module.exports = mongoose.model('tb_customers', tb_customersSchema);