/**
 * Created by apple on 2017/3/8.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tb_product_duresSchema = new Schema({
    Id:Number,
    OrderId:Number,
    CPId:Number,
    PDId:Number
});

module.exports = mongoose.model('tb_product_dures', tb_product_duresSchema);