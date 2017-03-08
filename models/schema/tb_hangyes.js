/**
 * Created by apple on 2017/3/8.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tb_hangyesSchema = new Schema({
    Id:Number,
    AgentId:Number,//代理点编号
    Hyname:String,//行业名称
    Stat:Number,
    Fanwei:String//范围
});

module.exports = mongoose.model('tb_hangyes', tb_hangyesSchema);