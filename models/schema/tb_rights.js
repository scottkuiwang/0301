/**
 * Created by apple on 2017/3/20.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tb_rightesSchema = new Schema({
    Id:Number,
    TypeName:String
});

module.exports = mongoose.model('tb_rights', tb_rightesSchema);