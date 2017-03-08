/**
 * Created by apple on 2017/3/8.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tb_hangyesSchema = new Schema({
    Id:Number,
    Hyname:String,
    Stat:Number,
    Fanwei:String
});

module.exports = mongoose.model('tb_hangyes', tb_hangyesSchema);