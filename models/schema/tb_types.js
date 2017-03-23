/**
 * Created by apple on 2017/3/18.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tb_typesSchema = new Schema({
    Id:Number,
    TypeName:String,
    Stat:Number
});

module.exports = mongoose.model('tb_types', tb_typesSchema);