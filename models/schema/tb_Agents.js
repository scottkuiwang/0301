/**
 * Created by apple on 2017/3/12.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tb_agentsSchema = new Schema({
    Id:Number,
    CompanyName:String,//公司用户编号
    Mobile:String,//序号
    Psw:String,//产品ID
    Stat:Number,//过程ID
    Startlog:Number, //过程ID
    Endlog:Number//过程ID
});

module.exports = mongoose.model('tb_agents', tb_agentsSchema);