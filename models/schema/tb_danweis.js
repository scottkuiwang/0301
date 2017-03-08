/**
 * Created by apple on 2017/3/8.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tb_danweisSchema = new Schema({
    Id:Number,
    DanweiName:String,
    Stat:Number
});

module.exports = mongoose.model('tb_danweis', tb_danweisSchema);