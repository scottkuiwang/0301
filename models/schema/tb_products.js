/**
 * Created by apple on 2017/3/8.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tb_productsSchema = new Schema({
    Id:Number,
    ProductName:String,
    Price:Number,
    MinPrice:Number,
    MaxPrice:Number,
    DwId:Number,
    IsChanged:Number,
    ParkId:Number,
    Stat:Number,
    IsReg:Number,
    IsBank:Number,
    IsCommon:Number,
    IsUrgent:Number
});

module.exports = mongoose.model('tb_products', tb_productsSchema);