/**
 * Created by apple on 2017/3/8.
 * 产品的最小单元
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tb_proceduresSchema = new Schema({
    Id:Number,
    ProcedureName:String,//名称
    Stat:Number,//状态
    MoneyCost:Number,//成本
    TimeCost:Number//时间
});

module.exports = mongoose.model('tb_procedures', tb_proceduresSchema);