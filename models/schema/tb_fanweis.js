/**
 * Created by apple on 2017/3/8.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tb_fanweisSchema = new Schema({
    AgentId:Number,
    HangyeId:Number,
    Fanwei:String
});

module.exports = mongoose.model('tb_fanweis', tb_fanweisSchema);