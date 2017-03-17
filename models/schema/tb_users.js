/**
 * Created by apple on 2017/3/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    agentid:Number,
    uid:String,
    name:String,
    psw:String,
    mobile:String,
    stat:Number
});

module.exports = mongoose.model('tb_users', usersSchema);