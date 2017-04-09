/**
 * Created by apple on 2017/3/30.
 */
var orderm=require('./../models/schema/tb_order_ms.js');
var orderd=require('./../models/schema/tb_order_ds.js');
var taskms=require('./../models/schema/tb_task_ms.js');
var async=require('async'),
    url = require("url");
var _ = require('lodash');

//修改tb_task_ms数据
exports.updateTaskm=function(req,res){
    try{
        var Id=req.params.Id;
        var postdata={
            OrderId:req.body.OrderId,
            UserId:req.body.UserId,
            UserName:req.body.UserName,
            Supposedday:req.body.Supposedday,
            Notes:req.body.Notes
        };
        taskms.findOne({'Id':Id},function(err,data){
            if(err){console.log(err);}
            var _id=data._id;
            taskms.update({'_id':_id},{$set:postdata},function(err,result){
                if(err){console.log(err);}
                return res.jsonp(201,{'msg':'YES',data:result});
            });
        });
    }catch(e){
        console.log(e);
    }
};

//获取任务数
exports.getTasks=function(req,res){

};