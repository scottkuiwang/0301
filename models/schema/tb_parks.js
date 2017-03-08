/**
 * Created by apple on 2017/3/8.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tb_parksSchema = new Schema({
    Id:Number,
    ParkName:String,
    Stat:Number
});

module.exports = mongoose.model('tb_parks', tb_parksSchema);