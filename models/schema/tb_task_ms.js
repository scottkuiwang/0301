/**
 * Created by apple on 2017/3/26.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tb_task_msSchema = new Schema({
    Id:Number,
    PomId:Number,//订单主表编号
    PodId:Number,//订单从表编号
    Agentid:Number,//公司用户编号
    SeterId:Number,//设置者编号
    ProductId:Number,//产品编号
    ProductName:String,//产品名称
    ProcessId:Number,//过程名Id
    ProcessName:String,//过程名
    OrderId:Number,//状态
    UserId:Number,//任务执行人Id
    UserName:String,//任务执行人
    Supposedday:Number,//预计完成日期
    Notes:String,//备注
    Stat:Number,//状态(-1未设置,0-未激活，1-未执行，2-执行中，3-已完成，99-已删除)
    Finishedday:Number//实际完成时间戳
});

module.exports = mongoose.model('tb_task_ms', tb_task_msSchema);