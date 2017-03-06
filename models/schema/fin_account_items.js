/**
 * Created by apple on 2017/3/6.
 * account items
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fin_account_itemsSchema = new Schema({
    itemId:Number,//科目号,
    typeId:Number,//类别编号
    itemName:String,//科目名称
    stat:Number,//是否启用标签
    createdby:{type: Date, default: Date.now }
});

module.exports = mongoose.model('fin_account_items', fin_account_itemsSchema);
