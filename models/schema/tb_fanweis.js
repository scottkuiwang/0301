/**
 * Created by apple on 2017/3/8.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tb_fanweisSchema = new Schema({
    AgentId:Number,//代理点编号
    HangyeId:Number,//行业编号
    Fanwei:String//范围描述
});

module.exports = mongoose.model('tb_fanweis', tb_fanweisSchema);