/**
 * Created by apple on 2017/3/25.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tb_user_tasksSchema = new Schema({
    Id:Number,
    AgentId:Number,
    UserId:Number,
    Task_wjh:Number,//未激活的任务数
    Task_wzx:Number,//未执行的任务数
    Task_zxz:Number,//执行中的任务数
    Task_yjs:Number,//已结束的任务数
    Stat:Number//状态
});

module.exports = mongoose.model('tb_user_tasks', tb_user_tasksSchema);