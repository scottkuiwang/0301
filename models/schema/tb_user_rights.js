/**
 * Created by apple on 2017/3/20.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tb_user_rightsSchema = new Schema({
    Id:Number,
    AgentId:Number,
    UserId:Number,
    RId:Number,
    RightName:String
});

module.exports = mongoose.model('tb_user_rights', tb_user_rightsSchema);