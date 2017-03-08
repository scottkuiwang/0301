/**
 * Created by apple on 2017/3/8.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tb_idsSchema = new Schema({
    type:String,
    value :Number
});

module.exports = mongoose.model('tb_ids', tb_idsSchema);